import { useState } from "react";
import About from "./About";
import Project from "./Project";
import html from './images/html.png';
import Boostrap from './images/boost.png';
import Javascript from './images/java.png';
import React from './images/react.png';

const Home = () => {

    //about
    const [about, setAbout] = useState(
    {name: 'Oyedokun Taiwo',
    text: "I'm a professional software developer with",
    id: 1  
    });

    //view project
    const [project, setProject] = useState([
    {work: 'Html/Css', images: html,number:'one', id: 1},
    {work: 'Boostrap', images: Boostrap, number:'two', id: 2},
    {work: 'Javascript', images: Javascript,number:'three', id: 3},
    {work: 'React.js', images: React,number:'four', id: 4},
    ]);

    return ( 
    <div className="home">
    
    <About info={about}/>
  
    <Project lists={project}/>

    </div>
     );
    }
 
export default Home;