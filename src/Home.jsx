import { useState } from "react";
import About from "./About";
import Project from "./Project";
import html from './images/html.png';
import Boostrap from './images/boost.png';
import Javascript from './images/java.png';
import React from './images/react.png';

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHTML5Logo} from "@fortawesome/free-solid-svg-icons";
// import { faBootstrap} from "@fortawesome/free-solid-svg-icons";
// import { faJs} from "@fortawesome/free-solid-svg-icons";
// import { faReact} from "@fortawesome/free-solid-svg-icons";

{/* <FontAwesomeIcon icon={faHTML5Logo} />
<FontAwesomeIcon icon={faBootstrap} />
<FontAwesomeIcon icon={faJs} />
<FontAwesomeIcon icon={faHtml5} />
<FontAwesomeIcon icon={faReact} /> */}


// <FontAwesomeIcon icon="fa-brands fa-html5" style={{color: "#1f2b51",}} />
const Home = () => {

    //about
    const [about, setAbout] = useState(
    {name: 'Oyedokun Taiwo',
    text: "I'm a professional software developer with",
    id: 1  
    });

    //view project
    const [project, setProject] = useState([
    {work: 'Html/Css', images: html,number:'', id: 1},
    {work: 'Boostrap', images: Boostrap, number:'', id: 2},
    {work: 'Javascript', images: Javascript,number:'', id: 3},
    {work: 'React.js', images: React,number:'', id: 4},
    ]);

    return ( 
    <div className="home">
    
    <About info={about}/>
  
    <Project lists={project}/>

  
    </div>
     );
    }
 
export default Home;