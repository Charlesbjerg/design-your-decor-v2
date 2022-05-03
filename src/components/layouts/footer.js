import React from 'react';
import Typewriter from '../cms/Typewriter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'

const Footer = () => {
    return (
        <footer className='bg-black text-white py-10'>
            <div className='container grid grid-cols-2 gap-4'>
                <div>
                    {/* <Typewriter /> */}
                </div>
                <div className="text-right">
                    <div className="flex justify-end mb-4">
                        <a href="https://www.instagram.com/designyourdecor.uk/" title="Find us on Instagram" target="_blank" className="social-icon mr-4">
                            <FontAwesomeIcon icon={brands('instagram')} />
                        </a>
                        <a href="https://www.facebook.com/designyourdecor.uk/" title="Find us on Facebook" target="_blank" className="social-icon">
                            <FontAwesomeIcon icon={brands('facebook-f')} />
                        </a>
                    </div>
                    <p>Design Your Decor, Grosvenor House, 3 Chapel Street, Congleton, Cheshire, CW12 4AB</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;