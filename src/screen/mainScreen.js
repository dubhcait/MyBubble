import React, { useState } from "react";
import {
  Bubble,
  Heading,
  FlexRow,
  Text,
  Underlay,
  FlexColumn
} from "../components";
import {
  leaderboard,
  healthBubble,
  poppedBubble,
  award,
  goodDeed
} from "../assets";

const MainScreen = ({ lifeCount }) => {
  const [status, setStatus] = useState("BubblePlus");

  const LifeCount = ({ lifeCount }) => {
    console.log(lifeCount);
    return lifeCount.map((i, k) => {
      if (k === 0) {
        if (i === 1) {
          return (
            <img src={healthBubble} key={k} style={{ height: 100 + "px" }} />
          );
        }
        return <img src={poppedBubble} key={k} />;
      }
      if (i === 1) {
        return (
          <img
            src={healthBubble}
            key={k}
            style={{ height: 100 + "px", marginLeft: -28 + "px" }}
          />
        );
      }
      return <img src={poppedBubble} key={k} />;
    });
  };

  return (
    <Underlay>
      <Heading>MyBubble</Heading>

      <Text>Bubbles remaining:</Text>
      <FlexRow>
        <LifeCount lifeCount={lifeCount} />
      </FlexRow>

      <Text>Who knew your housecat was onto something...</Text>
      <Text>Signup for an online course</Text>
      <Text>Have a videochat with a friend</Text>
      <FlexRow>
        <FlexColumn>
          <img src={goodDeed} />
          <Text>Do a good deed</Text>
        </FlexColumn>
        <FlexColumn>
          <img src={leaderboard} />
          <Text>Leaderboard</Text>
        </FlexColumn>
        <FlexColumn>
          <img src={award} />
          <Text>My Rewards</Text>
        </FlexColumn>
      </FlexRow>
    </Underlay>
  );
};

export default MainScreen;
