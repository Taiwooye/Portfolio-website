import { useState } from "react";
import About from "./About";
import Project from "./Project";

const Home = () => {

    //about
    const [about, setAbout] = useState(
    {name: 'Oyedokun Taiwo',
    text: "I'm a professional software developer with",
    id: 1  
    });

    //view project
    const [project, setProject] = useState([
    {work: 'Html/Css', images: './images/html.png',number:'one', id: 1},
    {work: 'Boostrap', images: './images/boost.png', number:'two', id: 2},
    {work: 'Javascript', images: './images/java.png',number:'three', id: 3},
    {work: 'React.js', images: './images/react.png',number:'four', id: 4},
    ]);

    return ( 
    <div className="home">
    
    <About info={about}/>
  
    <Project lists={project}/>

    </div>
     );
    }
 
export default Home;