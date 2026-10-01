# Frontend - Backend
1. ceate project folder (lab7)
2. create frontend, backend folder with in project folder
3. open terminal and split it
4. open frontend in to left side terminal
5. open backend into righy 
6. in backend
   a. initialise backend by `npm init -y`
   b. install nodemon by `npm i nodemon`
   c. open package.json from backend, update `type to module` and 
   script {
    "start": "node app.js",
    "dev": "nodemon app.js"

   }
   d. create app.js
7. in frontent
   a. npm create vite@latest
   b. enter . as project name
   c. select framework as react from arrow key
   d. se;ect variant as javascript from arrow key
   e. select esList for linting from arrow key 
   f. select install and start the frontent

## Components - small independent part to make a website
1. Simple js functions return html directly
2. It must starts with capital letter 
3. It should be treated as html tag
4. It must be closed

# Object Destructure 
1. const{bname,price,quantity,rating,picURL} = props.book;
does not depends on order, if property is not avavilable{like author} then it initialise with null66
 # any components include styles
1. external css => create class in index.css and use in components
2. internal css => crete property as object like:
```
const qtyStyle = {
  fontSize: "1rem",
  color:"blue",
  textAlign:"center",
  backgroundColor:"yellow",
  padding:"5px",
};
```
then apply with style attribute & pass the object 
`<h3 style={qtyStyle}>Quantity: {quantity}</h3>`

3. inline in this method we use 2 curly braces with style attribute all the css property must be of single word, for eg: text-align becomes textAlign(camelCase)

#rfce #rafce
