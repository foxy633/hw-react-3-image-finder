import React, { Component } from "react";
import Searchbar from "./components/Searchbar";
import ImageGallery from "./components/ImageGallery";
import * as API from "./services/gallery-api";
import Button from "./components/Button";
import Modal from "./components/Modal";
import Loader from "./components/Loader";

class App extends Component {
  state = {
    query: "",
    images: [],
    page: 1,
    isModalOpen: false,
    isLoading: false,
  };

  // componentDidMount() {
  // const { query, page } = this.state;
  // this.onSubmit(query, page);
  // }

  componentDidUpdate(prevProps, prevState) {
    const { page } = this.state;
    if (prevState.page !== page) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    }
  }

  openModal = (modalImage) => {
    this.setState({ isModalOpen: true, modalImage });
    window.addEventListener("keydown", this.closeModal);
  };

  closeModal = (e) => {
    if (e.target.localName !== "img") {
      this.setState({ isModalOpen: false, activeImgUrl: "" });
    }
  };

  onSubmit = (query) => {
    this.setState({ query, isLoading: true });
    API.getImage(query)
      .then((resData) => {
        this.setState({ images: resData.data.hits });
      })
      .finally(() => this.setState({ isLoading: false }));
  };

  changePage = () => {
    const { query, page } = this.state;
    this.setState({ isLoading: true });

    API.getImage(query, page + 1)
      .then((resData) => {
        this.setState((prevState) => ({
          page: prevState.page + 1,
          images: [...prevState.images, ...resData.data.hits],
        }));
      })
      .finally(() => this.setState({ isLoading: false }));
  };

  render() {
    const { images, isLoading, isModalOpen, modalImage } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.onSubmit} />
        {isLoading && <Loader />}
        <ImageGallery images={images} openModal={this.openModal} />
        {images.length > 0 && <Button changePage={this.changePage} />}
        {isModalOpen && (
          <Modal modalImage={modalImage} closeModal={this.closeModal} />
        )}
      </>
    );
  }
}

export default App;
