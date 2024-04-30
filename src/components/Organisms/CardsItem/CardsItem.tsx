import { Text } from "../..";
// import { IBaseRoom } from "src/types";
const CardsItem: React.FC<CardsItemProps> = ({ additionals2 }) => {
  return (
    <div className="fourth-section container top-spacing">
      <div className="benefits-cards">
        {additionals2.card.map((item) => (
          <div className="benefit-card">
            <img src={item.imgUrl} alt="/" />
            <Text as="h6" text={item.title} className="benefit-card-title" />
            <Text as="p" text={item.text} className="benefit-card-text" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardsItem;

export interface CardsItemProps {
    // additionals2: IBaseRoom;
    additionals2: {
        card: {
          title: string;
          text: string;
          imgUrl: string;
        }[];
      };
}