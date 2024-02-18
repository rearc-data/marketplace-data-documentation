import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import './DocItem.css';

const DocItem = ({ docName, docContent, path }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [markdownContent, setMarkdownContent] = useState(null);

  useEffect(() => {
    // Only fetch the markdown content when the doc item is expanded
    if (isExpanded) {
      fetch(docContent)
        .then(response => {
          if (response.ok) {
            return response.text();
          } else {
            throw new Error("Failed to fetch markdown content");
          }
        })
        .then(content => {
          setMarkdownContent(content);
        })
        .catch(error => {
          console.error("Error fetching markdown:", error);
        });
    } else {
      setMarkdownContent(null);  // Clear content when collapsed
    }
  }, [docName, isExpanded]);

  const toggleExpand = () => {
    setIsExpanded(prevState => !prevState);
  };

  return (
    <div className="docItem">
      <div className="docItemTitle" onClick={toggleExpand}>
        {docName}
        <span>
          {isExpanded ? '-' : '+'}
        </span>
      </div>
      {isExpanded && markdownContent && (
        <div className="docItemContent">
          <ReactMarkdown remarkPlugins={[gfm]} children={markdownContent} />
          {path && Object.keys(path).map(subName => (
            path[subName].file 
            ? <DocItem key={subName} name={subName} path={path[subName]} />
            : null
          ))}
        </div>
      )}
    </div>
  );
}

export default DocItem;
