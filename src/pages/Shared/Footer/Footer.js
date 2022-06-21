import React from 'react';
// import footerBg from '../../../images/footerBG.jpg'
import { GiElectric } from 'react-icons/gi'
import { FiPhoneCall } from 'react-icons/fi'
import { AiOutlineMail } from 'react-icons/ai'
import { GoLocation } from 'react-icons/go'
import { FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa'
import './Footer.css'

const Footer = () => {

    return (
        <footer className='w-full'>
            <div className='footer-top flex flex-wrap  justify-around  mt-5 w-full bg-gradient-to-r from-black to-gray-700 items-center text-white p-10'>
                <div>
                    <div className='flex items-center'>
                        <h1 className='text-2xl font-semibold'>Drone Manufacturing</h1>
                        <h1 className='text-2xl text-primary'><GiElectric /></h1>
                    </div>
                    <div className='flex items-center my-3'>
                        <p className='text-secondary mr-3 '><FiPhoneCall /></p>
                        <div>
                            <p>Call Us :</p>
                            <p>+00 11223344</p>
                        </div>
                    </div>
                    <div className='flex items-center my-3'>
                        <p className='text-secondary mr-3 '><AiOutlineMail /></p>
                        <div>
                            <p>Email Us :</p>
                            <p>electronic-manufacture@yahoo.com</p>
                        </div>
                    </div>
                    <div className='flex items-center my-3'>
                        <p className='text-secondary mr-3 '><GoLocation /></p>
                        <div>
                            <p>Address :</p>
                            <p>88 Mist Street, USA</p>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className='text-2xl font-semibold'>Our Services</h1>
                    <ul className='leading-9'>
                        <li>&#8658; Recycling rejected products</li>
                        <li>&#8658; Eco-friendly products</li>
                    </ul>
                </div>
                <div className='hidden lg:block'>
                    <h1 className='text-2xl font-semibold'>Quick Links</h1>
                    <ul className='leading-9'>
                        <li>&#8658; About Company </li>
                        <li>&#8658; Latest Projects</li>
                        <li>&#8658; Our Mission</li>
                        <li>&#8658; Contact Us</li>
                    </ul>
                </div>
                <div>
                    <h1 className='text-2xl font-semibold'>Follow Us</h1>
                    <ul className='flex flex-wrap justify-around mt-4'>
                        <button className='btn btn-circle text-2xl mr-1 text-white bg-black'><FaFacebook /></button>
                        <button className='btn btn-circle text-2xl mr-1 text-white bg-black'><FaLinkedin /></button>
                        <button className='btn btn-circle text-2xl mr-1 text-white bg-black'><FaTwitter /></button>
                    </ul>
                </div>
            </div>
            <div className='footer-bottom'>
                <p className='p-4 text-white font-semibold  text-center bg-slate-800'>Copyright &copy; 2022. All right reserved by <span>Drone Manufacturing</span></p>
            </div>
        </footer>
    );
};

export default Footer;