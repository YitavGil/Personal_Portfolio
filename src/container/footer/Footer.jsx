import React, {useState} from 'react';
import './footer.scss';

import { images } from '../../constants';
import { AppWrapp, MotionWrap } from '../../wrapper';
import { client } from '../../client';

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false)

  const { username, email, message } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({...formData, [name]: value })
  }

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: formData.username,
      email: formData.email,
      message: formData.message,
    };

    client.create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
  };


  return (
    <>
      <h2 className='head-text'>Lets Have A Chat</h2>

      <div className='app__footer-cards'>
        <div className='app__footer-card'>
            <img src={images.email} alt='email' />
            <a 
            href='mailto:yitavgil@gmail.com' 
            className='p-text'>yitavgil@gmail.com</a>
        </div>
        <div className='app__footer-card'>
            <img src={images.mobile} alt='mobile' />
            <a 
            href='tel: +972528118688' 
            className='p-text'>+972-528118688</a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input className="p-text" type="text" placeholder="Your Name" name="username" value={username} onChange={handleChange} />
          </div>
          <div className="app__flex">
            <input className="p-text" type="email" placeholder="Your Email" name="email" value={email} onChange={handleChange} />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChange}
            />
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>{!loading ? 'Send Message' : 'Sending...'}</button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">
            Thank you for getting in touch!
          </h3>
        </div>
      )}
    </>
  )
}

export default AppWrapp(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__primarybg',
);