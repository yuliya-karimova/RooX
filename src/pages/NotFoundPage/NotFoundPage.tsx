import React from 'react';

const NotFoundPage = () => {
  return (
    <div className="pageContainer" data-testid="not-found-page">
      <h1>Oops, we don&apos;t have such a page</h1>
      <h3>
        Welcome to our <a href="/">Home page</a>
      </h3>
    </div>
  );
};

export default NotFoundPage;
