import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import DatasetTable from './DatasetTable';
import gfm from 'remark-gfm';
import './Dataset.css';

const Dataset = ({ name, contentPath, tables }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [markdownContent, setMarkdownContent] = useState(null);
  useEffect(() => {
    if (isExpanded) {
      fetch(contentPath)
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
    }
  }, [isExpanded, contentPath]);

  return (
    <div className="dataset">
      <div className="datasetContainer">
        <div className="datasetTitle" onClick={() => setIsExpanded(prev => !prev)}>
          {name}
          <span>
            {isExpanded ? '-' : '+'}
          </span>
        </div>
        {isExpanded && markdownContent && (
          <div className="datasetContent">
            <ReactMarkdown remarkPlugins={[gfm]} children={markdownContent} />
          </div>
        )}
      </div>
      {isExpanded && tables && (
        <div className="datasetTables">
          <DatasetTable datasetName={name} tables={tables}/>
        </div>
      )}
    </div>
  );
}

export default Dataset;
