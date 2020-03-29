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

const GameIntro = ({ introAllSeen }) => (
  <Underlay>
    <Heading> How to WIN</Heading>

    <Text>Start the week with a new challenge and 3 bubbles</Text>
    <FlexRow>
      <img src={newTask} />
      <img src={plus} />
      <img src={healthBubble} /> <img src={healthBubble} />
      <img src={healthBubble} />
    </FlexRow>

    <Heading>Don’t burst any bubbles by breaking social distance!</Heading>
    <FlexRow>
      <GroupIcon />
      <img src={group} />
      <img src={home} />
      <img src={poppedBubble} />
    </FlexRow>

    <Text>Keep your bubbles safe by Sunday and get rewards!</Text>

    <PrimaryButton onClick={() => introAllSeen()}>
      What’s social distancing?
    </PrimaryButton>
  </Underlay>
);

export default GameIntro;
