import React from 'react'
import './App.css';
import Header from '../Header/Header';
import MainSection from '../MainSection';
import About from '../About';
import Clients from '../Clients';
import AboutUs from '../AboutUs'
import Price from '../Pricing/Price'
import Touch from "../Touch/Touch";
import Footer from "../Footer/Footer";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = props
  }
  render() {
    return (
      <div className="App">
        <Header />
        <MainSection />
        <About />
        <Clients />
        <AboutUs />
        <Price />
        <Touch />
        <Footer />
      </div>
    );
  }
}

export default App;
