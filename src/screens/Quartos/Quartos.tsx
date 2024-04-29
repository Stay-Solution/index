import { useEffect } from "react";
import {
  FirstSection,
  SecondSection,
  ThirdSection,
  FourthSection,
  FifthSection,
  SixthSection,
} from "@components/Organisms/sections";
import { Contato } from "@components/index";
import { Footer } from "@components/index";
import { getIdFromQueryString } from "@utils/getIdFromQueryString";

// import "./Quartos.css";
import locales from "../../i18n/locales";

const Quartos = () => {
  const ptBrTranslations = locales["pt-BR"];
  const { translations } = ptBrTranslations;

  useEffect(() => {
    const id = getIdFromQueryString();
    console.log("ID from query string:", id);
    // Faça o que quiser com o ID aqui
  }, []);

  return (
    <>
      <div className="main-container">
        <FirstSection translations={translations} />
        <SecondSection translations={translations} />
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