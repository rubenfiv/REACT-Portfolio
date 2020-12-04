import { HashRouter,  Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Home from './pages/home';
import Portfolio from "./pages/portfolio";
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"


function App() {
  return (
    <HashRouter>
      <div>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/portfolio" component= { Portfolio } />
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
