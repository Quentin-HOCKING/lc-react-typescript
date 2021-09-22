
import React from "react";
import Skill, { SkillProps } from "./Skill";
import { Card, List } from "../styles/elements";
import blank_profile from "../blank-profile-picture-female.png";

export type WilderProps = {
  _id?: string
  city: string
  name: string
  skills: SkillProps[]
}

function Wilder({ city, name, skills }:WilderProps):JSX.Element {
  return (
    <Card>
      <img src={blank_profile} alt={`${name} Profile`} />
      <h3>{name}</h3>
      <h4>City</h4>
      <p>{city}</p>
      <h4>Wild Skills</h4>
      <List>
        {skills.map((skill) => (
          <Skill key={skill._id} title={skill.title} votes={skill.votes} />
        ))}
      </List>
    </Card>
  );
} 
export default Wilder;