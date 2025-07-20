import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const skills = [
  { name: 'HTML', level: 'advanced', color: '#E44D26' },
  { name: 'CSS', level: 'advanced', color: '#264DE4' },
  { name: 'JavaScript', level: 'advanced', color: '#F0DB4F' },
  { name: 'TypeScript', level: 'intermediate', color: '#3178C6' },
  { name: 'Angular', level: 'advanced', color: '#DD0031' },
  { name: 'React', level: 'beginner', color: '#61DAFB' },
  { name: 'Tailwind CSS', level: 'intermediate', color: '#06B6D4' },
  { name: 'Responsive Design', level: 'advanced', color: '#0f766e' },
  { name: 'REST APIs', level: 'intermediate', color: '#4B5563' },
  { name: 'Git & GitHub', level: 'advanced', color: '#F1502F' },
];

function App() {
  return (
    <div className='card'>
      <Avatar image="/Yousef.JPG" />
      <div className='data'>
        <Intro description="I'm a frontend developer specialized in Angular. I'm currently learning React to expand my skills and explore different frontend technologies." />
        <SkillList skills={skills} />
      </div>
    </div>
  );
}

function Avatar(props) {
  return <img className='avatar' src={props.image} alt='Yousef Avatar' />
}

function Intro(props) {
  return (
    <p>{props.description}</p>
  );
}

function SkillList({ skills }) {
  return (
    <ul className='skill-list'>
      {skills.map((skill) => {
        return <Skill bgColor={skill.color} name={skill.name} level={skill.level} key={skill.name} />
      })}
    </ul>
  );
}

function Skill(props) {
  return (
    <li className='skill' style={{ backgroundColor: props.bgColor }}>{props.name}
      <span>
        {props.level === 'advanced' && '💪🏻'}
        {props.level === 'intermediate' && '👍🏻'}
        {props.level === 'beginner' && '👶🏻'}
      </span></li>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);