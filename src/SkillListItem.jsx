import './SkillListItem.css';

export default function SkillListItem({ skill, index }) {
    return (
        <li className='SkillListItem'>
            {skill}
        </li>
    );
}