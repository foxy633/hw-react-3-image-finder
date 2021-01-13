import React from "react";
import PropTypes, { string } from "prop-types";
import styles from "./imageGalleryItem.module.css";

const imageGalleryItem = ({ url, alt, openModal, modalImage }) => (
  <div>
    <li
      onClick={() => openModal(modalImage)}
      className={styles.imageGalleryItem}
    >
      <img src={url} alt={alt} className={styles.imageGalleryItem_img} />
    </li>
  </div>
);

imageGalleryItem.propTypes = {
  url: PropTypes.string.isRequired,
  alt: string.isRequired,
  openModal: PropTypes.func.isRequired,
  modalImage: PropTypes.string.isRequired,
};

export default imageGalleryItem;
