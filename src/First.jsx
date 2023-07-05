import PropTypes from "prop-types";

const First = (obj) => {
 
    const passID = obj.myID;

    return ( 
        
        <div className="first">        
            
            {obj.one[passID].map(item => {
                return (
                    
                    <article className="first" key={item.id}>        
                        <div className="first-img">
                            <img src={item.pic} alt="" />
                        </div>
                        <div>
                        <h6 className="one">{item.name}</h6>
                          <a href={item.link} className="one-link" target="blank">{item.link}</a>
                        </div>
                        </article> 
             );
            })}             
        </div>
    
     );
}
First.propTypes = {
    one: PropTypes.object.isRequired,
  } 
export default First;