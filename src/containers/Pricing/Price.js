import React, { Component } from 'react'
import "./Price.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';


class Price extends React.Component {
    constructor(props) {

        super(props);
        this.state = props
    }
        render() {
            return (
              <div className="container text-center mt-5">
                <h1 className="mtt">Pricing</h1>
                <p className="mb-5">
                  Problems trying to resolve the conflict between <br></br> the two major
                  realms of Classical physics: Newtonian mechanics{" "}
                </p>
                <div className="row text-center ">
                  <div className="col-12 col-md-6 col-lg-4">
                    <div className="card  bg-white">
                      <h1>FREE</h1>
                      <p className="text-dark">
                        Organize across all apps by hand
                      </p>

                      <h1 className="text-primary fw-bold">0$</h1>
                      <p className="text-dark">Per Month</p>
                      <button className="btn btn-primary ">Try for free</button>
                      <ul>
                        <li>
                          <img src="check.png" alt="" />
                          <a href=""> Unlimited product updates</a>
                        </li>
                        <li>
                          <img src="check.png" alt="" />
                          <a href=""> Unlimited product updates</a>
                        </li>
                        <li>
                          <img src="check.png" alt="" />
                          <a href=""> Unlimited product updates</a>
                        </li>
                        <li>
                          <img src="chack.png" alt="" />
                          <a href=""> Unlimited product updates</a>
                        </li>
                        <li>
                          <img src="chack.png" alt="" />
                          <a href=""> Unlimited product updates</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-4">
                    <div className="card bg-white">
                      <h1>FREE</h1>
                      <p className="text-dark">
                        Organize across all apps by hand
                      </p>
                      <h1 className="text-primary fw-bold">0$</h1>
                      <p className="text-dark">Per Month</p>
                      <button className="btn btn-primary ">Try for free</button>
                      <ul>
                        <li>
                          <img src="check.png" alt="" />
                          <a href=""> Unlimited product updates</a>
                        </li>
                        <li>
                          <img src="check.png" alt="" />
                          <a href=""> Unlimited product updates</a>
                        </li>
                        <li>
                          <img src="check.png" alt="" />
                          <a href=""> Unlimited product updates</a>
                        </li>
                        <li>
                          <img src="chack.png" alt="" />
                          <a href=""> Unlimited product updates</a>
                        </li>
                        <li>
                          <img src="chack.png" alt="" />
                          <a href=""> Unlimited product updates</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-4">
                    <div className="card bg-white">
                      <h1>FREE</h1>
                      <p className="text-dark">
                        Organize across all apps by hand
                      </p>
                      <h1 className="text-primary fw-bold">0$</h1>
                      <p className="text-dark">Per Month</p>
                      <button className="btn btn-primary ">Try for free</button>
                      <ul>
                        <li>
                          <img src="check.png" alt="" />
                          <a href=""> Unlimited product updates</a>
                        </li>
                        <li>
                          <img src="check.png" alt="" />
                          <a href=""> Unlimited product updates</a>
                        </li>
                        <li>
                          <img src="check.png" alt="" />
                          <a href=""> Unlimited product updates</a>
                        </li>
                        <li>
                          <img src="chack.png" alt="" />
                          <a href=""> Unlimited product updates</a>
                        </li>
                        <li>
                          <img src="chack.png" alt="" />
                          <a href=""> Unlimited product updates</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
        }
    }
    




export default Price