import React from 'react';
import './works.css';
import Protfolio4 from '../../assets/logo.png';




const Works = () => {
  return (
    <section id='works'>
       <h2 className='worksTitle'>My Protfolio</h2>
       <span className='worksDesc'>I take My deacyns sum if calcilaye do some will cat so i can do somthing ho dark seen elegance of the Laravel framework. With a focus on efficiency, scalability, and clean code, I deliver tailored solutions that meet the unique requirements of each project.</span>
       <div className='worksImgs'>
           <img src={Protfolio4} className='worksImg' alt="" />
           <img src={Protfolio4} className='worksImg' alt="" />
           <img src={Protfolio4} className='worksImg' alt="" />
           <img src={Protfolio4} className='worksImg' alt="" />
           <img src={Protfolio4} className='worksImg' alt="" />
           <img src={Protfolio4} className='worksImg' alt="" />
       </div>
       <button className='workBtn'>See more</button>
    </section>
  )
}

export default Works