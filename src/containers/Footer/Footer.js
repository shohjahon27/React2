import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Footer.css";

import {} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { faFacebook, faInstagram, faTwitter, faTwitterSquare } from "@fortawesome/free-brands-svg-icons";
const data = [
  {
    list1: "",
  },
];
class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = props;
  }
  render() {
    return (
      <div className="container mt-5">
        <div className=" d-flex ratata justify-content-between  ">
          <div className="text-white fw-bold fs-2 text-end ">BrandName</div>
          <div className="">
            <FontAwesomeIcon
              className="users me-3 fs-2 text-start"
              icon={faFacebook}
            />
            <FontAwesomeIcon className="users me-3 fs-2 " icon={faInstagram} />
            <FontAwesomeIcon className="users me-3 fs-2" icon={faTwitter} />
          </div>
        </div>
        <hr className="text-white" />
        <div className="row">
          <div className="footer ">
            <div className="inside-footer ">
              <h1 className="text-white fs-5 text-start">Company Info</h1>
              <h1 className="text-white fs-6 fw-normal text-start">About Us</h1>
              <h1 className="text-white fs-6 fw-normal text-start">
                We are hiring
              </h1>
              <h1 className="text-white fs-6 fw-normal text-start">Blog</h1>
            </div>
          </div>
          <div className="footer ">
            <div className="inside-footer ">
              <h1 className="text-white fs-5 text-start">Company Info</h1>
              <h1 className="text-white fs-6 fw-normal text-start">About Us</h1>
              <h1 className="text-white fs-6 fw-normal text-start">
                We are hiring
              </h1>
              <h1 className="text-white fs-6 fw-normal text-start">Blog</h1>
            </div>
          </div>
          <div className="footer ">
            <div className="inside-footer ">
              <h1 className="text-white fs-5 text-start">Company Info</h1>
              <h1 className="text-white fs-6 fw-normal text-start">About Us</h1>
              <h1 className="text-white fs-6 fw-normal text-start">
                We are hiring
              </h1>
              <h1 className="text-white fs-6 fw-normal text-start">Blog</h1>
            </div>
          </div>
          <div className="footer ">
            <div className="inside-footer ">
              <h1 className="text-white fs-5 text-start">Company Info</h1>
              <h1 className="text-white fs-6 fw-normal text-start">About Us</h1>
              <h1 className="text-white fs-6 fw-normal text-start">
                We are hiring
              </h1>
              <h1 className="text-white fs-6 fw-normal text-start">Blog</h1>
            </div>
          </div>
          <div className="footer ">
            <div className="inside-footer ">
              <h1 className="text-white fs-5 text-start">Get in Touch</h1>
              <h1 className="text-white fs-6 fw-normal text-start">Touch</h1>
              <div className="d-flex">
                <input type="text" />
                <input
                  type="button"
                  className="btnn btn-primary"
                  value="Search"
                />
              </div>
              <h1 className="text-white fs-6 fw-normal text-start">
                Lorem impsum dolor amit
              </h1>
            </div>
          </div>
        </div>
        <h6>Made With Love By Figmaland All Right Reserved </h6>
      </div>
    );
  }
}
export default Footer;
