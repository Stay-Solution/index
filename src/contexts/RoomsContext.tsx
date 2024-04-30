import React from "react";

interface roomFilters {
  startDate: Date;
  endDate: Date;
  rooms: number;
  people: number;
}

type RoomsContextProps = {
  setRoomFilters: (
    field: "startDate" | "endDate" | "rooms" | "people",
    value: unknown
  ) => void;
  roomFilters: roomFilters;
};

const defaultValue: RoomsContextProps = {
  setRoomFilters: () => {},
  roomFilters: {
    startDate: new Date(),
    endDate: new Date(),
    people: 2,
    rooms: 1,
  },
};

const RoomsContext = React.createContext<RoomsContextProps>(defaultValue);

interface IRoomsProviderProps {
  children: React.ReactNode;
}

export const RoomsContextProvider = ({ children }: IRoomsProviderProps) => {
  const [roomFilters, setRoomFilters] = React.useState<roomFilters>({
    startDate: new Date(),
    endDate: new Date(),
    people: 2,
    rooms: 1,
  });

  const changeRoomFilters = (
    field: "startDate" | "endDate" | "rooms" | "people",
    value: unknown
  ) => {
    setRoomFilters((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <RoomsContext.Provider
      value={{ setRoomFilters: changeRoomFilters, roomFilters }}
    >
      {children}
    </RoomsContext.Provider>
  );
};

export const useRoomsContext = () => React.useContext(RoomsContext);
