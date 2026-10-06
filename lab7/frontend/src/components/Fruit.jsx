const products = [
    {title:'Cabbage', id:1, isFruit:false},
    {title:'Potatao', id:2, isFruit:false},
    {title:'Apple', id:3, isFruit:true},
    {title:'Banana', id:4, isFruit:true},
];

const ListItem = products.map((item) => (
<li  key={item.id} style= {{color: item.isFruit ? "red" : "green" }}>
    {item.title}
    </li>
    ));//key property is used to uniquely identify each item in the list, which helps React efficiently update and render the list when changes occur.

console.log(ListItem);

const Fruit = () => {
  return <ul>{ListItem}</ul>
};
export default Fruit;
