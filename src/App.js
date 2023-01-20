import './App.css';
import Carousel from './components/Carousel';
import Carousel2 from './components/Carousel2';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';
import Page4 from './components/Page4.js';
import Subbanner from './components/Subbanner';
import Subfooter from './components/Subfooter';
import Map from './components/Map';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Carousel/>
     <Page1/>
     <Page2/>
     <Page3/>
     <Carousel2/>
     <Page4/>
     <Subbanner/>
     <Map/>
     <Subfooter/>
     <Footer/>
    </div>
  );
}

export default App;
