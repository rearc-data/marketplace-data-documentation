import React from 'react';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import { useParams } from 'react-router-dom';

const docContext = require.context('../docs', true, /\.md$/);

function DocViewer() {
  const { docName } = useParams();
  const markdownContent = docContext(`./${docName}`).default;

  return (
    <div>
      <ReactMarkdown remarkPlugins={[gfm]} children={markdownContent} />
    </div>
  );
}

export default DocViewer;
