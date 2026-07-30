import { readFile, writeFile } from "fs/promises";
import readline from "readline/promises"; //user se input lenge
import { stdin, stdout } from "process";

//Data base using file starts
const FILE = "product.json";

const getCart = async () => {
  const data = await readFile(FILE, "utf-8");
  return JSON.parse(data);
};

const saveCart = async (cart) => {
  await writeFile(FILE, JSON.stringify(cart, null, 2)); //null: koi filter nhi//2 : space,improves visibility
};

const addToCart = async (product) => {
  const cart = await getCart();

  const isFoundInCart = cart.find((item) => item.id === product.id);

  if (isFoundInCart) {
    isFoundInCart.qty += 1;
  } else {
    cart.push(product);
  }

  await saveCart(cart);
  console.log(`${product.name} added to cart 🛒`);
};

const displayCart = async () => {
  const cart = await getCart();
  if (cart.length == 0) {
    console.log("cart is empty ");
    return;
  }
  console.table(cart); //array ko print karna ho to vo index ke saath dikhaega
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0); //reduce - only one input
  console.log(`Total amount to pay Rs ${total}`);
};

const main = async () => {
  let choice;
  const cin = readline.createInterface({ input: stdin, output: stdout });

  do {
    console.log("Welcome to Amazon Shopping 🛒");
    console.log("1................Show Cart");
    console.log("2................Add Product");
    console.log("3................Remove Product");
    console.log("4................Update Quantity");
    console.log("5................Checkout");
    choice = await cin.question("ENter your choice "); //question inbuilt function hain

    switch (Number(choice)) {
      case 1:
        // console.log("Show Cart");
        await displayCart();
        break;

      case 2:
        // console.log("add product");
        const item = await cin.question("Enter id,name,price,qty: ");

        console.log("Input received:", item);

        const [id, name, price, qty] = item.split(",").map((p) => p.trim());

        console.log(id, name, price, qty);

        await addToCart({
          id: Number(id),
          name,
          price: Number(price),
          qty: Number(qty),
        });

        break;

      case 3:
        console.log("remove product");
        break;
      case 4:
        console.log("update quantity");
        break;
      case 5:
        console.log("checkout");
        break;
      default:
        console.log("Invalid Choice");
    }
  } while (choice != 5);
  cin.close();
};

main();
