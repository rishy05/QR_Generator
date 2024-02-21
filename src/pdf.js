//pdf.js
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import * as React from 'react';
import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';


const PdfView = ({routeName, pdfName}) => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  return (
    
    
    <Router>
        <Switch>
            <Route exact path={`/${routeName}`}>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.16.105/build/pdf.worker.js">
          <div
              style={{
                  height: '1700px',
                  width: '900px',
                  marginLeft: 'auto',
                  marginRight: 'auto',
              }}
          >
              <Viewer
                  fileUrl={`${pdfName}`}
                  plugins={[defaultLayoutPluginInstance]}
              />
          </div>
          
      </Worker>
      </Route>
      </Switch>
      </Router>

  );
};

export default PdfView;