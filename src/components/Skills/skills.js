import React from 'react';
import './skills.css';
import Laravel from '../../assets/laravel.svg';
// import React from '../../assets';

const Skills = () => {
  return (
    <section id="skills">
        <span className='skillTitle'>What I Do</span>
        <span className='skilldesc'>As a Laravel developer, I specialize in crafting robust web applications with the power and elegance of the Laravel framework. With a focus on efficiency, scalability, and clean code, I deliver tailored solutions that meet the unique requirements of each project. From custom APIs to dynamic web applications, I leverage Laravel's flexibility to bring your ideas to life effectively and efficiently</span>
        <div className='skillBars'>
            <div className='skillBar'>
                <img src={Laravel} className='skillBarImg' alt=""/>
                <div className='skillBarText'>
                    <h2>UI/UX Design</h2>
                    <p>This is demo content, own write your content</p>
                </div>
            </div>
            <div className='skillBar'>
                <img src={Laravel} className='skillBarImg' alt=""/>
                <div className='skillBarText'>
                    <h2>UI/UX Design</h2>
                    <p>This is demo content, own write your content</p>
                </div>
            </div>
            <div className='skillBar'>
                <img src={Laravel} className='skillBarImg' alt=""/>
                <div className='skillBarText'>
                    <h2>UI/UX Design</h2>
                    <p>This is demo content, own write your content</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills