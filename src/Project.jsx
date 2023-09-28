import PropTypes from "prop-types";
import Demo1 from './Demo1';
import { useState } from "react";
import { FaHtml5, FaBootstrap, FaReact, FaJs } from "react-icons/fa";

const Project = ({lists}) => {

    const[link, setLink] = useState(1);
    const[selectLink, setSelectLink] = useState("Html/Css");

    const setClick = (param) => {

            setLink(param);
    };

    const myIcon = (icon) => {      

        if(icon == "React.js"){
          return <FaReact id="icon" />
        }
        else if(icon == "Html/Css"){
          return <FaHtml5 id="icon"  />
        }

        else if(icon == "Javascript"){
          return <FaJs id="icon"  />
        }
        else if(icon == "Boostrap"){
          return <FaBootstrap id="icon" />
        }
    }

    return ( 
        <>
           <h2 className="param">My-Skill-Set</h2>

        <div className="list">
            {
                lists.map((item) =>{
            return (<article className="project" key={item.id}>  
             <div className="project-img" onClick={()=> setClick(item.id)}>
             <button className={`project-top ${item.work == selectLink ? 'active' : ''}`}
             onClick={()=>setSelectLink(item.work)}
             >{myIcon(item.work)} {item.work} </button>
             
           
              </div> 
             
           </article>);            
           
          })
            }
           
        </div>

        <Demo1 linkClicked = {link}/>
        
        </>
     );

  
}
Project.propTypes = {
    lists: PropTypes.array.isRequired,
  } 
export default Project;


