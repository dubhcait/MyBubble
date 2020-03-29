import React from "react";
import {
  Heading,
  Text,
  Underlay,
  FlexRow,
  PrimaryButton,
  GroupIcon
} from "../components";
import {
  healthBubble,
  plus,
  newTask,
  home,
  poppedBubble,
  group
} from "../assets";

const WeeklyChallenge = ({ introAllSeen }) => (
  <Underlay>
    <Heading>THIS WEEK’S CHALLENGE</Heading>

    <Text>Signup for an online course </Text>
    <Text>Have a videochat with a friend</Text>
    <Text>And don’t break the social distance rules!</Text>
    <FlexRow>
      <img src={newTask} />
      <img src={plus} />
      <img src={healthBubble} /> <img src={healthBubble} />
      <img src={healthBubble} />
    </FlexRow>

    <Heading>Don’t burst any bubbles by breaking social distance!</Heading>
    <FlexRow>
      <GroupIcon />
      {/* <img src={group} /> */}
      <img src={home} />
      <img src={poppedBubble} />
    </FlexRow>

    <Heading>TO EARN:</Heading>
    <FlexRow>
      <Text>A free month of Netflixd</Text>
    </FlexRow>

    <PrimaryButton>Challenge accepted!</PrimaryButton>
  </Underlay>
);

export default WeeklyChallenge;
