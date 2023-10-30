import React from 'react';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import { useParams } from 'react-router-dom';

const docContext = require.context('./docs', true, /\.md$/);

function DocViewer() {
  const { docName } = useParams();
  const markdownContent = docContext(`./${docName}`).default;
  console.log(docContext.keys());
    console.log(markdownContent);
    let markdownContent2;
    try {
      markdownContent2 = require(`./docs/${docName}`).default;
      console.log(markdownContent2)
    } catch (err) {
      console.error("Error importing the markdown file:", err);
    }
    
  return (
    <div>
        <h3>Document Name: {docName}</h3>
      <ReactMarkdown remarkPlugins={[gfm]} children={markdownContent} />
    </div>
  );
}

export default DocViewer;
