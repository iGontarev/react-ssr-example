import React from 'react';
import { Link } from 'react-router-dom';

export function Some() {
  return (
    <div>
      <h1>Some page</h1>
      <Link to="/">Home page</Link>
    </div>
  );
}
