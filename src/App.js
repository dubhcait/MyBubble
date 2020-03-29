import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import {
  GameIntro,
  InitialScreen,
  KeepYourDistanceRule,
  GroupsRule,
  StayHoneRule,
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
    <Router>
      <div className="App">
        <Switch>
          <Route path="/distance">
            <KeepYourDistanceRule />
          </Route>
          <Route path="/groups">
            <GroupsRule />
          </Route>
          <Route path="/staysthome">
            <StayHoneRule />
          </Route>

          {showIntro && (
            <Route path="/">
              <InitialScreen introPartialSeen={introPartialSeen} />
            </Route>
          )}

          {showGameInstructions && (
            <Route path="/">
              <GameIntro introAllSeen={introAllSeen} />
            </Route>
          )}

          <Route path="/">
            <MainScreen lifeCount={lifeCount} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
