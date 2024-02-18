import React, {useState, useEffect} from 'react';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import { useParams } from 'react-router-dom';

const docContext = require.context('./docs', true, /\.md$/);

const DocViewer = () => {
    const { docName } = useParams();
    const [markdownContent, setMarkdownContent] = useState("");
  
    useEffect(() => {
      const markdownFilePath = docContext(`./${docName}`);
      
      fetch(markdownFilePath)
        .then(response => response.text())
        .then(text => {
          setMarkdownContent(text);
        })
        .catch(err => {
          console.error("Error fetching markdown content:", err);
        });
    }, [docName]);
  
    return (
      <div>
        <ReactMarkdown remarkPlugins={[gfm]} children={markdownContent} />
      </div>
    );
  }

export default DocViewer;
