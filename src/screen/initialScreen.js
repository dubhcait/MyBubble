import React from "react";
import {
  Heading,
  Text,
  BulletPont,
  Underlay,
  FlexColumn,
  PrimaryButton
} from "../components";

const InitialScreen = ({ introPartialSeen }) => (
  <Underlay>
    <Heading>
      The app that rewards young folks for staying safe in ‘their bubble‘
    </Heading>

    <Text>Why social distancing is important - one liner</Text>

    <Heading>THE CHALLENGE be a good neighbor by:</Heading>

    <FlexColumn>
      <BulletPont>Keeping your distance </BulletPont>
      <BulletPont>Avoiding groups </BulletPont>
      <BulletPont>Staying home </BulletPont>
      <BulletPont>Sending positivity </BulletPont>
      <BulletPont>Helping others Keeping informed</BulletPont>
    </FlexColumn>
    <PrimaryButton onClick={() => introPartialSeen()}>Lets go!</PrimaryButton>
  </Underlay>
);

export default InitialScreen;
