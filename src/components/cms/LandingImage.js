import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const LandingImage = () => {
    return (
        <section className='relative w-full h-full'>
            <figure>
                <StaticImage
                src="../../../content/images/dyd-landing-image.jpg"
                alt="Decorated Lounge"
                placeholder="blurred"
                imgClassName='img-center'
                />
            </figure>
            <div className='absolute top-0 left-0 z-10 w-full h-full flex items-center justify-center'>
                <div className='p-12 bg-white text-center max-w-3xl'>
                    <h1>Welcome to Design Your Decor</h1>
                    <p>Professional and affordable interior design inspired by you for you. The easiest way to create a home that reflects your style.</p>
                </div>
            </div>
        </section>
    );
}

export default LandingImage;