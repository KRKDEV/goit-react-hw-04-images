import { useState } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';

const API_KEY = '33395235-316870acdb7f794f3e9104cab';
const BASE_URL = 'https://pixabay.com/api/';

export const App = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [isLoading, setLoading] = useState(false);
  const [largeImageURL, setLargeImageURL] = useState('');
  const [showModal, setModal] = useState(false);
  // state = {
  //   images: [],
  //   query: '',
  //   page: 1,
  //   isLoading: false,
  //   largeImageURL: '',
  //   showModal: false,
  // };

  const onShow = url => {
    setModal(true);
    setLargeImageURL(url);
  };

  const onClose = () => {
    setModal(false);
    setLargeImageURL('');
  };

  const onSubmit = async query => {
    let isFetch = false;
    if (query !== '') {
      setImages([]);
      setPage(1);
    } else {
      isFetch = true;
    }
    setQuery(query);
    setLoading(true);

    const response = await fetch(
      `${BASE_URL}?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    )
      .then(response => response.json())
      .catch(error => console.log('There was an error', error));

    if (response && response.hits.length > 0) {
      isFetch
        ? setImages([...images, ...response.hits])
        : setImages([...response.hits]);
      setPage(page + 1);
      setLoading(false);
    } else {
      console.log('There was an error');
      setImages([]);
    }
  };

  const loadMore = async event => {
    event.preventDefault();
    onSubmit(query);
  };

  return (
    <div className="App">
      <Searchbar onSubmit={onSubmit} />
      {isLoading && <Loader />}
      <ImageGallery images={images} onShow={onShow} />

      {images.length > 0 && <Button onClick={loadMore} name={'Load more'} />}
      {showModal && <Modal onClose={onClose} imageUrl={largeImageURL} />}
    </div>
  );
};
