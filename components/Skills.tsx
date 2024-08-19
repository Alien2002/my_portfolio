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
                <SkillsItem title="Next Js Developer" year="2024" />
                <SkillsItem title="Node Js Developer" year="2024" />
            </div>
            <div data-aos="fade-up-right">
                <SkillsLanguage 
                    skill1="React Js"
                    skill2="Next Js"
                    skill3="Typescript"
                    level1="w-[85%]"
                    level2="w-[80%]"
                    level3="w-[90%]" 
                />
            </div>
        </div>
    </div>
</div>
  )
}

export default Skills