import React from "react";
import { Heading, Text, Underlay, PrimaryButton } from "../components";
import { healthBubble } from "../assets";

const InitialScreen = ({ introPartialSeen }) => (
  <Underlay color="dark">
    <Heading color="white">YOUR MISSION</Heading>

    <Text>
      Keep you and your loved ones safe as we battle{" "}
      <span style={{ fontWeight: "bold" }}>COVID-19</span>
    </Text>
    <img src={healthBubble} style={{ height: 190 + "px" }} />
    <Text>
      Stay in your “bubble” each week - a{" "}
      <span style={{ textDecoration: "underline" }}>safe social distance</span>{" "}
      to earn rewards
    </Text>

    <PrimaryButton onClick={() => introPartialSeen()}>
      <p style={{ margin: 0 }}>Lets go!</p>
    </PrimaryButton>
  </Underlay>
);

export default InitialScreen;
