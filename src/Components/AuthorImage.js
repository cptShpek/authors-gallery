import React from 'react';
import { useSelector } from 'react-redux';

function AuthorImage({ authorID }) {
  const author = useSelector((state) => state.authorsList.filter((author) => author.id === authorID)[0]);
  let src;
  if (author.urls.raw) {
    src = author.urls.raw;
  } else {
    src = author.urls.full;
  }
  return (
    <div className="authorImg">
      <img src={src} />
    </div>
  );
}

export default AuthorImage;
