import './style.css';
import SkillList from './SkillList';
import { useState } from "react";
import NewSkillForm from './NewSkillForm';

export default function App() {
  const [skills, setSkills] = useState([
    "Skill List Items",
    "Skill List Items",
    "Skill List Items"
  ]);
  
  function addSkill(skill) {
    setSkills([...skills, skill]);
  }

  return (
    <div className='App'>
      <h1>React Dev Skills</h1>
      <SkillList skills={skills} />

      <hr />
    <NewSkillForm addSkill={addSkill} />
    </div>
  );
}
