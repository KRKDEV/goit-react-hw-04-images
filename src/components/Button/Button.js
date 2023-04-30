import { Component } from 'react';
import css from './Button.module.css';
import propTypes from 'prop-types';

export class Button extends Component {
  render() {
    const { onClick, name, type } = this.props;
    return (
      <>
        <button className={css.Button} type={type} onClick={onClick}>
          {name}
        </button>
      </>
    );
  }
}

Button.propTypes = {
  callback: propTypes.func,
  text: propTypes.string,
  type: propTypes.string,
};
