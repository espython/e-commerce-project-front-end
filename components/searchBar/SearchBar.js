import React, { Component } from 'react';
import { FaSearch } from 'react-icons/fa';

import { StylesWrapper } from './styles';

export default class SearchBar extends Component {
  state = {
    inputIsFocused: false
  };
  render() {
    const { inputIsFocused } = this.state;
    return (
      <StylesWrapper>
        <input
          placeholder="search ..."
          onFocus={() => this.setState({ inputIsFocused: true })}
          onBlur={() => this.setState({ inputIsFocused: false })}
        />
        <button
          type="submit"
          className={inputIsFocused ? `btn-search btn-focus` : `btn-search`}
        >
          <FaSearch />
        </button>
      </StylesWrapper>
    );
  }
}
