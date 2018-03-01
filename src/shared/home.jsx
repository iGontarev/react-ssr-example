import React from 'react';
import { Link } from 'react-router-dom';

export function Home() {
  return (
    <div>
      <h1>Home page</h1>
      <Link to="/some">Some page</Link>
    </div>
  );
}
