//app.js

import './App.css';
import PdfFire from './PdfTest';


function App() {
  return (
    <div className="App">
      <PdfFire RouteName='sunshine' PdfPath='sunshine'/>
      <PdfFire RouteName='ocean-impex' PdfPath='ocean-impex'/>

    </div>
  );
}

export default App;
