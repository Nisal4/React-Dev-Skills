import './style.css';
import SkillList from './SkillList';
import { useState } from "react";

export default function App() {
  const [skills, setSkills] = useState([
    "Skill List Items",
    "Skill List Items",
    "Skill List Items"
  ]);
  
  return (
    <div className='App'>
      <h1>React Dev Skills</h1>
      <SkillList skills={skills} />

      <hr />
    </div>
  );
}
