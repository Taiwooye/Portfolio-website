//import { faShieldCheck } from "@fortawesome/free-brands-svg-icons";
import { faUserCheck} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



const Skills = () => {
    
    return ( 
        <>
         <h2 className="skill-h2">My Skills</h2>
         <div className="skill">
           <div className="row1">
                <h3> <FontAwesomeIcon icon={faUserCheck}  className="icon"/>HTML</h3>
                <p>I have a solid skill set in HTML (Hypertext Markup Language), 
                        which is the backbone of any web page. I have trained and dedicated to writing clean, readable,
                          HTML code to structure web content to the best effecient.
                         The importance of using the right tags, attributes, and elements to ensure proper document accessibility has always been my understanding and easy knowledge.
                          With my skills in HTML languages,
                         I can create well-structured and accessible web pages that provide a solid foundation for building specific and interactive websites.</p>

                         <h3><FontAwesomeIcon icon={faUserCheck}className="icon" />JAVASCRIPT</h3>
                         <p>As a well-trained JavaScript developer, I can create an interactive and well-functionaling web pages.
                         I have a trained and understood JavaScript concepts and syntax, i also am proficient in using JavaScript frameworks and libraries to develop dynamic web applications.
                          with in knowledge in JavaScript, I can manipulate,event handling and properly use APIs to enhance the functionality and user experience the Document Object Model (DOM)
                           to create exact-designed and responsive user interfaces.
                         </p>
           </div>
           <div className="row2">
                
           <h3 ><FontAwesomeIcon icon={faUserCheck} className="icon"/>BOOSTRAP</h3>
                <p>My knowledge in Bootstrap allows me to create a responsive and visually appealing websites with ease.
                 I am skilled at ensuring Bootstraps preffered grid system, pre-designed components,
                 and CSS styles to create consistent layouts that adapt seamlessly to different screen sizes and devices.
                By utilizing Bootstraps responsive classes and utility components, i cna build accessible, user-friendly and responsive pages, from desktops to smartphones.
                  This skill enhances the user experience and save time by offering a smart framework for rapid prototyping and building modern, professional interfaces.</p>
      
           <h3><FontAwesomeIcon icon={faUserCheck} className="icon" />REACT.JS</h3>
                <p>I learnt advanced skills in React, a popular JavaScript library for building user interfaces. With React,
                  I can create complex and reusable UI components, implementing the concept of reusability to build scalable and maintainable applications.
                 I have a strong understanding of Reacts core concepts, such as virtual DOM, component lifecycle,context and hooks.
                 I am proficient in using React hooks to manage state and side effects efficiently.  
                 my knowledge of React allows me to effectively work with other developers and contribute to projects.</p>
                       
           </div>
         </div>
         
        </>
           
     );
}

export default Skills;