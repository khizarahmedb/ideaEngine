"use client";
import React, { useState } from 'react';
import './style.css';
import Image from 'next/image';
import logo from '../../../public/assets/logo.svg';
import profile from '../../../public/assets/profile.png';
import menuicon from '../../../public/assets/menu-icon.svg';
import { motion } from 'framer-motion';
import Script from "next/script";

export default function Header() {
  const [headerOpen, setHeaderOpen] = useState(false);

  return (
    <>
      <header className='header w-full md:mt-2 sm:mt-2 engine-header mb-16'>
        <div className='container'>
          <div className='flex justify-between items-center'>
            <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className='logo sm:w-40 lg:w-auto'>
              <Image src={logo} alt="Logo" loading="lazy" />
            </motion.div>
            <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
             className='headerDefault headerMenu py-2 xl:py-5 xl:px-16 md:px-6 sm:px-3'>
              <ul className='flex text-white xl:gap-12 md:gap-3 lg:gap-6 gap-4'>
              <li><a href="https://drive.google.com/file/d/1RIWTy-9n44FQrPax0Ff27quyrml26uKk/view?usp=sharing" className='menu-links uppercase'>White paper</a></li>
              <li><a href="https://drive.google.com/file/d/1ZSMbAvM8ulRg9-saG0uZ-cZ8z44dsjvj/view" className='menu-links uppercase'>VISUAL NOVEL</a></li>
              <li><a href="#" className='menu-links uppercase disabled-link'>INITIAL DEMO</a></li>
              </ul>
            </motion.div>
            {headerOpen &&
              <div className='headerResponsive headerMenu py-2 xl:px-16  md:px-6 sm:px-3'>
                <ul className='flex text-white xl:gap-12 md:gap-3 lg:gap-6 gap-4'>
                  <li>
                    <a href="https://drive.google.com/file/d/1RIWTy-9n44FQrPax0Ff27quyrml26uKk/view?usp=sharing" className='menu-links uppercase'>White-paper</a>
                  </li>
                  <li>
                    <a href="https://drive.google.com/file/d/1ZSMbAvM8ulRg9-saG0uZ-cZ8z44dsjvj/view" className='menu-links uppercase'>VISUAL NOVEL</a>
                  </li>
                  <li>
                    <a href="#" className='menu-links uppercase disabled-link'>INITIAL DEMO</a>
                  </li>
                </ul>
              </div>
            }
            <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}

               className='headerbtn-box flex items-center lg:gap-3 md:gap-1'>
              <div className='left-line h-4 w-0.5 bg-black'></div>
              <div className='header-btn py-1.5 lg:py-2 px-3 xl:py-3.5 lg:px-4 md:px-2 text-white Oxanium '>
              <a href="#" className='font-bold disabled-btn'>Connect Wallet</a>
            </div>
              <div className='right-line h-4 w-0.5'></div>
              <div className='profile-img hidden pr-2'>
                <Image src={profile} alt="Profile" loading="lazy" />
              </div>
              <input type='checkbox' id='check'></input>
              <label htmlFor="check" className='checkbtn block sm:hidden pl-4'>
                <div className='menu-icon pr-3' onClick={() => setHeaderOpen(!headerOpen)}>
                  <Image src={menuicon} alt="Menu Icon" loading="lazy" />
                </div>
              </label>
            </motion.div>
          </div>
        </div>
      </header>

            {/* <footer className='w-full relative'>
    <div className='footer-top-line w-full'>
    <Image className='w-full' src={footerline} /> 
    </div>
      <div className='footer-content flex items-center justify-around my-14 md:my-24 flex-col gap-8 md:flex-row'>
        <div>
        <ul className='flex footer-list xl:gap-12 md:gap-4 lg:gap-6'>
        <li><a href="#" className='xs uppercase footer-gray-text'>White-paper</a></li>
        <li><a href="#" className='xs uppercase footer-gray-text'>VISUAL NOVEL</a></li>
        <li><a href="#" className='xs uppercase footer-gray-text'>INITIAL DEMO</a></li>
        </ul>
        </div>
        <div className='flex items-center gap-6'>
        <a href="#" className='follow-us uppercase text-white'>Follow us</a>
        <a href="#"><Image className='footer-social-img' src={facebook} /></a>
        <a href="#"><Image className='footer-social-img' src={cam} /></a>
        <a href="#"><Image className='footer-social-img' src={linkedin} /></a>
        </div>
        <div><div className='footer-btn py-2 lg:px-4 md:px-2 text-white'><button className='flex'><a href="#" className='footer-btn-text'>Connect Wallet</a></button></div>
        </div>
      </div>
      <div className='footer-copty-text py-1'>
        <p>© Copyright © 2024 Incentives  Incentives - AI Automations and blockchain sales@idea-engine.ai</p>
      </div>
   </footer> */}
{/* Google tag (gtag.js) */}
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-L081D7QTKT');
  `}
</Script>

<Script id="twitter-tracking" strategy="afterInteractive">
  {`
    !function(e,t,n,s,u,a){e.twq||(s=e.twq=function(){s.exe?s.exe.apply(s,arguments):s.queue.push(arguments);
    },s.version='1.1',s.queue=[],u=t.createElement(n),u.async=!0,u.src='https://static.ads-twitter.com/uwt.js',
    a=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a))}(window,document,'script');
    twq('config','omklf');
  `}
</Script>
    </>
  );
}
