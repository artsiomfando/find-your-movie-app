import React from 'react';

import './_notFound.scss';

const NotFound = () => {
  const notFoundMessage = 'Oops! Something went wrong... This page is not found';

  return (
    <div className="notFound">
      <p>{notFoundMessage}</p>
    </div>
  );
};

export default NotFound;
