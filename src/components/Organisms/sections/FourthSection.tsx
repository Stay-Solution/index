import { ITranslation } from "src/types";
import { Text } from "../..";

const FourthSection: React.FC<IFourthSectionProps> = ({ translations }) => {
  return (
    <div className="fourth-section container top-spacing">
      <div className="benefits-cards">
        {translations.fourth_section.choose_us.map((card) => (
          <div className="benefit-card">
            <img src={card.imgUrl} alt="/" />
            <Text as="h6" text={card.title} className="benefit-card-title" />
            <Text as="p" text={card.text} className="benefit-card-text" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FourthSection;

export interface IFourthSectionProps {
  translations: ITranslation;
}