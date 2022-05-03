import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Services = () => {
    return (
        <div className="bg-black text-white py-20 h-screen">
            <div className="container flex flex-col items-center">
                <div class="text-center mb-10">
                    <h2>Our Services</h2>
                    <p>This is the shit we offer</p>
                </div>
                <div className="grid grid-cols-3 gap-4 w-2/3 mx-auto">
                    <article class="service-card">
                        <h3 className='mb-0'>Service one</h3>
                        <p className="text-2xl mb-2">£100</p>
                        <p className="mb-2">Description</p>
                        <ul className="list-none mb-4">
                            <li>
                                <FontAwesomeIcon icon={solid('check')} />
                                <span className="ml-2">Feature</span>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={solid('check')} />
                                <span className="ml-2">Feature</span>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={solid('check')} />
                                <span className="ml-2">Feature</span>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={solid('check')} />
                                <span className="ml-2">Feature</span>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={solid('check')} />
                                <span className="ml-2">Feature</span>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={solid('check')} />
                                <span className="ml-2">Feature</span>
                            </li>
                        </ul>
                        <a href="#" className="service-card-btn">
                            Purchase Service
                            <FontAwesomeIcon icon={solid('bag-shopping')} className="ml-2" />
                        </a>
                    </article>
                    <article class="service-card service-card--accent">
                        <h3 className='mb-0'>Service one</h3>
                        <p className="text-2xl mb-2">£100</p>
                        <p className="mb-2">Description</p>
                        <ul className="list-none mb-4">
                            <li>
                                <FontAwesomeIcon icon={solid('check')} />
                                <span className="ml-2">Feature</span>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={solid('check')} />
                                <span className="ml-2">Feature</span>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={solid('check')} />
                                <span className="ml-2">Feature</span>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={solid('check')} />
                                <span className="ml-2">Feature</span>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={solid('check')} />
                                <span className="ml-2">Feature</span>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={solid('check')} />
                                <span className="ml-2">Feature</span>
                            </li>
                        </ul>
                        <a href="#" className="service-card-btn">
                            Purchase Service
                            <FontAwesomeIcon icon={solid('bag-shopping')} className="ml-2" />
                        </a>
                    </article>
                    <article class="service-card">
                        <h3 className='mb-0'>Service one</h3>
                        <p className="text-2xl mb-2">£100</p>
                        <p className="mb-2">Description</p>
                        <ul className="list-none mb-4">
                            <li>
                                <FontAwesomeIcon icon={solid('check')} />
                                <span className="ml-2">Feature</span>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={solid('check')} />
                                <span className="ml-2">Feature</span>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={solid('check')} />
                                <span className="ml-2">Feature</span>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={solid('check')} />
                                <span className="ml-2">Feature</span>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={solid('check')} />
                                <span className="ml-2">Feature</span>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={solid('check')} />
                                <span className="ml-2">Feature</span>
                            </li>
                        </ul>
                        <a href="#" className="service-card-btn">
                            Purchase Service
                            <FontAwesomeIcon icon={solid('bag-shopping')} className="ml-2" />
                        </a>
                    </article>
                </div>
            </div>
        </div>
    );
};

export default Services;