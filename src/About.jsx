import PropTypes from 'prop-types';
import Miles from './images/Miles.png';
import {Link } from 'react-router-dom';

const About = ({info}) => {   
  
    return ( 
        <div className="about">      
            
        <div className="info" key={info.id}>
            <h1>My name is <br /> { info.name}</h1>
            <h3>{info.text} <br />  more than 3 years experience</h3>

            < Link to="/contact"> <button className='hire-me'>Hire me</button>
           </Link> 

            <div className='qualification'>
            <button className='html'>Html/Css</button>
              
          < button className='boostrap'>Boostrap</button>
                <br />
                <button className='javascript'>Javscript</button>
                <button className='react'>React.js</button>
                <br />
                <button style={{backgroundColor:"gray",
                border:'none',
                width:'190px',
                padding:'13px',
                marginTop:'5px',
                borderRadius:'5px',
                fontSize:'17px'
              }}>Nextjs</button>
            </div>
        
        </div>
        <img className='image' src={Miles} alt="" />

        </div>
     );
}

About.propTypes = {
    info: PropTypes.object.isRequired,
   
  } 
 
export default About;