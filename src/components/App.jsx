import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';

const API_KEY = '33395235-316870acdb7f794f3e9104cab';
const BASE_URL = 'https://pixabay.com/api/';

export class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
    isLoading: false,
    largeImageURL: '',
    showModal: false,
  };

  onSubmit = async query => {
    if (query !== this.state.query) {
      this.setState({ images: [], page: 1, query });
    }
    {
      this.setState({
        query,
        isLoading: true,
      });
      const response = await fetch(
        `${BASE_URL}?q=${query}&page=${this.state.page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(response => response.json())
        .catch(error => console.log('There was an error', error));

      if (response && response.hits.length > 0) {
        this.setState(() => {
          return {
            images: [...this.state.images, ...response.hits],
            page: this.state.page + 1,
            isLoading: false,
          };
        });
      } else {
        console.log('There was an error');
        this.setState({
          images: [],
        });
      }
    }
  };

  loadMore = async event => {
    event.preventDefault();
    this.onSubmit(this.state.query);
  };

  onShow = url => {
    this.setState({ showModal: true, largeImageURL: url });
  };

  onClose = () => {
    this.setState({ showModal: false, largeImageURL: '' });
  };

  render() {
    return (
      <div className="App">
        <Searchbar onSubmit={this.onSubmit} />
        {this.state.isLoading && <Loader />}
        <ImageGallery images={this.state.images} onShow={this.onShow} />

        {this.state.images.length > 0 && (
          <Button onClick={this.loadMore} name={'Load more'} />
        )}
        {this.state.showModal && (
          <Modal onClose={this.onClose} imageUrl={this.state.largeImageURL} />
        )}
      </div>
    );
  }
}
