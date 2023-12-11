import { useState } from "react";
import "./NewSkillForm.css";

export default function NewSkillForm({ addSkill }) {
    const [newSkill, setNewSkill] = useState("");

    function handleAddSkill(e) {
        e.preventDefault();
        addSkill(newSkill);
        setNewSkill("");
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
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <br />
                <button type="submit">ADD SKILL</button>
            </form>
        </div>
    );
}