//app.js

import './App.css';
import PdfFire from './PdfTest';


function App() {
  return (
    <div className="App">
      <PdfFire RouteName='sunshine' PdfPath='sunshine'/>
      <PdfFire RouteName='AAZHI PAPER CUPS' PdfPath='AAZHI PAPER CUPS'/>

    </div>
  );
}

export default App;
