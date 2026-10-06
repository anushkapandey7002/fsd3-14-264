const MyButton = () => {
    const handleClick = () =>{
        alert("Button Clicked");
    }

    return<button 
    style={{ height: "20px", width: "100px"}} 
    onClick={handleClick}>
        Click Me
        </button>;
};

const Event = () => {
  return (
    <div>
      <MyButton />
    </div>
  );
};
export default Event
