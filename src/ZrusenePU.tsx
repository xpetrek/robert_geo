import React, { useEffect, useRef } from "react";
import {
  Circle,
  CircleMarker,
  MapContainer,
  Marker,
  Polygon,
  Polyline,
  Popup,
  Rectangle,
  TileLayer,
  useMap,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import proj from "proj4";
import { zrusenePU } from "./useData";

// center={[48.67, 19.7]}

const ZrusenePU = () => {
  // Define the conversion parameters for S-JTSK / Krovak East North to WGS84
  const krovakParams = `+proj=krovak +lat_0=49.5 +lon_0=24.833333 +alpha=30.28813972222222 +k=0.9999 +x_0=0 +y_0=0 +ellps=bessel +pm=greenwich +units=m +no_defs`;

  const wgs84Params = "+proj=longlat +datum=WGS84 +no_defs";

  // Define the center coordinates in S-JTSK / Krovak East North
  const easting = -377603.66;
  const northing = -1238664.98;

  // Convert the center coordinates to WGS84
  const [lon, lat] = proj(krovakParams, wgs84Params, [easting, northing]);

  const getPolygonCoordinates = (data: any) => {
    const a = data.features.map((f: any) => {
      return {
        attributes: f.attributes,
        geometry: f.geometry.rings[0].map((c: any) => {
          const [lon, lat] = proj(krovakParams, wgs84Params, [c[0], c[1]]);
          return [lat, lon];
        }),
      };
    });
    return a;
  };

  return (
    <MapContainer
      center={[48.670423553238535, 19.701678088973534]}
      zoom={9}
      scrollWheelZoom={true}
      style={{ width: "100%", height: "calc(100vh - 4rem)" }}
    >
      <>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {getPolygonCoordinates(zrusenePU).map(
          (coordinates: any, key: number) => {
            console.log("coordinates.geometry", coordinates.attributes);
            return (
              <Polyline
                key={key}
                pathOptions={{ color: "red", fill: true, weight: 2 }}
                positions={coordinates.geometry as any}
              >
                <Popup maxWidth={1000} maxHeight={500}>
                  <h3>{coordinates.attributes.nazov}</h3>
                  <div>{JSON.stringify(coordinates.attributes)}</div>
                  <a
                    target="_blank"
                    href={`https://apl.geology.sk/geofond/rastre/PDF/${coordinates.attributes.pdf}`}
                  >
                    {`https://apl.geology.sk/geofond/rastre/PDF/${coordinates.attributes.pdf}`}
                  </a>
                </Popup>
              </Polyline>
            );
          }
        )}
      </>
    </MapContainer>
  );
};

export default ZrusenePU;
