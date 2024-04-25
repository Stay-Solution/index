import { Map, Text } from '../..';

const SixthSection = ({translations}) => {
  return (
    <div className="sixth-section container top-spacing">
      <div className="location">
        <Text as="h2" text={`Location`} className="location-title" />
        <Text
          as="h2"
          text={translations.sixth_section.hotel_name}
          className="location-name"
        />
        <Text
          as="p"
          text={translations.sixth_section.address}
          className="location-data"
        />
        <Text
          as="p"
          text={`${translations.sixth_section.city}, ${translations.sixth_section.state}`}
          className="location-data"
        />
        <Text
          as="p"
          text={`Phone: ${translations.sixth_section.phone}`}
          className="location-data"
        />
        <Text
          as="p"
          text={`E-mail: ${translations.sixth_section.email}`}
          className="location-data"
        />
        <Map lat={translations.sixth_section.lat} lng={translations.sixth_section.lng} />
      </div>
    </div>
  );
};

export default SixthSection;
