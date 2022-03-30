import React from 'react';
import { BsFacebook, BsLinkedin } from 'react-icons/bs';
import {Link, Router} from 'react-router-dom'


const SocialMedia = () => {
  return (
    <div className='app__social'>
        <a
          href="https://www.facebook.com/yitav.gilad"
          target='_blank'
          rel="noopener"
          aria-label='Facebook'
        >
            <BsFacebook />
        </a>
        <a
         href="https://www.linkedin.com/in/yitav-gil-ad-286809159/"
         target='_blank'
         rel="noopener"
         aria-label='Facebook'
        >
            <BsLinkedin />
        </a>
    </div>
  )
}

export default SocialMedia