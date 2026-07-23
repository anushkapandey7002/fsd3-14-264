const f1 = () => { //crete three function f1 , f2, f3 and print their names
    console.log("f1");
}
const f2 = () => {
    console.log("f2");
}
const f3 = () => {
    console.log("f3");
};
function main(){
    console.log("main");
    f1();
    f2();
    f3();
    console.log("end main");
}
main();