import {React,useState} from 'react';
import './Contact.scss';

const Contact = () => {
const [message,setMessage]=useState(false)



  const handleSubmit=(e)=>{
e.preventDefault();
setMessage(true);
  }
  return (
    <div className='contact' id='Contact'>
      <div className="container">
        <div className="lefty">
          <img
            src="https://raw.githubusercontent.com/safak/youtube/da700015c8a88050fad7b961e99a7039638ab3b2/public/assets/shake.svg"
            alt="Contact Illustration"
            className="contact-image"
          />
        </div>
        <div className="righty">
          <h2 className='contact-title'>Contact</h2>
          <form className="contact-form" onSubmit={handleSubmit}>
            <input type="text" placeholder='Email' className="input-field" />
            <textarea placeholder='Message' className="textarea-field"></textarea>
            <button type='submit' className="submit-button">Send</button>
            {message && <span className='ok' > Thanks ! I will reply asap.</span>}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
