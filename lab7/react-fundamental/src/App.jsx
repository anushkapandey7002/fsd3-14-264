//function must return single element
// <> </> is called fragement, used to group multiple elements without adding extra nodes to the DOM: works only in js and react but it will not work in the normal html there we have to use div only
//COMPONENT: any js function returns html directly is called component, it can be called as html tag(tag must be closed) 
//componet first character must be capital

// 8 html ke andar js ko curly braces ka use karke call karte hai
function Hello(args){
  return(
<>
    <h1>{args.name}</h1>  
    <img src={args.imageUrl} alt={args.name} style={{width: '200px', height: 'auto', alignItems: 'center'}}/>
    <h2>Rs. {args.price}</h2>
    <h3>Author: {args.author}</h3>
    <h4>Rating: {args.rating}</h4>
</>
  );
}

export default function App(){
  const books = [
  {
    "name": "The Alchemist",
    "author": "Paulo Coelho",
    "price": 299,
    "rating": 4.5,
    "imageUrl": "https://covers.openlibrary.org/b/isbn/9780061122415-L.jpg"
  },
  {
    "name": "Atomic Habits",
    "author": "James Clear",
    "price": 450,
    "rating": 4.8,
    "imageUrl": "https://covers.openlibrary.org/b/isbn/9780735211292-L.jpg"
  },
  {
    "name": "Rich Dad Poor Dad",
    "author": "Robert Kiyosaki",
    "price": 350,
    "rating": 4.6,
    "imageUrl": "https://covers.openlibrary.org/b/isbn/9781612680194-L.jpg"
  },
  {
    "name": "The Psychology of Money",
    "author": "Morgan Housel",
    "price": 399,
    "rating": 4.7,
    "imageUrl": "https://covers.openlibrary.org/b/isbn/9780857197689-L.jpg"
  },
  {
    "name": "Ikigai",
    "author": "Hector Garcia and Francesc Miralles",
    "price": 275,
    "rating": 4.4,
    "imageUrl": "https://covers.openlibrary.org/b/isbn/9780143130727-L.jpg"
  },
  {
    "name": "Wings of Fire",
    "author": "A. P. J. Abdul Kalam",
    "price": 250,
    "rating": 4.7,
    "imageUrl": "https://covers.openlibrary.org/b/isbn/9788173711466-L.jpg"
  },
  {
    "name": "Harry Potter and the Philosopher's Stone",
    "author": "J. K. Rowling",
    "price": 499,
    "rating": 4.8,
    "imageUrl": "https://covers.openlibrary.org/b/isbn/9780747532699-L.jpg"
  },
  {
    "name": "The Fault in Our Stars",
    "author": "John Green",
    "price": 320,
    "rating": 4.5,
    "imageUrl": "https://covers.openlibrary.org/b/isbn/9780525478812-L.jpg"
  },
  {
    "name": "It Ends with Us",
    "author": "Colleen Hoover",
    "price": 399,
    "rating": 4.3,
    "imageUrl": "https://covers.openlibrary.org/b/isbn/9781501110368-L.jpg"
  },
  {
    "name": "The 5 AM Club",
    "author": "Robin Sharma",
    "price": 375,
    "rating": 4.4,
    "imageUrl": "https://covers.openlibrary.org/b/isbn/9781443456623-L.jpg"
  }
]
  return (
  <>
    <h1>Hello React</h1>
    <Hello name="React Book" price="1000" author="Anushka Pandey"/>
    <Hello name="JavaScript" price="2000" author="Anushka "/>
    <Hello{...books[0]}/>
    {
      books.map((item)=><Hello {...item}/>) 
    }
  </>
  );
}