import React from 'react'; 
import { FaGithub } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import matt from '../static/tempImages/matt.jpg';
import thomas from '../static/tempImages/thomas.jpg';
import tyler from '../static/tempImages/tyler.jpg';
import yiting from '../static/tempImages/yiting.jpg';


export default function TeamContainer(){
   const mattLinkedIn = 'https://www.linkedin.com/in/mehart/';
   const thomasLinkedIn = 'https://www.linkedin.com/in/thomas-ortiz-52a187166/';
   const tylerLinkedIn = 'https://www.linkedin.com/in/tylersavitsky/';
   const yitingLinkedIn = 'https://www.linkedin.com/in/yiting-xiao/';

return(
    <div id='team_container'>
    <div id='matt_container'>
       <a href={mattLinkedIn}><img className='profile' src={matt}/></a>
       <a href={mattLinkedIn}><p>Matt Hart</p></a>
       <div className='icons'>
       <a href='https://github.com/TechToysAreFun'><FaGithub className='gitHub'/></a> 
       <a href={mattLinkedIn}><BsLinkedin className='linkedIn'/></a>
       </div>
    </div>

    <div id='thomas_container'>
       <a href={thomasLinkedIn}><img className='profile' src={thomas}/></a>
       
       <a href={thomasLinkedIn}><p>Thomas Ortiz</p></a>
       <div className='icons'>
       <a href='https://github.com/thomas444ortiz'><FaGithub className='gitHub'/></a> 
       <a href={thomasLinkedIn}><BsLinkedin className='linkedIn'/></a>
       </div>
    </div>

    <div id='tyler_container'>
     <a href={tylerLinkedIn}><img className='profile' src={tyler}/></a>
     <a href='https://www.linkedin.com/in/tylersavitsky/'><p>Tyler Savitsky</p></a>
       <div className='icons'>
       <a href='https://github.com/booleanmagus'><FaGithub className='gitHub'/></a>
       <a href={tylerLinkedIn}><BsLinkedin className='linkedIn'/></a>
       </div>
    </div>

    <div id='yiting_container'>
    <a href={yitingLinkedIn}><img className='profile' src={yiting}/></a>
    <a href={yitingLinkedIn}><p>Yiting Xiao</p></a>
      <div className='icons'>
      <a href='https://github.com/Yitingx531'><FaGithub className='gitHub'/></a>
      <a href={yitingLinkedIn}><BsLinkedin className='linkedIn'/></a>
      </div>
    </div>
    </div>
)
};