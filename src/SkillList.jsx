import SkillListItem from "./SkillListItem";

export default function SkillList({ skills }) {
    return (
        <ul className="SkillList">
            {skills.map((t, idx) => (
                <SkillListItem skill={t} index={idx} key={idx} />
            ))}
        </ul>
    );
}