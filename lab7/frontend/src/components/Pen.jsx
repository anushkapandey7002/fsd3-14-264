const Pen = (props) => {
    const { picURL, company, price } = props.pen;

    return (
        <div className="book">
            <img src={picURL} alt={company} />
            <h3>{company}</h3>
            <h4>Rs. {price}</h4>
        </div>
    );
};

export default Pen;

