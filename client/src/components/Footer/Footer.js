import React from 'react';
import { IoLogoGithub } from 'react-icons/io';

import './Footer.scss';

const Footer = () => (
  <div className="footer container-fluid">
    <div className="row no-gutters">
      <div className="col-10 text-left my-auto">
        {'This project was developed for CMST 488 at UMUC'}
      </div>
      <div className="col text-right my-auto">
        <a href="https://github.com/CrutchTheClutch/tasks2do">
          <IoLogoGithub className="icon" />
        </a>
      </div>
    </div>
  </div>
);

export default Footer;
