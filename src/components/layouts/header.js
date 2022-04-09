import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';

export const query = graphql`
  query {
    fileName: file(relativePath: { eq: "images/dyd-logo.png" }) {
      childImageSharp {
        fluid(maxWidth: 400, maxHeight: 250) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const Header = () => {
    return (
        <header className='w-full sticky top-0 left-0 z-10 bg-white'>
            <div className='container flex items-center justify-between'>
                <Link to='/'>
                    <GatsbyImage
                </Link>
                <nav>
                    <Link to='/how-it-works/' className='nav-link'>How It Works</Link>
                    {/* Add Services Dropdown */}
                    <Link to='/products/how-to-look-after-your-mental-with-your-interior/' className='nav-link'>Workshops</Link>
                    <Link to='/notebook/' className='nav-link'>Notebook</Link>
                    <Link to='/about-us/' className='nav-link'>About Us</Link>
                    <Link to='/frequently-asked-questions/' className='nav-link'>FAQ's</Link>
                    <Link to='/our-projects/' className='nav-link'>Projects</Link>
                    <Link to='/get-in-touch/' className='nav-link'>Get In Touch</Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;