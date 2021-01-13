import React, { Component } from "react";
import PropTypes from "prop-types";
import style from "./searchbar.module.css";

class Searchbar extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };
  state = {
    search: "",
  };

  onChange = (event) => {
    const { value } = event.target;
    this.setState({ search: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { search } = this.state;
    const { onSubmit } = this.props;
    onSubmit(search);
    this.setState({ search: "" });
  };

  render() {
    const { search } = this.state;
    return (
      <div>
        <header className={style.Searchbar}>
          <form onSubmit={this.handleSubmit} className={style.SearchForm}>
            <button type="submit" className={style.SearchForm_button}>
              <span className={style.SearchForm_button_label}>Search</span>
            </button>

            <input
              className={style.SearchForm_input}
              onChange={this.onChange}
              type="text"
              value={search}
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
            />
          </form>
        </header>
      </div>
    );
  }
}

export default Searchbar;
