import { ITranslation } from "src/types";
import { Header, Text, Button, CheckIn } from "../..";

const FirstSection: React.FC<IFirstSectionProps> = ({ translations }) => {
  return (
    <div className="first-section">
      <div className="container">
        <Header />
        <div className="hotel-info">
          <img
            className="hotel-info-logo"
            src={translations.first_section.display_image}
            alt="/"
          />
          <Text
            as="h2"
            text={translations.first_section.name}
            className="hotel-info-name"
          />
          <Text
            as="h4"
            text={translations.first_section.description}
            className="hotel-info-subtitle"
          />
          <Button
            onClick={() => ""}
            text="About Us"
            className="hotel-info-about-us"
          />
          <CheckIn />
        </div>
      </div>
    </div>
  );
};

export default FirstSection;

export interface IFirstSectionProps {
  translations: ITranslation;
}