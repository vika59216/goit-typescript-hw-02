//import React from "react";
import css from "./ImageCard.module.css";
import { Photo } from "../../types";
import React, { FC, MouseEventHandler } from "react";



interface ImageCardProps {
  photo: Photo;
  onClick: MouseEventHandler<HTMLImageElement>;
}
const ImageCard: FC<ImageCardProps> = ({photo, onClick }) => {
  const handleClick: MouseEventHandler<HTMLImageElement> = (event) => {
    onClick(event);
  };

  return (
      <div className={css.container}>
          <img src={photo.urls.small} alt={photo.alt_description} onClick={handleClick}/>
      </div>
  )
}

export default ImageCard;