import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

const ImageCard = ({title, content, image, link, linkText}) => {
    return (
        <article className="relative">
            <figure>
                <StaticImage
                // src={`../../../content/images/${image}`}
                src={`../../../content/images/kitchen.jpg`}
                alt={title}
                placeholder="blurred"
                imgClassName='img-center'
                />
            </figure>
            <div className="absolute top-0 left-0 z-10 w-full h-full p-8 flex flex-col items-start justify-end text-white bg-black/[0.6]">
                <h3>{title}</h3>
                <p className='mb-4 font-normal'>{content}</p>
                <Link to={link} className="btn-transparent">{linkText}</Link>
            </div>
        </article>
    );
};

export default ImageCard;