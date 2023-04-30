import { Component } from 'react';
import css from './ImageGalleryItem.module.css';
import propTypes from 'prop-types';

export class ImageGalleryItem extends Component {
  render() {
    const { webformatURL, largeImageURL, onShow, tags } = this.props;
    return (
      <li className={css.ImageGalleryItem}>
        <img
          className={css['ImageGalleryItem-image']}
          src={webformatURL}
          alt={tags}
          onClick={() => onShow(largeImageURL)}
        />
      </li>
    );
  }
}

ImageGalleryItem.propTypes = {
  webformatURL: propTypes.string,
  largeImageURL: propTypes.string,
  onShow: propTypes.func,
};
