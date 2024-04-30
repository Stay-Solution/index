import { ITranslation } from "src/types";
import { Card } from "../..";
import { useRoomsContext } from "@contexts/RoomsContext";

const SecondSection: React.FC<ISecondSectionProps> = ({ translations }) => {
  const { roomFilters} = useRoomsContext();

  const filteredRooms = translations.second_section.cards.filter((room) => {
    return room.people === roomFilters.people && room.rooms === roomFilters.rooms;
  
  })

  return (
    <div className="second-section container">
      <div className="cards">
        {filteredRooms.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            text={card.text}
            imgUrl={card.imgUrl}
            link={card.redirect}
          />
        ))}
        {filteredRooms.length === 0 && <p>Nenhum quarto disponível</p>}
      </div>
    </div>
  );
};

export default SecondSection;

export interface ISecondSectionProps {
  translations: ITranslation;
}