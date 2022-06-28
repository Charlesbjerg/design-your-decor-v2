import React from 'react';

function Hero({blok}) {
    return (
        <div className='grid grid-cols-2'>
            <section>
                <h1>{blok.title}</h1>
                <p>{blok.content}</p>
                <a href={blok.call_to_action.url}>{blok.call_to_action_text}</a>
            </section>
            <figure className='grid grid-cols-4'>

            </figure>
        </div>
    );
}

export default Hero;