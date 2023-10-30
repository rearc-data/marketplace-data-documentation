import React from 'react';
import { Link } from 'react-router-dom';

// Dynamically import all markdown files
const docContext = require.context('./docs', true, /\.md$/);

function DocList() {
  const docNames = docContext.keys().map((path) => path.slice(2));

  return (
    <div>
      <h1>Documents Index</h1>
      <ul>
        {docNames.map((name) => (
          <li key={name}>
            <Link to={`/doc/${name}`}>{name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DocList;
