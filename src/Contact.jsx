import { faEnvelope} from "@fortawesome/free-solid-svg-icons";
import { faPhone} from "@fortawesome/free-solid-svg-icons";
import { faComment} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import  { useState } from 'react';

const Contact = () => {
 
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: '',
    });
  
    const handleInputChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Perform form submission logic here, such as sending data to a server
  
      // Reset form after submission
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    };
  
    return (
    <div className="email">
           <div className="contact-text">
            <h5>EXPERT IN FIELD</h5>
            <h3>WHERE I AM? <br /> LET'S FIND OUT!</h3>
          <p>
           Thank you for your interest in my web development services. 
           please dont hesitate to get in touch with me,
            If you will like to make inquiries, or would like to discuss a
             potential project. 
          I would be glad to hear from you and assist,or work with you if we agree on a term .
         Feel free to reach out by filling out the contact form on this page. Simply provide your name, email address, 
          and a brief message detailing the nature of your inquiry. I will do my best to respond promptly 
          and provide the information needed.
           Alternatively, you can also connect with me through the provided email address or phone number below. Whether you have
         a specific project in mind or you're an employer,I'm always open to new opportunities and collaborations.
          I look forward to hearing from you and discussing how we can bring new web development ideas to life. 
          Lets create something great and essential together.</p>

          <h4><a href="mailto:Oyedokuntaiwo96@gmail.com"><FontAwesomeIcon icon={faEnvelope} className="font" />Oyedokuntaiwo96@gmail.com</a></h4>
        <h4><a href="tel:7065868215"><FontAwesomeIcon icon={faPhone} className="font" />  (234) 706-586-8215</a></h4>
      <h4> <a href="https://www.linkedin.com/in/oyedokun-taiwo-20670a1b9/"><FontAwesomeIcon icon={faComment} className="font"/>LinkedIn</a></h4>
        </div>



       <div className="contact">
        <h3>DROP ME A MESSAGE</h3>
        
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Enter your name"
            required
          />
    
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Enter your email"
            required
          />
    
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Enter your message"
            rows="5"
            required></textarea>
          <button>CONTACT ME </button>
          {/* <input type="submit" value="Submit" /> */}
        </form>
        </div>
   
        </div>
    );
  };

   
export default Contact;
    // return ( 
    //     <div className="contact">
    //   <a href="https://mail.google.com/mail/u/0/#all"><FontAwesomeIcon icon={faEnvelope} /> Email Address</a>
    //     <p><FontAwesomeIcon icon={faPhone} />  (234) 706-586-8215</p>
    //     <a href="https://www.linkedin.com/in/oyedokun-taiwo-20670a1b9/">LinkedIn</a>
    //     </div>
    //  );