const f1 = () => { //crete three function f1 , f2, f3 and print their names
    console.log("f1 starts");
    f2();
    console.log("f1 running");
    console.log("f1 ends");
}
const f2 = () => {
    console.log("f2 starts");
    f3();
    console.log("f2 running");
    console.log("f2 ends");
}
const f3 = () => {
    console.log("f3 starts");
    console.log("f3 running");
    console.log("f3 ends");
};
function main(){
    console.log("main starts");
    f1();
    console.log("main running");
    console.log("main ends");
    f2();
    f3();
    console.log("end main");
}
main();