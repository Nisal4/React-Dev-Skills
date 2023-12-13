import SkillListItem from "./SkillListItem";
import "./SkillList.css";

export default function SkillList({ skills }) {
    return (
        <div className="SkillList">
            <ul>
                {skills.map((skill, idx) => (
                    <SkillListItem key={idx} name={skill.name} level={skill.level} />
                ))}
            </ul>
        </div>
    );
}