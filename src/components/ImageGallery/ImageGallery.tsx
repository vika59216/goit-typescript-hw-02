
import { Photo } from "../../types";

import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";
import React, { FC, MouseEventHandler } from "react";

interface ImageGalleryProps {
  photos: Photo[];
  handleImageClick: (photo: Photo) => void;
}

const ImageGallery: FC<ImageGalleryProps>  = ({ photos, handleImageClick,  }) => {
  return (
    <ul  className={css.image}>
      {//Array.isArray(photos) &&
      photos.map((photo, index) => {
        //const isLastImage = index === photos.length - 1;
        return (
          <li className={css.image2} key={photo.id} /*ref={isLastImage ? lastImageRef : null}*/>
            <ImageCard photo={photo} onClick={() => handleImageClick(photo)}/>
          </li>
        );
      })}
    </ul>
  );
};

export default ImageGallery;
