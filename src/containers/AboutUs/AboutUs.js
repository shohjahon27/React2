import React from "react";
import "./AboutUs.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faChevronRight, faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Fade, Slide } from "react-awesome-reveal";

class AboutUs extends React.Component {
  render() {
    return (
      <section id="aboutUsSection" className="container">
        <div className="container  text-center">
          <h1>About Us</h1>
          <p className="mb-5">
            Problems trying to resolve the conflict between<br></br>
            the two major realms of Classical physics: Newtonian mechanics{" "}
          </p>
        </div>
        <div className="row mt-5">
          <div className=" col-sm-12 col-lg-6">
            <img className="img " src="rasm.jpg"></img>
          </div>
          <div className="col-sm-12 col-lg-6">
            <h1 className="h1">Most trusted in our field</h1>
            <p className="p">
              Most calendars are designed for teams. Slate <br></br>
              is designed for freelancers who want a <br></br>
              simple way to plan their schedule.
            </p>
           <div className="d-flex">
           <img className="imgg" src="icon.png"></img>
            <h4>the quick fox jumps over the lazy dog</h4>
           </div>
           <p className="p">Things on a very small scale ...</p>
           <div className="d-flex">
           <img className="imgg" src="icon2.png"></img>
            <h4>the quick fox jumps over the lazy dog</h4>
           </div>
            <p>Things on a very small scale ...</p>
           
          </div>
        </div>
      </section>
    );
  }
}

export default AboutUs;
