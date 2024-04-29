
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
      },
      {
        text: "Calm Coffee and Delicious Food",
        title: "CAFFEE & RESTAURANT",
        imgUrl: "./assets/food-card.png",
      },
      {
        text: "Hiling Your Emotion with Nursery & Agriculture",
        title: "NURSERY & AGRICULTURE",
        imgUrl: "./assets/salad-card.png",
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
  base_rooms: [
    {
      name: "zimmer-frei-quartos-vagos",
      people: 2,
      rooms: 1,
      full_space: false,
      price: 1000,
      promotional_price_out_season: 500,
      data_page: {},
      data_card: {
        text: "Highland Villa and Stunning Natural View",
        title: "ROOM & VILLA",
        imgUrl: "./assets/hotel-card.png",
      },
    },
  ],
} as ITranslation;

export default {
  translations,
};
