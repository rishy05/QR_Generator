//app.js
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import PdfFire from './PdfTest';
import Navbar from "./aazhi/components/Navbar";
import Header from "./aazhi/components/Header";
import Main from "./aazhi/components/Main";
import Footer from "./aazhi/components/Footer";


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path = '/sunshine'>
            
          <PdfFire PdfPath='sunshine'/>
          </Route>
      
      </Switch>
      </Router>
      <Router>
        <Switch>
      <Route exact path = '/aazhi-paper-cups'>
      <PdfFire PdfPath='aazhi'/>
      </Route>
      <Route exact path = '/aazhi-paper-cups/home'>
      <Navbar />
      <Header />
      <Main />
      <Footer />
      </Route>
      </Switch>
      </Router>

    </div>
  );
}

export default App;
