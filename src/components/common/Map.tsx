import React from "react";
import { GoogleMap, LoadScript, MarkerF } from "@react-google-maps/api";
import Data from "../../assets/data/list.json";

const containerStyle = {
  width: "60vw",
  height: "100vh",
};

const center = {
  lat: 40,
  lng: 135,
};

const mapStyles = [
  {
    featureType: "water",
    elementType: "all",
    stylers: [
      {
        color: "#FFFFFF",
      },
    ],
  },
  {
    featureType: "all",
    elementType: "labels",
    stylers: [{ visibility: "off" }],
  },
  {
    featureType: "transit",
    elementType: "labels",
    stylers: [{ visibility: "off" }],
  },
  {
    featureType: "roads",
    elementType: "labels",
    stylers: [{ visibility: "off" }],
  },
  {
    featureType: "all",
    elementType: "all",
    stylers: [{ hue: "#22B6B3" }, { saturation: -50 }],
  },
];

type Props = {
  selectCity: [];
  setSelectCity: React.Dispatch<[]>;
};

function Map({ selectCity, setSelectCity }: Props) {
  const handelClick = (city: any) => {
    // const newArray = selectCity.push(city);
    if (selectCity.length > 0) {
      setSelectCity([...selectCity, city]);
    } else {
      setSelectCity([city]);
    }
  };
  return (
    <LoadScript googleMapsApiKey={import.meta.env.VITE_APP_GOOGLE_MAP}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={5.7}
        options={{
          styles: mapStyles,
        }}
      >
        {/* 型エラー出てるけど表示できるから無視  */}
        {Object.keys(Data).map((key) => (
          <MarkerF
            key={key}
            onClick={() => handelClick(Data[key])}
            position={{ lat: Data[key].latitude, lng: Data[key].longitude }}
          />
        ))}
      </GoogleMap>
    </LoadScript>
  );
}

export default React.memo(Map);
