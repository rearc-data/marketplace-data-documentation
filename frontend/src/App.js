import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DatasetList from './DatasetList';
import DocViewer from './DocViewer';
import Header from './Header';

function App() {
  return (
    <div className="app">
      <Header/>
      <div className="appBody">
      <Router>
        <Routes>
          <Route path="/doc/:docName" element={<DocViewer />} />
          <Route path="/" element={<DatasetList />} />
        </Routes>
      </Router>
      </div>
    </div>

  );
}

export default App;
