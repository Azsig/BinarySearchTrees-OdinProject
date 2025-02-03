import {Tree} from './BTS.js'

let array = [1,2,3,4,5,6,7,8,9,10,21,34,64,78,0,21,43,55];
let printArray = []
let prints;

let BTS = Tree(array);
console.log(BTS.isBalance());
BTS.prettyPrint()
BTS.levelOrder(prints = (value) => console.log(value.data));
console.log("--")
BTS.preOrder(prints = (value) => console.log(value.data));
console.log("--")
BTS.postOrder(prints = (value) => console.log(value.data));
console.log("--")
BTS.inOrder(prints = (value) => console.log(value.data));
BTS.insert(10);
BTS.insert(11);
BTS.insert(12);
BTS.insert(13)
BTS.prettyPrint()
console.log(BTS.isBalance());
BTS.reBalance();
console.log(BTS.isBalance())