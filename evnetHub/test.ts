import Eventhub from "./index";

type testFn = (message: string) => void;
//测试EventHub是个对象
const test1: testFn = message => {
  const eventhub = new Eventhub();
  console.assert(eventhub instanceof Object === true, "eventhub是个对象");
  console.log(message);
};
//测试on
const test2: testFn = message => {
  const eventhub = new Eventhub();
  let status = false;
  eventhub.on("testOn", x => {
    status = true;
    console.assert(x[0] === "上午爬山");
    console.assert(x[1] === "下午打篮球");
  });
  eventhub.emit("testOn", ["上午爬山", "下午打篮球"]);
  console.assert(status);
  console.log(message);
};
//测试off
const test3: testFn = message => {
  const eventhub = new Eventhub();
  let status = false;
  let fn = () => {
    status = true;
  };
  eventhub.on("testOff", fn);
  eventhub.off("testOff", fn);
  eventhub.emit("testOn");
  console.assert(!status);
  console.log(message);
};
test1("测试eventhub");
test2("先监听-on,然后emit");
test3("测试off");
