import React, { useState } from 'react';
import { Map, Marker, ZoomControl } from 'pigeon-maps';
const lat = 53.49962
const long = 20.56792
export default function MyMap() {
  const [hue, setHue] = useState(0);
  const color = `hsl(${hue % 360}deg 39% 70%)`;
  const [center, setCenter] = useState([lat, long ]);
  const [zoom, setZoom] = useState(12);
  return (
    <Map
      // height={1000}
      center={center}
      zoom={zoom}
      onBoundsChanged={({ center, zoom }) => {
        setCenter(center);
        setZoom(zoom);
      }}
    >
       <ZoomControl />
      <Marker width={50} anchor={[lat, long]} color={color} onClick={() => setHue(hue + 20)} />
    </Map>
  );
}
