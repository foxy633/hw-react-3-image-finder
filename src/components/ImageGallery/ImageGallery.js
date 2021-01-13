import React from "react";
import PropTypes from "prop-types";
import ImageGalleryItem from "../ImageGalleryItem";
import styles from "./imageGallery.module.css";

const ImageGallery = ({ images, openModal }) => (
  <ul className={styles.ImageGallery}>
    {images.map((elem) => (
      <ImageGalleryItem
        key={elem.id}
        url={elem.webformatURL}
        alt={elem.tags}
        modalImage={elem.largeImageURL}
        openModal={openModal}
      />
    ))}
  </ul>
);

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  openModal: PropTypes.func.isRequired,
};

export default ImageGallery;
