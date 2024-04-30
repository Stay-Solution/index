import { ITranslation } from "src/types";

// Configuração JSON com as variáveis incluídas
const hotel_name = "Dewanagara Resort";
const hotel_logo = "./assets/hotelLogo.png";
const hotel_phone = "+62 361 300 7000";
const hotel_phone_cleaned = "623613007000";
const hotel_email = "randomemail@email.com";
const hotel_address =
  "Jl. Raya Uluwatu, Pecatu, Kuta Selatan, Badung, Bali 80361";
const hotel_city = "Bali";
const hotel_state = "Indonesia";
const hotel_lat = -27.44043830690196;
const hotel_lng = -48.38389974602489;
const google_map_key = "AIzaSyCoIs9PHsryA2eXgnj4uXgl0XEksfMfWlg";

const translations = {
  google_map_key: google_map_key,
  year: 2024,
  hotel_name: hotel_name,
  hotel_logo: hotel_logo,
  hotel_phone: hotel_phone_cleaned,
  hotel_email: hotel_email,
  hotel_address: hotel_address,
  hotel_city: hotel_city,
  hotel_state: hotel_state,
  hotel_lat: hotel_lat,
  hotel_lng: hotel_lng,
  first_section: {
    name: hotel_name,
    description: "International Balinese Resort",
    display_image: hotel_logo,
  },
  sidebar: {
    home: {
      text: "home",
      title: "ROOM & VILLA",
      imgUrl: "./assets/hotel-card.png",
    },
  },
  second_section: {
    cards: [
      {
        text: "Highland Villa and Stunning Natural View",
        title: "ROOM & VILLA",
        imgUrl: "./assets/hotel-card.png",
        redirect: "/index/quarto?id=1",
      },
      {
        text: "Calm Coffee and Delicious Food",
        title: "CAFFEE & RESTAURANT",
        imgUrl: "./assets/food-card.png",
        redirect: "/index/quarto?id=2",
      },
      {
        text: "Hiling Your Emotion with Nursery & Agriculture",
        title: "NURSERY & AGRICULTURE",
        imgUrl: "./assets/salad-card.png",
        redirect: "/index/quarto?id=3",
      },
    ],
  },
  third_section: {
    learn_more: {
      title: "Why Choose Us",
      text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a",
      btn_text: "Learn More",
    },
  },
  fourth_section: {
    choose_us: [
      {
        title: "Late Checkout",
        text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit",
        imgUrl: "./assets/late-checkout.svg",
      },
      {
        title: "Flexible Cancellation",
        text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit",
        imgUrl: "./assets/calendar-check.svg",
      },
      {
        title: "Best Rate Guarateed",
        text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit",
        imgUrl: "./assets/shield-check-icon.svg",
      },
      {
        title: "Best Price",
        text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit",
        imgUrl: "./assets/best-price.svg",
      },
    ],
  },
  fifth_section: {
    title: "Forget your work & be One with Nature",
    text: "Timeless Indian Ocean views are maximidez along the cliff front, with unmatched sunsets, blossoming gardens, and 24/7 buttler service.",
    carousel: [
      {
        imgUrl: "./assets/hotel-carousel1.jpg",
      },
      {
        imgUrl: "./assets/hotel-carousel3.jpg",
      },
      {
        imgUrl: "./assets/hotel-carousel1.jpg",
      },
      {
        imgUrl: "./assets/hotel-carousel3.jpg",
      },
      {
        imgUrl: "./assets/hotel-carousel1.jpg",
      },
    ],
  },
  sixth_section: {
    hotel_name: hotel_name,
    address: hotel_address,
    city: hotel_city,
    state: hotel_state,
    phone: hotel_phone,
    email: hotel_email,
    lat: hotel_lat,
    lng: hotel_lng,
  },
  contato: {
    title: "Get in touch",
    description: "Do you have any questions? Feel free to contact us",
    label1: "Name",
    placeholder1: "Enter your name",
    label2: "E-mail",
    placeholder2: "Enter your e-mail",
    label3: "Phone",
    placeholder3: "Enter your Phone number",
    label4: "Message",
    placeholder4: "Enter your Message",
  },
  base_rooms: [
    {
      id: "1",
      name: "zimmer-frei-quartos-vagos quarto 1",
      people: 2,
      rooms: 1,
      full_space: false,
      price: 890,
      promotional_price_out_season: 890,
      reserved_date: ["11-04-2024", "12-04-2024", "12-04-2024"],
      bookUrl:
        "https://book.securebookings.net/roomrate?id=46377b96-de9e-1704397075-40bc-8194-a38ca36983c5&lang=br",
      data_page: {
        name: "Zimmer Frei - Quarto 1",
        descriptions: [
          "No conceito de uma grande casa, alugamos os quartos vagos. Nessa modalidade os quartos não possuem cozinha, porém temos uma cozinha na area comum da nossa grande casa, incluindo um forno elétrico e micro-ondas para o preparo de pratos rápidos ou congelados, ou ainda recomendamos conhecer os restaurantes da região que são um charme a parte.",
          "Vale lembrar que como são aluguel de quartos, não possuímos nenhum tipo de serviços de hotel ou pousada, e o aconchego é de uma grande casa. No Zimmer Frei você pode usufruir da mesma área comum, com a Mercearia, horta, redário, Lounge deck, fogo de chão e vários decks na propriedade."
        ],
        additionals: [
          "Cama de casal",
          "Cama de solteiro",
          "TV 28 polegadas",
          "Frigobar",
          "Lareira",
          "Banheiro",
        ],
        additionals2: {
          card: [
            {
              title: "Cama de casal",
              text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit",
              imgUrl: "./assets/late-checkout.svg",
            },
            {
              title: "Cama de solteiro",
              text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit",
              imgUrl: "./assets/calendar-check.svg",
            },
            {
              title: "TV 28 polegadas",
              text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit",
              imgUrl: "./assets/shield-check-icon.svg",
            },
            {
              title: "Frigobar",
              text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit",
              imgUrl: "./assets/best-price.svg",
            },
            {
              title: "Lareira",
              text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit",
              imgUrl: "./assets/best-price.svg",
            },
            {
              title: "Banheiro",
              text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit",
              imgUrl: "./assets/best-price.svg",
            },
          ],
        },
        validity: "17-12-2024",
        observations: [
          "Preço (casal)  para finais de semana, duas diárias.",
          "Sexta a Domingo",
          "Com café da manhã incluso.",
          "Feriados e datas comemorativas tarifário diferenciado (consultar)",
          "Preços podem sofrer alterações sem aviso prévio;",
        ],
        extras: [
          "DIÁRIA (até 12 anos): R$ 90,00",
          "DIÁRIA (acima de 12 anos): R$ 130,00",
        ],
        images: [
          "./assets/room-img-1.png",
          "./assets/room-img-2.png",
          "./assets/room-img-3.png",
          "./assets/room-img-4.png",
        ],
      },
      data_card: {
        text: "Highland Villa and Stunning Natural View",
        title: "ROOM & VILLA",
        imgUrl: "./assets/hotel-card.png",
        url: "/index/quarto?id=1",
      },
    },
    {
      id: "2",
      name: "zimmer-frei-quartos-vagos quarto 2",
      people: 2,
      rooms: 1,
      full_space: false,
      price: 890,
      promotional_price_out_season: 890,
      reserved_date: ["11-04-2024", "12-04-2024", "12-04-2024"],
      bookUrl:
        "https://book.securebookings.net/roomrate?id=46377b96-de9e-1704397075-40bc-8194-a38ca36983c5&lang=br",
      data_page: {
        name: "Zimmer Frei - Quarto 1",
        descriptions: [
          "No conceito de uma grande casa, alugamos os quartos vagos. Nessa modalidade os quartos não possuem cozinha, porém temos uma cozinha na area comum da nossa grande casa, incluindo um forno elétrico e micro-ondas para o preparo de pratos rápidos ou congelados, ou ainda recomendamos conhecer os restaurantes da região que são um charme a parte.",
          "Vale lembrar que como são aluguel de quartos, não possuímos nenhum tipo de serviços de hotel ou pousada, e o aconchego é de uma grande casa. No Zimmer Frei você pode usufruir da mesma área comum, com a Mercearia, horta, redário, Lounge deck, fogo de chão e vários decks na propriedade."
        ],
        additionals: [
          "Cama de casal",
          "Cama de solteiro",
          "TV 28 polegadas",
          "Frigobar",
          "Lareira",
          "Banheiro",
        ],
        additionals2: {
          card: [
            {
              title: "Cama de casal",
              text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit",
              imgUrl: "./assets/late-checkout.svg",
            },
            {
              title: "Cama de solteiro",
              text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit",
              imgUrl: "./assets/calendar-check.svg",
            },
            {
              title: "TV 28 polegadas",
              text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit",
              imgUrl: "./assets/shield-check-icon.svg",
            },
            {
              title: "Frigobar",
              text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit",
              imgUrl: "./assets/best-price.svg",
            },
            {
              title: "Lareira",
              text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit",
              imgUrl: "./assets/best-price.svg",
            },
            {
              title: "Banheiro",
              text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit",
              imgUrl: "./assets/best-price.svg",
            },
          ],
        },
        validity: "17-12-2024",
        observations: [
          "Preço (casal)  para finais de semana, duas diárias.",
          "Sexta a Domingo",
          "Com café da manhã incluso.",
          "Feriados e datas comemorativas tarifário diferenciado (consultar)",
          "Preços podem sofrer alterações sem aviso prévio;",
        ],
        extras: [
          "DIÁRIA (até 12 anos): R$ 90,00",
          "DIÁRIA (acima de 12 anos): R$ 130,00",
        ],
        images: [
          "./assets/room-img-1.png",
          "./assets/room-img-2.png",
          "./assets/room-img-3.png",
          "./assets/room-img-4.png",
        ],
      },
      data_card: {
        text: "Highland Villa and Stunning Natural View",
        title: "ROOM & VILLA",
        imgUrl: "./assets/hotel-card.png",
        url: "/index/quarto?id=2",
      },
    },
    {
      id: "3",
      name: "zimmer-frei-quartos-vagos quarto 3",
      people: 2,
      rooms: 1,
      full_space: false,
      price: 890,
      promotional_price_out_season: 890,
      reserved_date: ["11-04-2024", "12-04-2024", "12-04-2024"],
      bookUrl:
        "https://book.securebookings.net/roomrate?id=46377b96-de9e-1704397075-40bc-8194-a38ca36983c5&lang=br",
      data_page: {
        name: "Zimmer Frei - Quarto 1",
        descriptions: [
          "No conceito de uma grande casa, alugamos os quartos vagos. Nessa modalidade os quartos não possuem cozinha, porém temos uma cozinha na area comum da nossa grande casa, incluindo um forno elétrico e micro-ondas para o preparo de pratos rápidos ou congelados, ou ainda recomendamos conhecer os restaurantes da região que são um charme a parte.",
          "Vale lembrar que como são aluguel de quartos, não possuímos nenhum tipo de serviços de hotel ou pousada, e o aconchego é de uma grande casa. No Zimmer Frei você pode usufruir da mesma área comum, com a Mercearia, horta, redário, Lounge deck, fogo de chão e vários decks na propriedade."
        ],
        additionals: [
          "Cama de casal",
          "Cama de solteiro",
          "TV 28 polegadas",
          "Frigobar",
          "Lareira",
          "Banheiro",
        ],
        additionals2: {
          card: [
            {
              title: "Cama de casal",
              text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit",
              imgUrl: "./assets/late-checkout.svg",
            },
            {
              title: "Cama de solteiro",
              text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit",
              imgUrl: "./assets/calendar-check.svg",
            },
            {
              title: "TV 28 polegadas",
              text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit",
              imgUrl: "./assets/shield-check-icon.svg",
            },
            {
              title: "Frigobar",
              text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit",
              imgUrl: "./assets/best-price.svg",
            },
            {
              title: "Lareira",
              text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit",
              imgUrl: "./assets/best-price.svg",
            },
            {
              title: "Banheiro",
              text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit",
              imgUrl: "./assets/best-price.svg",
            },
          ],
        },
        validity: "17-12-2024",
        observations: [
          "Preço (casal)  para finais de semana, duas diárias.",
          "Sexta a Domingo",
          "Com café da manhã incluso.",
          "Feriados e datas comemorativas tarifário diferenciado (consultar)",
          "Preços podem sofrer alterações sem aviso prévio;",
        ],
        extras: [
          "DIÁRIA (até 12 anos): R$ 90,00",
          "DIÁRIA (acima de 12 anos): R$ 130,00",
        ],
        images: [
          "./assets/room-img-1.png",
          "./assets/room-img-2.png",
          "./assets/room-img-3.png",
          "./assets/room-img-4.png",
        ],
      },
      data_card: {
        text: "Highland Villa and Stunning Natural View",
        title: "ROOM & VILLA",
        imgUrl: "./assets/hotel-card.png",
        url: "/index/quarto?id=3",
      },
    },
  ],
} as ITranslation;

export default {
  translations,
};
