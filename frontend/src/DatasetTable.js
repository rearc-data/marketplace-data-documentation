import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import './DatasetTable.css';

const DatasetTable = ({ datasetName, tables }) => {
  const [expandedTables, setExpandedTables] = useState({});

  const toggleTable = (tableName) => {
    setExpandedTables(prevExpandedTables => ({
      ...prevExpandedTables,
      [tableName]: !prevExpandedTables[tableName]
    }));
  };

  const fetchTableContent = (tableName, tablePath) => {
    if (!expandedTables[tableName]) {
      // Only fetch if the table is not already expanded
      fetch(tablePath)
        .then(response => {
          if (response.ok) {
            return response.text();
          } else {
            throw new Error(`Failed to fetch markdown content for table ${tableName}`);
          }
        })
        .then(content => {
          setExpandedTables(prevExpandedTables => ({
            ...prevExpandedTables,
            [tableName]: content
          }));
        })
        .catch(error => {
          console.error("Error fetching markdown for table:", tableName, error);
        });
    }
  };

  return (
    <div>
      {Object.keys(tables).map(tableName => (
        <div key={tableName} className="tableContainer">
          <div className="tableTitle" onClick={() => {
            toggleTable(tableName);
            fetchTableContent(tableName, tables[tableName]);
          }}>
            {datasetName} - {tableName}
            <span>{expandedTables[tableName] ? '-' : '+'}</span>
          </div>
          {expandedTables[tableName] && typeof expandedTables[tableName] === 'string' && (
            <div className="tableContent">
              <ReactMarkdown remarkPlugins={[gfm]} children={expandedTables[tableName]} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default DatasetTable;
