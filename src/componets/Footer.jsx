import footerapi from "../api/footerapi.json";

import { MdPlace } from "react-icons/md";
import { TbMailPlus } from "react-icons/tb";
import { IoCallSharp } from "react-icons/io5";

const Footer = () => {
  const footerIcon = {
    MdPlace: <MdPlace />,
    TbMailPlus: <TbMailPlus />,
    IoCallSharp: <IoCallSharp />,
  };

  return (
    <footer className="footer-section">
      <div className="container">
        {footerapi.map((currData, index) => {
          const { rectIcon, title, details } = currData;
          return (
            <div className="footer-contact" key={index}>
              <div className="icon">{footerIcon[rectIcon]}</div>
              <div className="footer-contect-text">
                <p>{title}</p>
                <p>{details}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} YourCompany. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
