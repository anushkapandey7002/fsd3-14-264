const f1 = () => {           //synchronous call // js is synchrounous and single threaded language
  console.log("f1 starts");   //kin asynchrounous we use event loop to manage the call stack
  f2();
  console.log("f1 running");
  console.log("f1 end");
};
const f2 = () => {
  console.log("f2 starts");
  f3();
  console.log("f2 running");
  console.log("f2 ends");
};
const f3 = () => {
  console.log("f3 starts");
  console.log("f3 running");
  console.log("f3 end");
};
function main() {
  console.log("main");
  f1();
  console.log("end main");
}
main();
//asynchronous calls usin timers
//1. SetTimeout
//2.SetImmediate
//3. process.nextTick
//4. SetInterval