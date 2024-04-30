import React, { useEffect } from "react";
import {
  ThirdSection,
  FourthSection,
  FifthSection,
  SixthSection,
} from "@components/Organisms/sections";
import { Carousel, Contato, Text, CardsItem } from "@components/index";
import { Footer } from "@components/index";
import { getIdFromQueryString } from "@utils/getIdFromQueryString";

import locales from "../../i18n/locales";
import { IBaseRoom } from "src/types";
import { redirect } from "react-router-dom";
import "./Quartos.css";

const Quartos = () => {
  const [roomData, setRoomData] = React.useState<IBaseRoom>();
  const ptBrTranslations = locales["pt-BR"];
  const { translations } = ptBrTranslations;

  useEffect(() => {
    const id = getIdFromQueryString();

    if (!id) {
      redirect("/index");
      return;
    }

    const room = getRoomData(translations.base_rooms, id);
    setRoomData(room);
  }, [translations.base_rooms]);

  const getRoomData = (
    baseRooms: IBaseRoom[],
    urlId: string
  ): IBaseRoom | undefined => {
    const roomData = baseRooms.find((room) => room.id === urlId);
    return roomData;
  };

  // const carouselSlides = roomData ? roomData?.data_page.images.map((img) => img) : [];
  const carouselTemporary = [
    "./src/assets/room-img-2.png",
    "./src/assets/room-img-3.png",
    "./src/assets/room-img-2.png",
    "./src/assets/room-img-3.png",
  ];

  if (roomData === undefined) return <div>Loading...</div>;

  return (
    <>
      <div className="main-container">
        {/* <Header className="room-page-header container" /> */}
        <Text as="h2" text={roomData.data_page.name} className="room-name" />
        <Carousel slides={carouselTemporary} />
        <div className="room-presentation container">
          {roomData.data_page.descriptions.map((desc) => (
            <Text as="p" text={desc} className="room-desc" />
          ))}
        </div>

        <div className="container room-details">
          <div className="room-details-item">
            <Text as="h2" text="Informações gerais" className="room-details-title" />
            {/* {roomData.data_page.additionals.map((add) => (
              <Text as="p" text={add} className="room-additional" />
            ))} */}
            <CardsItem additionals2={roomData.data_page.additionals2} />
          </div>
        </div>
        <ThirdSection translations={translations} />
        <FourthSection translations={translations} />
        <FifthSection translations={translations} />
        <SixthSection translations={translations} />
        <Contato translations={translations} />
        <Footer translations={translations} />
      </div>
    </>
  );
};

export default Quartos;
