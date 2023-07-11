import First from "./First";
import PropTypes from "prop-types";
import cinema from './images/cinema.png';
import phone from './images/phone.png';
import spring from './images/spring.png';
import sign from './images/sign-in.png';
import company from './images/company.png';
import nft from './images/nft.png';
import foodie from './images/foodie.png';
import movie from './images/movie.png';
import cart from './images/cart.png';
import quote from './images/quote.png';
import phonebook from './images/phonebook.png';
import hotel from './images/hotel.png'
import blog from './images/blog.png'



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
                {  name: 'Cinema', pic:cinema, id:2,  link:'https://cinema-ruby.vercel.app'},
                {  name: 'Phone-font', pic:phone, id:3, link:'https://desktop-font.vercel.app' },
                {  name: 'Spring.io', pic:spring, id:4, link:'https://spring-delta.vercel.app' },
                {  name: 'Sign-in', pic:sign, id:5, link:'https://sign-in-page-blond.vercel.app' },
            ],
            2: [
                { name: 'Watch', pic:company, id:1, link:'https://watch-boostrap.vercel.app'},
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
                { name: 'Blog', pic:blog, id:2, link: ''},
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