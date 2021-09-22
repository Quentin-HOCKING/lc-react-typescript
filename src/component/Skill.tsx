import React from "react";


export type SkillProps ={
    _id?: string
    title: string
    votes: number
}
function Skill({title, votes}:SkillProps):JSX.Element {
  return (
    <li>
      {title}
      <span className="votes">{votes}</span>
    </li>
  );
}

export default Skill;
