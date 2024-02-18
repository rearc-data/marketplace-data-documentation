import React from 'react';
import DocItem from './DocItem';

const docContext = require.context('./docs', true, /\.md$/);

const docs = docContext.keys().map(fileName => {
  return {
    name: fileName.substr(2).replace(/\.md$/, ''),
    content: docContext(fileName)
  };
});

function DocList() {
  return (
    <div>
      <h2>Available Datasets</h2>
      {docs.map(doc => (
        <DocItem key={doc.name} docName={doc.name} docContent={doc.content} />
      ))}
    </div>
  );
}

export default DocList;
