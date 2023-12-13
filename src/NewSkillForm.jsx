import { useState } from "react";
import "./NewSkillForm.css";

export default function NewSkillForm({ addSkill }) {
    const [newSkill, setNewSkill] = useState("");
    const [newLevel, setNewLevel] = useState(3);

    function handleAddSkill(e) {
        e.preventDefault();
        addSkill({ name: newSkill, level: newLevel });
        setNewSkill("");
        setNewLevel(3);
    }


    return (
        <div>
            <form className="NewSkillForm" onSubmit={handleAddSkill}>
                <label>Skill</label>
                <input 
                value={newSkill}
                type="text" 
                onChange={(e) => setNewSkill(e.target.value)}
                required
                pattern=".{3,}"
                />
                <label>Level</label>
                <select>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                </select>
                <button type="submit">ADD SKILL</button>
            </form>
        </div>
    );
}