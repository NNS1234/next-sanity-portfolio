// components/Skills.tsx
// components/SkillsSection.tsx
"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';


const Skills: React.FC = () => {
  const skills = [
    'Java', 'JavaScript', 'React', 'Next', 'TypeScript',
    'Tailwind', 'Node', 'MySQL', 'PostgreSQL', 'AWS', 'Jenkins', 'Docker'
  ];

  const [currentSkill, setCurrentSkill] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkill((prevSkill) => (prevSkill + 1) % skills.length);
    }, 1400); // Adjust the interval duration as needed (in milliseconds)

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="mt-12 py-8">
      <div className="container mx-auto">
        <h2 className="mt-2 mb-14 font-bold text-gray-700 text-3xl">Skills & Tools</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`text-center ${currentSkill === index ? 'animate-bounce' : ''}`}
            >
              <Image
                src={`/icons/${skill}.svg`}
                alt={skill}
                width={96}
                height={96}
                className="w-20 h-20 mx-auto mb-2"
              />
              <p className="text-lg font-semibold">{skill}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

