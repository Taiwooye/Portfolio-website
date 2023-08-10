import First from "./First";
import PropTypes from "prop-types";
import glass from './images/glass.png';
import phone from './images/phone.png';
import respon from './images/respon.png';
import sign from './images/sign-in.png';
import nft from './images/nft.png';
import foodie from './images/foodie.png';
import movie from './images/movie.png';
import cart from './images/cart.png';
import quote from './images/quote.png';
import phonebook from './images/phonebook.png';
import hotel from './images/hotel.png';
import amazon from './images/amazon.png';
import portfolio from './images/portfolio.png'



const Demo1 = ({linkClicked}) => {

        const Title = {
            1 : "HTML/CSS",
            2 : "BOOTSTRAP",
            3 : "JAVASCRIPT",
            4 : "REACT",
        };

        const obj = {
            1: [
                // {  name: 'Qr-Code', pic:code, id:1,link:'https://qr-code-akm4.vercel.app'},
                {  name: 'glassmorphism', pic:glass, id:1,  link:'https://glassmorphism-work.vercel.app/'},
                {  name: 'Phone-font', pic:phone, id:2, link:'https://desktop-font.vercel.app' },
                {  name: 'Sign-in', pic:sign, id:3, link:'https://sign-in-page-blond.vercel.app' },
            ],
            2: [
                { name: 'Simple Responsive Web', pic:respon, id:1, link:'https://responsive-show-house.vercel.app/'},
                {name: 'Nft-website', pic:nft, id:2,  link:'https://nft-dusky-xi.vercel.app'},
                {name: 'Foodie', pic:foodie, id:3,  link:'https://foodie-6og9.vercel.app'},
            ],
            3: [
                {name: 'Show-Movie', pic:movie, id:1, link:'https://show-movies-with-netflix.vercel.app'},
                {name: 'Online-Cart', pic:cart,id:2, link:'https://online-shopping-cart-sepia.vercel.app' },
               { name: 'Quote', pic:quote,id:3, link: 'https://api-quote-generator.vercel.app'},
               { name: 'Phone-Book', pic:phonebook,id:4, link: 'https://phone-search.vercel.app'},
            ],
            4: [
                {name: 'Book-Resort', pic:hotel, id:1, link:'https://book-resort.vercel.app'},
                { name: 'Portfolio', pic:portfolio, id:2, link: 'https://portfolio-website-cyan-rho.vercel.app'},
                { name: 'Amazon-clone', pic:amazon, id:3, link: 'https://amazon-clone-mu-six.vercel.app/'},
            ]

        };

    return ( 
        <div className="demo">
             <h2 className="title">{Title[linkClicked]}</h2>
            
            <First one={obj} myID={linkClicked} />
        </div>
     );
}

Demo1.propTypes = {
    linkClicked: PropTypes.number.isRequired,
  } 
 
export default Demo1;