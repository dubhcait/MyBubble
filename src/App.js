import React, { useState, useEffect } from "react";
import { Modal } from "./components/modal";

import {
  GameIntro,
  InitialScreen,
  OupsTooManyPeople,
  OupsEnd,
  WellDone,
  MainScreen
} from "./screen";
import getLocation from "./util/geoLocation";

const App = () => {
  const hasIntroBeenSeen = window.localStorage.getItem("introSeen");
  const [showIntro, setShowIntro] = useState(hasIntroBeenSeen ? false : true);
  const [showGameInstructions, setGameInstructions] = useState(false);

  const [modalMesg, setModalMesg] = useState(false);
  const [lifeCount, setLifeCount] = useState([1, 1, 1]);

  const lostLife = () =>
    setLifeCount(lifeCount.length > 0 ? [...lifeCount].pop() : lifeCount);

  const gainLife = () => setLifeCount([...lifeCount].push(1));

  const [geoLocation, setGeoLocation] = useState("");

  useEffect(() => {
    getLocation(setGeoLocation);
  }, []);

  useEffect(() => {
    console.log("location", geoLocation);
  }, [geoLocation]);

  const introPartialSeen = () => {
    setShowIntro(false);
    setGameInstructions(true);
  };

  const introAllSeen = () => {
    setGameInstructions(false);
    window.localStorage.setItem("introSeen", "true");
  };

  const displayModalMesg = () => {};

  return (
    <div className="App">
      {showIntro && (
        <Modal>
          <InitialScreen introPartialSeen={introPartialSeen} />
        </Modal>
      )}
      {showGameInstructions && (
        <Modal>
          <GameIntro introAllSeen={introAllSeen} />
        </Modal>
      )}
      {/* {modalMesg && <Modal>{modalMesg}</Modal>} */}
      <MainScreen lifeCount={lifeCount} />
    </div>
  );
};

export default App;
