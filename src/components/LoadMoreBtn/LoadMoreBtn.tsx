import React, { FC, MouseEventHandler } from 'react';
import css from "./LoadMoreBtn.module.css"

interface LoadMoreBtnProps {
  loadMorePhotos: MouseEventHandler<HTMLButtonElement>;
}

const LoadMoreBtn: FC<LoadMoreBtnProps> = ({ loadMorePhotos }) => {
  return (
    <button type="button" className={css.loadMoreBtn} onClick={loadMorePhotos}> Load more</button>
  );
};

export default LoadMoreBtn;