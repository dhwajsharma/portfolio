import React from "react";
import { Link } from "react-router-dom";
import "./FooterLink.css";

const FooterLink = ({ phrase, link, toAddress }) => {
  return (
    <div className="footerLink">
      {phrase}
      <Link to={toAddress} className="footerLink__element">
        {link}
      </Link>
    </div>
  );
};

export default FooterLink;
