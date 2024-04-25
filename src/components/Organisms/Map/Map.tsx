import React from 'react';
import {
  GoogleMap,
  useLoadScript,
  MarkerF,
  Libraries,
} from '@react-google-maps/api';
import './Map.css';
import { t } from 'i18next';

const libraries = ['places'] as Libraries;

const Map: React.FC<IMapProps> = ({ lat, lng, className }) => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: t("google_map_key"),
    libraries,
  });

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading maps</div>;

  return isLoaded ? (
    <div>
      <GoogleMap
        mapContainerClassName={`map-container ${className ? className : ''}`}
        zoom={15}
        center={{ lat, lng }}
      >
        <MarkerF position={{ lat, lng }} opacity={1} />
      </GoogleMap>
    </div>
  ) : <></>;
};

export default Map;

interface IMapProps {
  lat: number;
  lng: number;
  className?: string;
}
