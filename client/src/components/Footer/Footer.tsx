import * as React from 'react';
import { IoLogoGithub } from 'react-icons/io';
import './Footer.scss';

const Footer = (): JSX.Element => (
  <div className="footer container-fluid align-items-center">
    <div className="row no-gutters">
      <div className="col-10 text-left my-auto">
        {
          'This project is under active development.  Do not enter any personal information.'
        }
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
