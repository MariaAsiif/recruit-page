import React, { useEffect, useRef, useState } from "react";
import WaveSurfer from "wavesurfer.js";
import { WaveSurfMain } from "./StyledWaveSurf";
import { FaPlay, FaVolumeMute, FaVolumeUp, FaStop, FaPause } from "react-icons/fa";
const formWaveSurferOptions = ref => ({
  container: ref,
  waveColor: "#eee",
  progressColor: "OrangeRed",
  cursorColor: "OrangeRed",
  barWidth: 3,
  barRadius: 3,
  responsive: true,
  height: 150,
  // If true, normalize by the maximum peak instead of 1.0.
  normalize: true,
  // Use the PeakCache to improve rendering speed of large waveforms.
  partialRender: true
});

export default function Waveform({ url }) {
  const waveformRef = useRef(null);
  const wavesurfer = useRef(null);
  const [playing, setPlay] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [muteVolume, setMuteVolume] = useState(false);
  // create new WaveSurfer instance
  // On component mount and when url changes
  useEffect(() => {
    setPlay(false);
    const options = formWaveSurferOptions(waveformRef.current);
    wavesurfer.current = WaveSurfer.create(options);
    wavesurfer.current.load(url);
    wavesurfer.current.on("ready", function () {
      // https://wavesurfer-js.org/docs/methods.html
      // wavesurfer.current.play();
      // setPlay(true);

      // make sure object stillavailable when file loaded
      if (wavesurfer.current) {
        wavesurfer.current.setVolume(volume);
        setVolume(volume);
      }
    });
    // Removes events, elements and disconnects Web Audio nodes.
    // when component unmount
    return () => wavesurfer.current.destroy();
  }, [url]);
  const handlePlayPause = () => {
    setPlay(!playing);
    wavesurfer.current.playPause();
  };
  const volumeMutedHandler = () => {
    setMuteVolume(!muteVolume);
    wavesurfer.current.toggleMute();
  };
  const stopHandler = () => {
    wavesurfer.current.stop();
  };
  const onVolumeChange = e => {
    const { target } = e;
    const newVolume = +target.value;

    if (newVolume) {

      wavesurfer.current.setVolume(newVolume || 1);
    }
  };
  return (
    <WaveSurfMain>
      <div id="waveform" ref={waveformRef} />
      <div className="controls">
        {/* <button onClick={handlePlayPause}>{!playing ? "Play" : "Pause"}</button> */}
        {/* <input
          type="range"
          id="volume"
          name="volume"
          // waveSurfer recognize value of `0` same as `1`
          //  so we need to set some zero-ish value for silence
          min="0.01"
          max="1"
          step=".025"
          onChange={onVolumeChange}
          defaultValue={volume}
        /> */}
        {/* <label htmlFor="volume">Volume</label> */}
      </div>
      <div className="mx-auto mt-5 flex justify-center text-[18px]">
        {
          playing ? (
            <FaPause onClick={handlePlayPause} fontSize='2rem' className="me-4" />
          ) : (
            <FaPlay onClick={handlePlayPause} fontSize='2rem' className="me-4" />
          )
        }
        <FaStop onClick={stopHandler} fontSize='2rem' className="me-4 " />
        {
          muteVolume ? (
            <FaVolumeMute onClick={volumeMutedHandler} fontSize='2rem' className="me-4" />
          ) : (
            <FaVolumeUp onClick={volumeMutedHandler} fontSize='2rem' className="me-4" />
          )
        }
      </div>
    </WaveSurfMain>
  );
}
