import { Card } from '../..';

const SecondSection = ({translations}) => {
  return (
    <div className="second-section container">
      <div className="cards">
        {translations.second_section.cards.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            text={card.text}
            imgUrl={card.imgUrl}
            link=""
          />
        ))}
      </div>
    </div>
  );
};

export default SecondSection;
