import React from "react";
import logo from "./logo.svg";
import "./App.css";

const rnp = [
  {
    Nazov: "Gbely",
    Rozhodnutie: "https://apl.geology.sk/geofond/rastre/PDF/Gbely(42)_DP.pdf",
  },
];

const rp = [
  {
    Nazov: "Jakubov",
    Rozhodnutie:
      "https://apl.geology.sk/geofond/rastre/PDF/Suchohrad-Gajary_(64)_DP.pdf",
  },
  {
    Nazov: "Láb",
    Rozhodnutie:
      "https://apl.geology.sk/geofond/rastre/PDF/Lab(19,48,61)_DP.pdf",
  },
  {
    Nazov: "Cunín",
    Rozhodnutie:
      "https://apl.geology.sk/geofond/rastre/PDF/Cunin(53,76)_DP.pdf",
  },
  {
    Nazov: "Jakubov - Dúbrava",
    Rozhodnutie:
      "https://apl.geology.sk/geofond/rastre/PDF/Dubrava(46,57)_DP.pdf",
  },
  {
    Nazov: "Závod",
    Rozhodnutie:
      "https://apl.geology.sk/geofond/rastre/PDF/Studienka(51,52,74,75)_DP.pdf",
  },
  {
    Nazov: "Gajary - báden",
    Rozhodnutie:
      "https://apl.geology.sk/geofond/rastre/PDF/Gajary-baden(18,47,58)_DP.pdf",
  },
  {
    Nazov: "Jakubov",
    Rozhodnutie:
      "https://apl.geology.sk/geofond/rastre/PDF/Jakubov(771)_DP.pdf",
  },
  {
    Nazov: "Studienka",
    Rozhodnutie:
      "https://apl.geology.sk/geofond/rastre/PDF/Studienka(51,52,74,75)_DP.pdf",
  },
];

const hzp = [
  {
    Nazov: "Láb",
    Rozhodnutie:
      "https://apl.geology.sk/geofond/rastre/PDF/Lab(19,48,61)_DP.pdf",
  },
  {
    Nazov: "Záhorská Ves",
    Rozhodnutie:
      "https://apl.geology.sk/geofond/rastre/PDF/OBÚ BA č. 220-558/2020 z 20.2.2020",
  },
  {
    Nazov: "Vysoká",
    Rozhodnutie: "https://apl.geology.sk/geofond/rastre/PDF/Vysoka(66)_DP.pdf",
  },
  {
    Nazov: "Špačince",
    Rozhodnutie:
      "https://apl.geology.sk/geofond/rastre/PDF/Spacince(13)_DP.pdf",
  },
  {
    Nazov: "Trebišov",
    Rozhodnutie:
      "https://apl.geology.sk/geofond/rastre/PDF/Trebisov(91,850)_DP.pdf",
  },
  {
    Nazov: "Horná Krupá",
    Rozhodnutie:
      "https://apl.geology.sk/geofond/rastre/PDF/HornaKrupa(79)_DP.pdf",
  },
  {
    Nazov: "Trakovice",
    Rozhodnutie:
      "https://apl.geology.sk/geofond/rastre/PDF/Trakovice(70)_DP.pdf",
  },
  {
    Nazov: "Gajary - báden",
    Rozhodnutie:
      "https://apl.geology.sk/geofond/rastre/PDF/Gajary-baden(18,47,58)_DP.pdf",
  },
  {
    Nazov: "Suchohrad - Gajary",
    Rozhodnutie:
      "https://apl.geology.sk/geofond/rastre/PDF/Suchohrad-Gajary_(64)_DP.pdf",
  },
  {
    Nazov: "Špačince - Bohunice ",
    Rozhodnutie:
      "https://apl.geology.sk/geofond/rastre/PDF/Spacince-Bohunice I(15)_DP.pdf",
  },
  {
    Nazov: "Feld",
    Rozhodnutie:
      "https://apl.geology.sk/geofond/rastre/PDF/OBÚ BA č. 221-583/2020 z 24.2.2020",
  },
  {
    Nazov: "Žbince",
    Rozhodnutie:
      "https://apl.geology.sk/geofond/rastre/PDF/OBÚ KE č. 211-1051/2016; 17.3.2016",
  },
  {
    Nazov: "Trhovište - Pozdišovce",
    Rozhodnutie:
      "https://apl.geology.sk/geofond/rastre/PDF/Trhoviste-Pozdisovce(89)_DP.pdf",
  },
  {
    Nazov: "Jakubov - Dúbrava",
    Rozhodnutie:
      "https://apl.geology.sk/geofond/rastre/PDF/Dubrava(46,57)_DP.pdf",
  },
  {
    Nazov: "Studienka",
    Rozhodnutie:
      "https://apl.geology.sk/geofond/rastre/PDF/Studienka(51,52,74,75)_DP.pdf",
  },
  {
    Nazov: "Cunín",
    Rozhodnutie:
      "https://apl.geology.sk/geofond/rastre/PDF/Cunin(53,76)_DP.pdf",
  },
  {
    Nazov: "Ptrukša",
    Rozhodnutie:
      "https://apl.geology.sk/geofond/rastre/PDF/Ptruksa(22,85)_DP.pdf",
  },
  {
    Nazov: "Jakubov",
    Rozhodnutie: "https://apl.geology.sk/geofond/rastre/PDF/null",
  },
  {
    Nazov: "Závod",
    Rozhodnutie:
      "https://apl.geology.sk/geofond/rastre/PDF/Studienka(51,52,74,75)_DP.pdf",
  },
  {
    Nazov: "Senné",
    Rozhodnutie:
      "https://apl.geology.sk/geofond/rastre/PDF/Senne(23,87)_DP.pdf",
  },
  {
    Nazov: "Jakubov",
    Rozhodnutie:
      "https://apl.geology.sk/geofond/rastre/PDF/Suchohrad-Gajary_(64)_DP.pdf",
  },
  {
    Nazov: "Suchohrad - Gajary",
    Rozhodnutie:
      "https://apl.geology.sk/geofond/rastre/PDF/Gajary-baden(18,47,58)_DP.pdf",
  },
  {
    Nazov: "Jakubov - juh",
    Rozhodnutie:
      "https://apl.geology.sk/geofond/rastre/PDF/Jakubov-juh(40,60,797)_DP.pdf",
  },
  {
    Nazov: "Stretava",
    Rozhodnutie:
      "https://apl.geology.sk/geofond/rastre/PDF/Pavlovce nadUhom-Stretava(88)_DP.pdf",
  },
  {
    Nazov: "Špačince - Bohunice",
    Rozhodnutie:
      "https://apl.geology.sk/geofond/rastre/PDF/Spacince-Bohunice(14)_DP.pdf",
  },
  {
    Nazov: "Bánovce nad Ondavou",
    Rozhodnutie:
      "https://apl.geology.sk/geofond/rastre/PDF/Banovce nadOndavou(84)_DP.pdf",
  },
  {
    Nazov: "Závod - juh (báden)",
    Rozhodnutie:
      "https://apl.geology.sk/geofond/rastre/PDF/Zavod-mezozoikum(20,67,68)_DP.pdf",
  },
  {
    Nazov: "Lastomír",
    Rozhodnutie:
      "https://apl.geology.sk/geofond/rastre/PDF/OBÚ KE č. 212-559/2016",
  },
  {
    Nazov: "Moravany",
    Rozhodnutie:
      "https://apl.geology.sk/geofond/rastre/PDF/OBÚ KE č. 195-1004/2016; 15.3.2016",
  },
  {
    Nazov: "Záhorská Ves",
    Rozhodnutie:
      "https://apl.geology.sk/geofond/rastre/PDF/OBÚ BA č. 773-2919/2019 z 25.11.2019",
  },
  {
    Nazov: "Madunice - Veľké Kostoľany",
    Rozhodnutie:
      "https://apl.geology.sk/geofond/rastre/PDF/Madunice-VelkeKostolany(12)_DP.pdf",
  },
  {
    Nazov: "Závod - mezozoikum",
    Rozhodnutie:
      "https://apl.geology.sk/geofond/rastre/PDF/Zavod-mezozoikum(20,67,68)_DP.pdf",
  },
];

const upuHzp = [
  {
    Nazov: "Pavlovce nad Uhom",
    Rozhodnutie: "https://apl.geology.sk/geofond/rastre/PDF/P8_19.pdf",
  },
  {
    Nazov: "Trnava",
    Rozhodnutie: "https://apl.geology.sk/geofond/rastre/PDF/P3_14.pdf",
  },
  {
    Nazov: "Beša",
    Rozhodnutie: "https://apl.geology.sk/geofond/rastre/PDF/P8_18.pdf",
  },
];

const upuRhzp = [
  {
    Nazov: "Viedenská panva - sever",
    Rozhodnutie: "https://apl.geology.sk/geofond/rastre/PDF/P6_19.pdf",
  },
];

const zrusHzp = [
  {
    Nazov: "Beša nad Latoricou",
    Rozhodnutie: "https://apl.geology.sk/geofond/rastre/PDF/P2_03.pdf",
  },
  {
    Nazov: "Klenová",
    Rozhodnutie: "https://apl.geology.sk/geofond/rastre/PDF/P19_15.pdf",
  },
  {
    Nazov: "Nitra",
    Rozhodnutie: "https://apl.geology.sk/geofond/rastre/PDF/P16_05.pdf",
  },
  {
    Nazov: "Východoslovenská nížina",
    Rozhodnutie: "https://apl.geology.sk/geofond/rastre/PDF/P14_03.pdf",
  },
  {
    Nazov: "Topolčany",
    Rozhodnutie: "https://apl.geology.sk/geofond/rastre/PDF/P1_19.pdf",
  },
  {
    Nazov: "Pavlovce nad Uhom",
    Rozhodnutie: "https://apl.geology.sk/geofond/rastre/PDF/P8_19.pdf",
  },
];

function App() {
  return (
    <>
      <table>
        <th>Ropa neparafinická</th>
        <tr>
          {rnp.map((data) => (
            <div>
              <span style={{ paddingRight: "10px" }}>{data.Nazov}</span>
              <a href={data.Rozhodnutie} target="_blank">
                {data.Rozhodnutie}
              </a>
            </div>
          ))}
        </tr>
        <th>Ropa parafinická</th>

        <tr>
          {rp.map((data) => (
            <div>
              <span style={{ paddingRight: "10px" }}>{data.Nazov}</span>
              <a href={data.Rozhodnutie} target="_blank">
                {data.Rozhodnutie}
              </a>
            </div>
          ))}
        </tr>
        <th>Horlavy zemny plyn</th>

        <tr>
          {hzp.map((data) => (
            <div>
              <span style={{ paddingRight: "10px" }}>{data.Nazov}</span>
              <a href={data.Rozhodnutie} target="_blank">
                {data.Rozhodnutie}
              </a>
            </div>
          ))}
        </tr>
      </table>
      <table>
        <caption style={{ fontSize: "40px" }}>Urcene PU</caption>
        <th>Horľavý zemný plyn</th>
        <tr>
          {upuHzp.map((data) => (
            <div>
              <span style={{ paddingRight: "10px" }}>{data.Nazov}</span>
              <a href={data.Rozhodnutie} target="_blank">
                {data.Rozhodnutie}
              </a>
            </div>
          ))}
        </tr>
        <th>Ropa a horľavý zemný plyn</th>
        <tr>
          {upuRhzp.map((data) => (
            <div>
              <span style={{ paddingRight: "10px" }}>{data.Nazov}</span>
              <a href={data.Rozhodnutie} target="_blank">
                {data.Rozhodnutie}
              </a>
            </div>
          ))}
        </tr>
      </table>
      <table>
        <caption style={{ fontSize: "40px" }}>Zrusene PU</caption>
        <th>Horľavý zemný plyn</th>
        <tr>
          {zrusHzp.map((data) => (
            <div>
              <span style={{ paddingRight: "10px" }}>{data.Nazov}</span>
              <a href={data.Rozhodnutie} target="_blank">
                {data.Rozhodnutie}
              </a>
            </div>
          ))}
        </tr>
      </table>
    </>
  );
}

export default App;
