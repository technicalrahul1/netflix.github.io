
// import './App.css';
import React from "react";
import Netflix from "./Netflix";
//import Shortkut from './component/Shortkut'


function Shortkut() {
  return (
    <>
    <h1 style={{textAlign:"center"}}>list of five best Webeseries</h1>
    <div style={{display:"flex"}}>
      <Netflix imgsrc="https://wallpapercave.com/wp/wp7241840.png" ahref="https://www.netflix.com/in/title/80192098" title="Money Heist"/>
      <Netflix imgsrc="https://upload.wikimedia.org/wikipedia/en/8/8a/The_Avengers_%282012_film%29_poster.jpg" ahref="https://www.hotstar.com/in/movies/avengers-endgame/1260013556" title="Avengers" />
      <Netflix imgsrc="https://upload.wikimedia.org/wikipedia/en/2/21/Web_of_Spider-Man_Vol_1_129-1.png" ahref="https://www.imdb.com/title/tt0112175/" title="SpiderMan"/>
      <Netflix imgsrc="https://upload.wikimedia.org/wikipedia/en/2/25/Kota_Factory_2_poster.jpg" ahref="https://www.netflix.com/in/TITle/81249783" title="kota Factory"/>
      <Netflix imgsrc="https://upload.wikimedia.org/wikipedia/en/thumb/6/69/Asur_Title.jpg/375px-Asur_Title.jpg" ahref="https://trakt.tv/shows/asur/seasons/all" title="Asur"/>
    </div> 
    </>
  );
}

export default Shortkut;
