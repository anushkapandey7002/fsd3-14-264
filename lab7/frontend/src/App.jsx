import Book from "./components/Book";
const b1 = {
  picURL: "https://m.media-amazon.com/images/I/518+W2zr3BL._AC_UY327_FMwebp_QL65_.jpg",
  bname: "The Road to React",
  price: 1199,
  quantity: 10,
  rating: 5.0,

};
const b2 = {
  picURL: "https://m.media-amazon.com/images/I/51eQekkEKoL._AC_UY327_FMwebp_QL65_.jpg",
  bname: "React JS for Beginners",
  price: 1349,
  quantity: 5,
  rating: 4.0,
};




export default function App() {
  return (
  <>
  <h1>Online Book Store</h1>
  <div className="container">
    {/* //jsx - className//html - class */}
   <Book book={b1} />
   <Book book={b2} />
   <Book book={b1} />
   <Book book={b2} />
   </div>
  </>
  );
} 
