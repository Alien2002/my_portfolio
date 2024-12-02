import React from 'react'
import SkillsLanguage from './SkillsLanguage'
import SkillsItem from './SkillsItem'

const Skills = () => {
  return (
  <div className='pt-[4rem] md:pt-[8rem] pb-[5rem] bg-[#09101a]'>
    <h1 className='heading'>
        Education & <span className='text-yellow-400'>Skills</span>
    </h1>
    <div className='w-[80%] mx-auto pt-[4rem] md:pt-[8rem] grid grid-cols-1 gap-[2rem] items-center'>
        <div>
            <div data-aos="flip-right" data-aos-duration="1500">
                {(() => {
                    const skillsObject = {
                        "Next Js Developer": "Started programming with Next Js version 13.0.7 and still learning more as the newer version are being released.",
                        "Typescript Programmer": "Started learning Typescript and still learning more about it."
                    }

                    return Object.entries(skillsObject).map(([skill, description]) => (
                        <SkillsItem key={skill} title={skill} year='2024' description={description} />
                    ))
                })()}
            </div>
            <div data-aos="fade-up-right">
            {(() => {
                const skillsObject = {
                    "HTML": "90%",
                    "CSS": "80%",
                    "JavaScript": "90%",
                    "React": "80%",
                    "Typescript": "100%"
                };

                return Object.entries(skillsObject).map(([skill, level]) => (
                    <SkillsLanguage key={skill} skill={skill} level={level} />
                ));
            })()}
            </div>
        </div>
    </div>
</div>
  )
}

export default Skills