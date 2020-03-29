import React from "react";
import { Heading, Text, Underlay, PrimaryButton } from "../components";
import { distance, groupNegative } from "../assets";
import { useHistory } from "react-router-dom";

const KeepYourDistanceRule = ({}) => {
  let history = useHistory();
  return (
    <Underlay>
      <Heading>Keep your distance!</Heading>

      <Text>
        Getting closer than 6ft increases your risk of getting germs on you
        (gross)!
      </Text>
      <img src={distance} />

      <Text>A perfect excuse to avoid that person you ghosted!</Text>

      <PrimaryButton onClick={() => history.push("/groups")}>
        ...I’m listening...
      </PrimaryButton>
    </Underlay>
  );
};

const GroupsRule = ({}) => {
  let history = useHistory();
  return (
    <Underlay>
      <Heading>Avoid groups!</Heading>

      <Text>
        Don’t be around more than 1 other person at a time (except for the
        people you live with)!
      </Text>
      <img src={groupNegative} />

      <Text>Bye, Felicia!</Text>

      <PrimaryButton onClick={() => history.push("/staysthome")}>
        ...aaaaand?...
      </PrimaryButton>
    </Underlay>
  );
};

const StayHoneRule = ({}) => {
  let history = useHistory();
  return (
    <Underlay>
      <Heading>Stay home!</Heading>

      <Text>
        Only go out if you have to: getting groceries, going to work, or getting
        some solo exercise!
      </Text>
      <img src={groupNegative} />

      <Text>Who knew your housecat was onto something...</Text>

      <PrimaryButton onClick={() => history.push("/")}>
        Ok, got it!
      </PrimaryButton>
    </Underlay>
  );
};

export { KeepYourDistanceRule, GroupsRule, StayHoneRule };
