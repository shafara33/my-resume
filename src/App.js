import Navbar from './components/Navbar';
import './App.css';
import CV from './components/CV';
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='size bg-black'>
        <div className=''>
          <Navbar />
        </div>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>

          <Route exact path='/see-cv'>
            <CV />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
