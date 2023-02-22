import React from "react";
import logo from "./logo.svg";
import "./App.css";

const rnp = [
  {
    nazov: "Gbely",
    rozhodnutie: "https://apl.geology.sk/geofond/rastre/PDF/Gbely(42)_DP.pdf",
  },
];

const rp = [
  {
    nazov: "Jakubov",
    rozhodnutie:
      "https://apl.geology.sk/geofond/rastre/PDF/Suchohrad-Gajary_(64)_DP.pdf",
  },
  {
    nazov: "Láb",
    rozhodnutie:
      "https://apl.geology.sk/geofond/rastre/PDF/Lab(19,48,61)_DP.pdf",
  },
  {
    nazov: "Cunín",
    rozhodnutie:
      "https://apl.geology.sk/geofond/rastre/PDF/Cunin(53,76)_DP.pdf",
  },
  {
    nazov: "Jakubov - Dúbrava",
    rozhodnutie:
      "https://apl.geology.sk/geofond/rastre/PDF/Dubrava(46,57)_DP.pdf",
  },
  {
    nazov: "Závod",
    rozhodnutie:
      "https://apl.geology.sk/geofond/rastre/PDF/Studienka(51,52,74,75)_DP.pdf",
  },
  {
    nazov: "Gajary - báden",
    rozhodnutie:
      "https://apl.geology.sk/geofond/rastre/PDF/Gajary-baden(18,47,58)_DP.pdf",
  },
  {
    nazov: "Jakubov",
    rozhodnutie:
      "https://apl.geology.sk/geofond/rastre/PDF/Jakubov(771)_DP.pdf",
  },
  {
    nazov: "Studienka",
    rozhodnutie:
      "https://apl.geology.sk/geofond/rastre/PDF/Studienka(51,52,74,75)_DP.pdf",
  },
];

const hzp = [
  {
    nazov: "Láb",
    rozhodnutie:
      "https://apl.geology.sk/geofond/rastre/PDF/Lab(19,48,61)_DP.pdf",
  },
  {
    nazov: "Záhorská Ves",
    rozhodnutie:
      "https://apl.geology.sk/geofond/rastre/PDF/OBÚ BA č. 220-558/2020 z 20.2.2020",
  },
  {
    nazov: "Vysoká",
    rozhodnutie: "https://apl.geology.sk/geofond/rastre/PDF/Vysoka(66)_DP.pdf",
  },
  {
    nazov: "Špačince",
    rozhodnutie:
      "https://apl.geology.sk/geofond/rastre/PDF/Spacince(13)_DP.pdf",
  },
  {
    nazov: "Trebišov",
    rozhodnutie:
      "https://apl.geology.sk/geofond/rastre/PDF/Trebisov(91,850)_DP.pdf",
  },
  {
    nazov: "Horná Krupá",
    rozhodnutie:
      "https://apl.geology.sk/geofond/rastre/PDF/HornaKrupa(79)_DP.pdf",
  },
  {
    nazov: "Trakovice",
    rozhodnutie:
      "https://apl.geology.sk/geofond/rastre/PDF/Trakovice(70)_DP.pdf",
  },
  {
    nazov: "Gajary - báden",
    rozhodnutie:
      "https://apl.geology.sk/geofond/rastre/PDF/Gajary-baden(18,47,58)_DP.pdf",
  },
  {
    nazov: "Suchohrad - Gajary",
    rozhodnutie:
      "https://apl.geology.sk/geofond/rastre/PDF/Suchohrad-Gajary_(64)_DP.pdf",
  },
  {
    nazov: "Špačince - Bohunice ",
    rozhodnutie:
      "https://apl.geology.sk/geofond/rastre/PDF/Spacince-Bohunice I(15)_DP.pdf",
  },
  {
    nazov: "Feld",
    rozhodnutie:
      "https://apl.geology.sk/geofond/rastre/PDF/OBÚ BA č. 221-583/2020 z 24.2.2020",
  },
  {
    nazov: "Žbince",
    rozhodnutie:
      "https://apl.geology.sk/geofond/rastre/PDF/OBÚ KE č. 211-1051/2016; 17.3.2016",
  },
  {
    nazov: "Trhovište - Pozdišovce",
    rozhodnutie:
      "https://apl.geology.sk/geofond/rastre/PDF/Trhoviste-Pozdisovce(89)_DP.pdf",
  },
  {
    nazov: "Jakubov - Dúbrava",
    rozhodnutie:
      "https://apl.geology.sk/geofond/rastre/PDF/Dubrava(46,57)_DP.pdf",
  },
  {
    nazov: "Studienka",
    rozhodnutie:
      "https://apl.geology.sk/geofond/rastre/PDF/Studienka(51,52,74,75)_DP.pdf",
  },
  {
    nazov: "Cunín",
    rozhodnutie:
      "https://apl.geology.sk/geofond/rastre/PDF/Cunin(53,76)_DP.pdf",
  },
  {
    nazov: "Ptrukša",
    rozhodnutie:
      "https://apl.geology.sk/geofond/rastre/PDF/Ptruksa(22,85)_DP.pdf",
  },
  {
    nazov: "Jakubov",
    rozhodnutie: "https://apl.geology.sk/geofond/rastre/PDF/null",
  },
  {
    nazov: "Závod",
    rozhodnutie:
      "https://apl.geology.sk/geofond/rastre/PDF/Studienka(51,52,74,75)_DP.pdf",
  },
  {
    nazov: "Senné",
    rozhodnutie:
      "https://apl.geology.sk/geofond/rastre/PDF/Senne(23,87)_DP.pdf",
  },
  {
    nazov: "Jakubov",
    rozhodnutie:
      "https://apl.geology.sk/geofond/rastre/PDF/Suchohrad-Gajary_(64)_DP.pdf",
  },
  {
    nazov: "Suchohrad - Gajary",
    rozhodnutie:
      "https://apl.geology.sk/geofond/rastre/PDF/Gajary-baden(18,47,58)_DP.pdf",
  },
  {
    nazov: "Jakubov - juh",
    rozhodnutie:
      "https://apl.geology.sk/geofond/rastre/PDF/Jakubov-juh(40,60,797)_DP.pdf",
  },
  {
    nazov: "Stretava",
    rozhodnutie:
      "https://apl.geology.sk/geofond/rastre/PDF/Pavlovce nadUhom-Stretava(88)_DP.pdf",
  },
  {
    nazov: "Špačince - Bohunice",
    rozhodnutie:
      "https://apl.geology.sk/geofond/rastre/PDF/Spacince-Bohunice(14)_DP.pdf",
  },
  {
    nazov: "Bánovce nad Ondavou",
    rozhodnutie:
      "https://apl.geology.sk/geofond/rastre/PDF/Banovce nadOndavou(84)_DP.pdf",
  },
  {
    nazov: "Závod - juh (báden)",
    rozhodnutie:
      "https://apl.geology.sk/geofond/rastre/PDF/Zavod-mezozoikum(20,67,68)_DP.pdf",
  },
  {
    nazov: "Lastomír",
    rozhodnutie:
      "https://apl.geology.sk/geofond/rastre/PDF/OBÚ KE č. 212-559/2016",
  },
  {
    nazov: "Moravany",
    rozhodnutie:
      "https://apl.geology.sk/geofond/rastre/PDF/OBÚ KE č. 195-1004/2016; 15.3.2016",
  },
  {
    nazov: "Záhorská Ves",
    rozhodnutie:
      "https://apl.geology.sk/geofond/rastre/PDF/OBÚ BA č. 773-2919/2019 z 25.11.2019",
  },
  {
    nazov: "Madunice - Veľké Kostoľany",
    rozhodnutie:
      "https://apl.geology.sk/geofond/rastre/PDF/Madunice-VelkeKostolany(12)_DP.pdf",
  },
  {
    nazov: "Závod - mezozoikum",
    rozhodnutie:
      "https://apl.geology.sk/geofond/rastre/PDF/Zavod-mezozoikum(20,67,68)_DP.pdf",
  },
];

const upuHzp = [
  {
    nazov: "Pavlovce nad Uhom",
    rozhodnutie: "https://apl.geology.sk/geofond/rastre/PDF/P8_19.pdf",
  },
  {
    nazov: "Trnava",
    rozhodnutie: "https://apl.geology.sk/geofond/rastre/PDF/P3_14.pdf",
  },
  {
    nazov: "Beša",
    rozhodnutie: "https://apl.geology.sk/geofond/rastre/PDF/P8_18.pdf",
  },
];

const upuRhzp = [
  {
    nazov: "Viedenská panva - sever",
    rozhodnutie: "https://apl.geology.sk/geofond/rastre/PDF/P6_19.pdf",
  },
];

const zrusHzp = [
  {
    nazov: "Beša nad Latoricou",
    nerast: "horľavý zemný plyn",
    rozhodnutie: "https://apl.geology.sk/geofond/rastre/PDF/P2_03.pdf",
  },
  {
    nazov: "Klenová",
    nerast: "horľavý zemný plyn",
    rozhodnutie: "https://apl.geology.sk/geofond/rastre/PDF/P19_15.pdf",
  },
  {
    nazov: "Nitra",
    nerast: "horľavý zemný plyn",
    rozhodnutie: "https://apl.geology.sk/geofond/rastre/PDF/P16_05.pdf",
  },
  {
    nazov: "Východoslovenská nížina",
    nerast: "horľavý zemný plyn",
    rozhodnutie: "https://apl.geology.sk/geofond/rastre/PDF/P14_03.pdf",
  },
  {
    nazov: "Topolčany",
    nerast: "horľavý zemný plyn",
    rozhodnutie: "https://apl.geology.sk/geofond/rastre/PDF/P1_19.pdf",
  },
  {
    nazov: "Pavlovce nad Uhom",
    nerast: "horľavý zemný plyn",
    rozhodnutie: "https://apl.geology.sk/geofond/rastre/PDF/P8_19.pdf",
  },
];

const zrusRhzp = [
  {
    nazov: "Klokočov",
    nerast: "ropa a horľavý zemný plyn",
    rozhodnutie: "https://apl.geology.sk/geofond/rastre/PDF/P10_06.pdf",
  },
  {
    nazov: "Medzilaborce",
    nerast: "ropa a horľavý zemný plyn",
    rozhodnutie: "https://apl.geology.sk/geofond/rastre/PDF/P33_06.pdf",
  },
  {
    nazov: "Snina",
    nerast: "ropa a horľavý zemný plyn",
    rozhodnutie: "https://apl.geology.sk/geofond/rastre/PDF/P32_06.pdf",
  },
  {
    nazov: "Burda",
    nerast: "ropa a horľavý zemný plyn",
    rozhodnutie: "https://apl.geology.sk/geofond/rastre/PDF/P13_13.pdf",
  },
  {
    nazov: "Plavnica",
    nerast: "ropa a horľavý zemný plyn",
    rozhodnutie: "https://apl.geology.sk/geofond/rastre/PDF/P25_05.pdf",
  },
  {
    nazov: "Galanta",
    nerast: "ropa a horľavý zemný plyn",
    rozhodnutie: "https://apl.geology.sk/geofond/rastre/PDF/P1_04.pdf",
  },
  {
    nazov: "Nové Zámky",
    nerast: "ropa a horľavý zemný plyn",
    rozhodnutie: "https://apl.geology.sk/geofond/rastre/PDF/P2_04.pdf",
  },
  {
    nazov: "Klokočov",
    nerast: "ropa a horľavý zemný plyn",
    rozhodnutie: "https://apl.geology.sk/geofond/rastre/PDF/P10_04.pdf",
  },
  {
    nazov: "Gbely",
    nerast: "ropa a horľavý zemný plyn",
    rozhodnutie: "https://apl.geology.sk/geofond/rastre/PDF/P17_02.pdf",
  },
  {
    nazov: "Bažantnica",
    nerast: "ropa a horľavý zemný plyn",
    rozhodnutie: "https://apl.geology.sk/geofond/rastre/PDF/P16_02.pdf",
  },
  {
    nazov: "Svidník",
    nerast: "ropa a horľavý zemný plyn",
    rozhodnutie: "https://apl.geology.sk/geofond/rastre/PDF/P34_06.pdf",
  },
  {
    nazov: "Čadca",
    nerast: "ropa a horľavý zemný plyn",
    rozhodnutie: "https://apl.geology.sk/geofond/rastre/PDF/P3_04.pdf",
  },
];

const zrusRhzpAuAg = [
  {
    nazov: "Oravská Polhora",
    nerast: "ropa a horľavý zemný plyn, Au,Ag, polymetalické rudy",
    rozhodnutie: "https://apl.geology.sk/geofond/rastre/PDF/P16_03.pdf",
  },
];

const zrusRzp = [
  {
    nazov: "Pakostov",
    nerast: "ropa a zemný plyn",
    rozhodnutie: "https://apl.geology.sk/geofond/rastre/PDF/P7_15.pdf",
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
              <span style={{ paddingRight: "10px" }}>{data.nazov}</span>
              <a href={data.rozhodnutie} target="_blank">
                {data.rozhodnutie}
              </a>
            </div>
          ))}
        </tr>
        <th>Ropa parafinická</th>

        <tr>
          {rp.map((data) => (
            <div>
              <span style={{ paddingRight: "10px" }}>{data.nazov}</span>
              <a href={data.rozhodnutie} target="_blank">
                {data.rozhodnutie}
              </a>
            </div>
          ))}
        </tr>
        <th>Horlavy zemny plyn</th>

        <tr>
          {hzp.map((data) => (
            <div>
              <span style={{ paddingRight: "10px" }}>{data.nazov}</span>
              <a href={data.rozhodnutie} target="_blank">
                {data.rozhodnutie}
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
              <span style={{ paddingRight: "10px" }}>{data.nazov}</span>
              <a href={data.rozhodnutie} target="_blank">
                {data.rozhodnutie}
              </a>
            </div>
          ))}
        </tr>
        <th>Ropa a horľavý zemný plyn</th>
        <tr>
          {upuRhzp.map((data) => (
            <div>
              <span style={{ paddingRight: "10px" }}>{data.nazov}</span>
              <a href={data.rozhodnutie} target="_blank">
                {data.rozhodnutie}
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
              <span style={{ paddingRight: "10px" }}>{data.nazov}</span>
              <a href={data.rozhodnutie} target="_blank">
                {data.rozhodnutie}
              </a>
            </div>
          ))}
        </tr>
        <th>Zemný plyn</th>
        <tr>
          {zrusHzp.map((data) => (
            <div>
              <span style={{ paddingRight: "10px" }}>{data.nazov}</span>
              <a href={data.rozhodnutie} target="_blank">
                {data.rozhodnutie}
              </a>
            </div>
          ))}
        </tr>
        <th>Horľavý zemný plyn</th>
        <tr>
          {zrusHzp.map((data) => (
            <div>
              <span style={{ paddingRight: "10px" }}>{data.nazov}</span>
              <a href={data.rozhodnutie} target="_blank">
                {data.rozhodnutie}
              </a>
            </div>
          ))}
        </tr>
        <th>Ropa zemný plyn</th>
        <tr>
          {zrusRzp.map((data) => (
            <div>
              <span style={{ paddingRight: "10px" }}>{data.nazov}</span>
              <a href={data.rozhodnutie} target="_blank">
                {data.rozhodnutie}
              </a>
            </div>
          ))}
        </tr>
        <th>Ropa a horľavý zemný plyn</th>
        <tr>
          {zrusRhzp.map((data) => (
            <div>
              <span style={{ paddingRight: "10px" }}>{data.nazov}</span>
              <a href={data.rozhodnutie} target="_blank">
                {data.rozhodnutie}
              </a>
            </div>
          ))}
        </tr>
        <th>Ropa a horľavý zemný plyn, Au,Ag, polymetalické rudy</th>
        <tr>
          {zrusRhzpAuAg.map((data) => (
            <div>
              <span style={{ paddingRight: "10px" }}>{data.nazov}</span>
              <a href={data.rozhodnutie} target="_blank">
                {data.rozhodnutie}
              </a>
            </div>
          ))}
        </tr>
      </table>
    </>
  );
}

export default App;
