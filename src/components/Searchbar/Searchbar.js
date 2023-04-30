import { Component } from 'react';
import css from './Searchbar.module.css';

export class Searchbar extends Component {
  state = {
    value: '',
  };

  onHandleChange = event => {
    event.preventDefault();
    this.setState({
      value: event.target.value,
    });
  };

  onHandleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.value);
  };
  render() {
    return (
      <header className={css.Searchbar}>
        <form className={css.SearchForm} onSubmit={this.onHandleSubmit}>
          <button
            className={css['SearchForm-button']}
            text="false"
            type="submit"
          >
            Search
          </button>
          <input
            className={css['SearchForm-input']}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.value}
            onChange={this.onHandleChange}
          />
        </form>
      </header>
    );
  }
}
