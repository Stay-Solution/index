import { ITranslation } from "src/types";
import { Carousel, Text } from "../..";

const FifthSection: React.FC<IFifthSectionProps> = ({ translations }) => {
  return (
    <div className="fifth-section container top-spacing">
      <div className="hotel-content">
        <Text
          as="h3"
          text={translations.fifth_section.title}
          className="hotel-content-title"
        />
        <Text
          as="p"
          text={translations.fifth_section.text}
          className="hotel-content-text"
        />
        <Text
          as="a"
          text={"Explore"}
          className="hotel-content-explore"
          href={"/"}
        />
        <Carousel
          className="hotel-content-carousel"
          slides={translations.fifth_section.carousel.map(
            (item) => item.imgUrl
          )}
        />
      </div>
    </div>
  );
};

export default FifthSection;

export interface IFifthSectionProps {
  translations: ITranslation;
}