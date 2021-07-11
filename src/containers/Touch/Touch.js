import React, { Component } from "react";
import "./Touch.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalculator } from "@fortawesome/free-solid-svg-icons";


class Touch extends React.Component {
  constructor(props) {
    super(props);
    this.state = props;
  }
  render() {
    return (
      <div className="container text-center mb-5 mt-5">
        <h1 className="h1">Get In Touch</h1>
        <p className="mb-5">
          Problems trying to resolve the conflict between <br></br> the two
          major realms of Classical physics: Newtonian mechanics
        </p>
        <div className="row text-center ">
          <div className="col-12 touch m-0 col-md-6 col-lg-4">
            <div className="card  bg-white">
              <img src="vector.png" className="png" alt="" />
              <p className="text-dark">
                georgia.young@example.com georgia.young@ple.com
              </p>
              <h6 className="text-dark GetSupport mb-4">Get Support</h6>
              <button className="btn btn-outline-primary ">Try for free</button>
            </div>
          </div>
          <div className="col-12 touch col-md-6 col-lg-4">
            <div className="card pb-5 bg-primary">
              <img src="location.svg" className="pngg " alt="" />
              <p className="text-light">
                georgia.young@example.com georgia.young@ple.com
              </p>
              <h6 className="text-light GetSupport  mb-5">Get Support</h6>
              <button className="btn btn-outline-light ">Try for free</button>
            </div>
          </div>
          <div className="touch col-12 col-md-6 col-lg-4">
            <div className="card  bg-white">
              <img src="mail.png" className="png" alt="" />
              <p className="text-dark">
                georgia.young@example.com georgia.young@ple.com
              </p>
              <h6 className="text-dark GetSupport mb-5">Get Support</h6>
              <button className="btn btn-outline-primary ">Try for free</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Touch;
