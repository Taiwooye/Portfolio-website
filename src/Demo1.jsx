import First from "./First";
import PropTypes from "prop-types";

const Demo1 = ({linkClicked}) => {

        const Title = {
            1 : "HTML/CSS",
            2 : "BOOTSTRAP",
            3 : "JAVASCRIPT",
            4 : "REACT",
        };

        const obj = {
            1: [
                {  name: 'Qr-Code', pic:'./images/qr.png', id:1,link:'https://qr-code-akm4.vercel.app'},
                {  name: 'Cinema', pic:'./images/cinema.png', id:2,  link:'https://cinema-ruby.vercel.app'},
                {  name: 'Phone-font', pic:'./images/phone.png', id:3, link:'https://desktop-font.vercel.app' },
                {  name: 'Spring.io', pic:'./images/spring.png', id:4, link:'https://spring-delta.vercel.app' },
                {  name: 'Sign-in', pic:'./images/sign-in.png', id:5, link:'https://sign-in-page-blond.vercel.app' },
            ],
            2: [
                { name: 'Watch', pic:'./images/company.png', id:1, link:'https://watch-boostrap.vercel.app'},
                {name: 'Nft-website', pic:'./images/nft.png', id:2,  link:'https://nft-dusky-xi.vercel.app'},
                {name: 'Foodie', pic:'./images/foodie.png', id:3,  link:'https://foodie-6og9.vercel.app'},
            ],
            3: [
                {name: 'Show-Movie', pic:'./images/movie.png', id:1, link:'https://show-movies-with-netflix.vercel.app'},
                {name: 'Online-Cart', pic:'./images/cart.png',id:2, link:'https://online-shopping-cart-sepia.vercel.app' },
               { name: 'Quote', pic:'./images/quote.png',id:3, link: 'https://api-quote-generator.vercel.app'},
               { name: 'Phone-Book', pic:'./images/phonebook.png',id:4, link: 'https://phone-search.vercel.app'},
            ],
            4: [
                {name: 'Book-Resort', pic:'./images/hotel.png', id:1, link:'https://book-resort.vercel.app'},
                { name: 'Blog', pic:'./images/blog.png', id:2, link: ''},
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