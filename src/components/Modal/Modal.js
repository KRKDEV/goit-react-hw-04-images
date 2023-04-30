import { Component } from 'react';
import css from './Modal.module.css';
import propTypes from 'prop-types';

export class Modal extends Component {
  render() {
    const { imageUrl } = this.props;
    return (
      <div className={css.Overlay} onClick={this.props.onClose}>
        <div className={css.Modal}>
          <img src={imageUrl} alt={imageUrl} />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  imageUrl: propTypes.string,
};
