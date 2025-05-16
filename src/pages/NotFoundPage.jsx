import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="container">
      <h2>404 - Page Not Found</h2>
      <p>Looks like you're lost. Go back <Link to="/">home</Link>.</p>
    </div>
  );
};

export default NotFoundPage;
