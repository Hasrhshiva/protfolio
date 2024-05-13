import React from 'react';
import './intro.css';
import bg from '../../assets/profile-img.png';
import { Link } from 'react-scroll';
import hire from '../../assets/hireme.png';


const Intro = () => {
  return (
    <div>
      <section id='intro'>
        <div className='introContent'>
            <span className="hello">Hello,</span>
            <span className="introText">I'm <span className="introName"> Harshal H</span> <br/> Web Developer</span>
            <p className="introPara">Empower your business with our custom software solutions.<br/> Our experienced team delivers innovative technology tailored to your needs,<br/> driving growth and enhancing user experiences.</p>
            <Link><button className="btn"><img src={hire} alt="" className='btnImg'/>Hire Me</button></Link>
        </div>
        <img src={bg} alt="profile" className="bg" />
      </section>
    </div>
  )
}

export default Intro
