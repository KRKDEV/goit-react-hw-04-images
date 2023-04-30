import { Component } from 'react';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';
import propTypes from 'prop-types';

export class ImageGallery extends Component {
  render() {
    const { images, onShow } = this.props;
    return (
      <ul className={css.ImageGallery}>
        {images.map(({ webformatURL, largeImageURL, id }) => (
          <ImageGalleryItem
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
            onShow={onShow}
            key={id}
          />
        ))}
      </ul>
    );
  }
}

ImageGallery.propTypes = {
  images: propTypes.array,
  onShow: propTypes.func,
};
