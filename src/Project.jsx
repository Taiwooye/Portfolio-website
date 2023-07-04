import PropTypes from "prop-types";
import Demo1 from './Demo1';
import { useState } from "react";

const Project = ({lists}) => {

    const[link, setLink] = useState(1);

    const setClick = (param) => {

            setLink(param);
    };
    return ( 
        <>
           <h2>Latest Projects</h2>

        <div className="list">

            {
                lists.map((item) =>{

            return (<article className="project" key={item.id}>
               
             <div className="project-img" onClick={()=> setClick(item.id)}>
               <img src={`src/${item.images}` } alt="" />
             <div>
               <h6 className="project-top">{item.work}</h6>
               <p className="project-info">{item.number}</p>
              </div>            
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


