import React from 'react';
import {
  FirstSection,
  SecondSection,
  ThirdSection,
  FourthSection,
  FifthSection,
  SixthSection,
} from '../../components/Organisms/sections';
import { Contato } from '@components/index';
import { Footer } from '@components/index';
import locales from '../../i18n/locales';
import './Home.css';

const Home = () => {

  const ptBrTranslations = locales['pt-BR'];
  const { translations } = ptBrTranslations
  return (
    <>
      <div className="main-container">
        <FirstSection translations={translations}/>
        <SecondSection  translations={translations}/>
        <ThirdSection  translations={translations}/>
        <FourthSection  translations={translations}/>
        <FifthSection  translations={translations}/>
        <SixthSection  translations={translations}/>
        <Contato  translations={translations}/>
        <Footer  translations={translations}/>
      </div>
    </>
  );
};

export default Home;
