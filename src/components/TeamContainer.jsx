import React from 'react'; 
import { FaGithub } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";

export default function TeamContainer(){
return(
    <div id='team_container'>
    <div id='matt_container'>
       <a href='https://www.linkedin.com/in/mehart/'><img className='profile' src='https://media.licdn.com/dms/image/C5603AQE1hlSGyYl2Sw/profile-displayphoto-shrink_400_400/0/1557572457531?e=1713398400&v=beta&t=diw6hbIW_PBs55Gwl-ykOTSay4aVPGy2dAl2tNEjhd8'/></a>
       <a href='https://www.linkedin.com/in/mehart/'><p>Matt Hart</p></a>
       <div className='icons'>
       <a href='https://github.com/TechToysAreFun'><FaGithub className='gitHub'/></a> 
       <a href='https://www.linkedin.com/in/mehart/'><BsLinkedin className='linkedIn'/></a>
       </div>
    </div>

    <div id='thomas_container'>
       <a href='https://www.linkedin.com/in/thomas-ortiz-52a187166/'><img className='profile' src='https://media.licdn.com/dms/image/C5603AQFSDCIjUMIxLg/profile-displayphoto-shrink_400_400/0/1536618995004?e=1713398400&v=beta&t=5out64AaHHlDG0rccj7HmsB2OM9hVkV5JyGp2v6avtY'/></a>
       
       <a href='https://www.linkedin.com/in/thomas-ortiz-52a187166/'><p>Thomas Ortiz</p></a>
       <div className='icons'>
       <a href='https://github.com/thomas444ortiz'><FaGithub className='gitHub'/></a> 
       <a href='https://www.linkedin.com/in/thomas-ortiz-52a187166/'><BsLinkedin className='linkedIn'/></a>
       </div>
    </div>

    <div id='tyler_container'>
     <a href='https://www.linkedin.com/in/tylersavitsky/'><img className='profile' src='https://media.licdn.com/dms/image/C5603AQGLNtdGBUKLcg/profile-displayphoto-shrink_800_800/0/1609977287739?e=1713398400&v=beta&t=bJN0FKIUU3fykB2u9PN-PGfNmDKOUalrFfJVaL-StPc'/></a>
     <a href='https://www.linkedin.com/in/tylersavitsky/'><p>Tyler Savitsky</p></a>
       <div className='icons'>
       <a href='https://github.com/booleanmagus'><FaGithub className='gitHub'/></a>
       <a href='https://www.linkedin.com/in/tylersavitsky/'><BsLinkedin className='linkedIn'/></a>
       </div>
    </div>

    <div id='yiting_container'>
    <a href='https://www.linkedin.com/in/yiting-xiao/'><img className='profile' src='https://media.licdn.com/dms/image/D4D03AQFkbEQ_KgX8nw/profile-displayphoto-shrink_400_400/0/1683758962463?e=1713398400&v=beta&t=jXWGrDoKIuSTM5vuIsK1XnN5_iusDy7m0mfOQsN6VO8'/></a>
    <a href='https://www.linkedin.com/in/yiting-xiao/'><p>Yiting Xiao</p></a>
      <div className='icons'>
      <a href='https://github.com/Yitingx531'><FaGithub className='gitHub'/></a>
      <a href='https://www.linkedin.com/in/yiting-xiao/'><BsLinkedin className='linkedIn'/></a>
      </div>
    </div>
    </div>
)
};