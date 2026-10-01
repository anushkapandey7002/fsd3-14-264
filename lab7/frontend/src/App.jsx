import Book from "./components/Book";
import Pen from "./components/Pen";
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

const p1 = {
  picURL: "https://m.media-amazon.com/images/I/61pEYb8KDCL._AC_UL480_FMwebp_QL65_.jpg",
  company: "Reynolds",
  price: 100,
}

const p2 = {
  picURL: "https://m.media-amazon.com/images/I/61a1H5fePyL._AC_UL480_FMwebp_QL65_.jpg",
  company: "Parker",
  price: 150,
}




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
   <Pen pen={p1} />
   <Pen pen={p2} />
   </div>
  </>
  );
} 
