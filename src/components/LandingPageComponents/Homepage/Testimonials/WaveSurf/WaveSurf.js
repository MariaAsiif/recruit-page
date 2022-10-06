import React, { useState } from "react";

import Waveform from "./Waveform";


// const url = "https://www.mfiles.co.uk/mp3-downloads/gs-cd-track2.mp3";

const tracks = [
  {
    id: 0,
    title: "Brahms: St Anthony Chorale - Theme, Two Pianos Op.56b",
    url:'Audios/Kevin M. Russell.mp3'
      // "https://www.mfiles.co.uk/mp3-downloads/brahms-st-anthony-chorale-theme-two-pianos.mp3"
  },
  {
    id: 1,
    title: "Franz Schubert's Ständchen - Voice (Clarinet) & Piano",
    url:
      "https://www.mfiles.co.uk/mp3-downloads/franz-schubert-standchen-serenade.mp3"
  }
];

export default function WaveSurf({audio}) {
  const [selectedTrack, setSelectedTrack] = useState(tracks[0]);

  return (
    <div className="App">
      <Waveform url={audio} />
    
      <br />
     
    </div>
  );
}
