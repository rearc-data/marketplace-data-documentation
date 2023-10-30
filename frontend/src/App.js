import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DocList from './DocList';
import DocViewer from './DocViewer';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/doc/:docName" element={<DocViewer />} />
        <Route path="/" element={<DocList />} />
      </Routes>
    </Router>
  );
}

export default App;
