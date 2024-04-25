import { Button, Text } from '../..';

const ThirdSection = ({translations}) => {
  return (
    <div className="third-section container top-spacing">
      <div className="learn-more">
        <Text
          as="h2"
          text={translations.third_section.learn_more.title}
          className="learn-more-title"
        />
        <Text
          as="p"
          text={translations.third_section.learn_more.text}
          className="learn-more-text"
        />
        <Button
          onClick={() => ''}
          text={translations.third_section.learn_more.btn_text}
          className="learn-more-btn"
        />
      </div>
    </div>
  );
};

export default ThirdSection;
