import "./Footer.css";
import Text from "../../Atoms/Text/Text";
import { ITranslation } from "src/types";

const Footer: React.FC<IFooterProps> = ({ translations }) => {
  return (
    <div className="footer-container container top-spacing">
      <div className="left-footer">
        <img
          className="footer-hotel-logo"
          src={translations.hotel_logo}
          alt="/"
        />
        <Text
          as="h2"
          text={translations.hotel_name}
          className="footer-hotel-name"
        />
      </div>
      <div className="right-footer">
        <Text as="a" text="HOME" href="/" className="footer-link" />
        <Text as="a" text="ABOUT US" href="/" className="footer-link" />
        <Text as="a" text="CONTACT" href="/" className="footer-link" />
        <Text as="a" text="SERVICES" href="/" className="footer-link" />
      </div>
      {/* Next line add company rights reserver */}
      <Text
        as="p"
        text={`©${translations.year} ${translations.hotel_name} - All rights reserved`}
        className="footer-rights"
      />
    </div>
  );
};

export default Footer;

interface IFooterProps {
  translations: ITranslation;
}