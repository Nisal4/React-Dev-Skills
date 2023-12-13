import './SkillListItem.css';

export default function SkillListItem({ name, level }) {
    return (
        <div>
            <li className='SkillListItem'>
                <span>{name}</span>
                <span className='level'>LEVEL {level}</span>
            </li>
        </div>
    );
}