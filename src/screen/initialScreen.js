import React from "react";
import {
  Heading,
  Text,
  BulletPont,
  Underlay,
  FlexColumn,
  PrimaryButton
} from "../components";
import { healthBubble } from "../assets";

const InitialScreen = ({ introPartialSeen }) => (
  <Underlay color="dark">
    <Heading color="white">YOUR MISSION</Heading>

    <Text>Keep you and your loved ones safe as we battle COVID-19</Text>
    <img src={healthBubble} />
    <Text>
      Stay in your “bubble” each week - a <a href="#">safe social distance</a>
      to earn rewards
    </Text>

    <PrimaryButton onClick={() => introPartialSeen()}>Lets go!</PrimaryButton>
  </Underlay>
);

export default InitialScreen;
