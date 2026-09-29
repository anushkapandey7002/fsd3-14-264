const b1 = {
  picURL: "https://m.media-amazon.com/images/I/518+W2zr3BL._AC_UY327_FMwebp_QL65_.jpg",
  bname: "React Design Pattern",
  price: 1199,
  quantity: 10,
  rating: 5.0,
};
const b2 = {
  picURL: "https://m.media-amazon.com/images/I/51eQekkEKoL._AC_UY327_FMwebp_QL65_.jpg",
  bname: "React Key Concept",
  price: 1349,
  quantity: 5,
  rating: 4.0,
};


function Book(props){
  console.log(props);
  return(
    <div>
      <img src={props.book.picURL} alt={props.book.bname} />
      <h1>{props.book.bname}</h1>
      <h2>Price: {props.book.price}</h2>
      <h3>Quantity: {props.book.quantity}</h3>
      <h3>Ratings : {props.book.rating}</h3>
    </div>
  );
}


export default function App() {
  return (
  <>
   <Book book={b1} />
   <h1>Hello React</h1>
   <Book book={b2} />
   <Book book={b1} />
   <Book book={b2} />
  </>
  );
} 