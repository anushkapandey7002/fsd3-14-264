export default function Book(props){
const{bname,price,quantity,rating,picURL} = props.book;
const qtyStyle = {
  fontSize: "1rem",
  color:"blue",
  textAlign:"center",
  backgroundColor:"yellow",
  padding:"5px",
};
  return(
    <div className="book">
      <img src={picURL} alt={bname} />
      <h1>{bname}</h1>
      <h2>Price: {price}</h2>

      <h3 style={qtyStyle}>Quantity: {quantity}</h3>

      <h4 style={{ color:"red",textAlign:"center" }}>Ratings : {rating}</h4>
      <button>Buy Now</button>
    </div>
  );
}
