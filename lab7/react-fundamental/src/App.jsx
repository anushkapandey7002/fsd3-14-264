//function must return single element
// <> </> is called fragement, used to group multiple elements without adding extra nodes to the DOM: works only in js and react but it will not work in the normal html there we have to use div only
//COMPONENT: any js function returns html directly is called component, it can be called as html tag(tag must be closed) 
//componet first character must be capital
// 8 html ke andar js ko curly braces ka use karke call karte hai
import BookList from "./components/BookList";

export default function App(){
  
  return (
  <>
    <h1>Hello React</h1>
    <BookList />
  </>
  );
}