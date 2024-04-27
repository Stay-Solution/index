export interface ITranslation {
    google_map_key: string;
    year: number;
    hotel_name: string;
    hotel_logo: string;
    hotel_phone: string;
    hotel_email: string;
    hotel_address: string;
    hotel_city: string;
    hotel_state: string;
    hotel_lat: number;
    hotel_lng: number;
    first_section: {
      name: string;
      description: string;
      display_image: string;
    };
    sidebar: {
      home: {
        text: string;
        title: string;
        imgUrl: string;
      };
    };
    second_section: {
      cards: {
        text: string;
        title: string;
        imgUrl: string;
      }[];
    };
    third_section: {
      learn_more: {
        title: string;
        text: string;
        btn_text: string;
      };
    };
    fourth_section: {
      choose_us: {
        title: string;
        text: string;
        imgUrl: string;
      }[];
    };
    fifth_section: {
      title: string;
      text: string;
      carousel: {
        imgUrl: string;
      }[];
    };
    sixth_section: {
      hotel_name: string;
      address: string;
      city: string;
      state: string;
      phone: string;
      email: string;
      lat: number;
      lng: number;
    };
    contato: {
      title: string;
      description: string;
      label1: string;
      placeholder1: string;
      label2: string;
      placeholder2: string;
      label3: string;
      placeholder3: string;
      label4: string;
      placeholder4: string;
    };
    base_rooms: {
      id: number;
      name: string;
      people: number;
      rooms: number;
      full_space: boolean;
      price: number;
      promotional_price_out_season: number;
      reserved_date: string[];
      data_page: unknown; // Adjust type as needed
      data_card: {
        text: string;
        title: string;
        imgUrl: string;
      };
    }[];
  }