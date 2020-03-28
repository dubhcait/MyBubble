import React from "react";
import {
  Heading,
  Text,
  Underlay,
  FlexRow,
  FlexColumn,
  Bubble,
  BubbleX,
  PrimaryButton
} from "../components";

const GameIntro = ({ introAllSeen }) => (
  <Underlay>
    <Heading> 3 Bubbles/Lives for the week</Heading>
    <FlexRow>
      <Text>
        Each week you get 3 lives if you keep them Sunday at midnight you’ll
        earn a reward
      </Text>
      <FlexRow>
        <Bubble />
        <Bubble />
        <Bubble />
      </FlexRow>
    </FlexRow>
    <Heading>Don’t Burst your Bubbles!</Heading>
    <FlexRow>
      <BubbleX />
      <FlexColumn>
        <Text>Duos or less - no groups! You’re not starting a boy band</Text>
        <Text>Keep outside of the danger zone. 2m/6ft</Text>
      </FlexColumn>
    </FlexRow>
    <PrimaryButton onClick={() => introAllSeen()}>Continue</PrimaryButton>
  </Underlay>
);

export default GameIntro;
