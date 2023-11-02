import React from 'react';
import Dataset from './Dataset';

const docContext = require.context('./docs', true, /\.md$/);

function getDatasets(files) {
  const datasets = {};

  files.forEach(file => {
    const parts = file.substr(2).split('/');
    const fileName = parts.pop();
    
    const datasetName = parts[0];
    if (!datasets[datasetName] && datasetName) {
      datasets[datasetName] = {
        contentPath: null,
        tables: {}
      };
    }

    if (parts.length === 1 && fileName === 'index.md') {
      datasets[datasetName].contentPath = docContext(file);
    } else if (parts.length === 2 && parts[1] === 'tables') {

      datasets[datasetName].tables[fileName] = docContext(file);
    }
  });

  return datasets;
}

const datasets = getDatasets(docContext.keys());
console.log(datasets);

function DatasetList() {
  return (
    <div>
      <h2>Available Datasets</h2>
      {Object.keys(datasets).map(datasetName => {
        const dataset = datasets[datasetName];
        return (
          <div>
            <Dataset
              key={datasetName}
              name={datasetName}
              contentPath={dataset.contentPath}
              tables={dataset.tables}
            />
          </div>
        );
      })}
    </div>
  );
}

export default DatasetList;
