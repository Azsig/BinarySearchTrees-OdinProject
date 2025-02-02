function Node(data){
    data = data;
    let left = null;
    let right = null;

    return{data, left, right}
}

function Tree(array){
  let root;

  const prettyPrint = (node = root, prefix = "", isLeft = true) => {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  };
  const buildTree = (arr = array) =>{
    let processedArray = sorterAndDupRemover(arr);
    
    root = sortedArrayToBST(processedArray);

    return root;

  }

  function sortedArrayToBST(arr = array, start = 0, end = arr.length - 1){
    if(start > end){
      return null
    }

    let mid = Math.floor((end - start)/2);

    let rootBTS = Node(arr[mid]);

    rootBTS.left = sortedArrayToBST(arr, start, mid - 1);

    rootBTS.right = sortedArrayToBST(arr, mid + 1, end);

    return rootBTS;

  }

  const sorterAndDupRemover = (arr = array) => {
    let array1 = arr;
    array1.sort();
    let s = new Set(array1);
    let newArray = [...s];

    return newArray;
  }

  let insert = (value, node = root) => {
    if (node == null) {
      return Node(value);
    }

    if (node.data == value){
      return node
    }

    if(value > node.data){
      insert(value, node.right)
    }
    else if(value < node.data){
      insert(value, node.left);
    }

    return node

  }

  let succ = (value) => {
    value = value.right
    while(value != null && value.left != null){
      value = value.left
    }
    return value

  }

  let remove = (value, node=root) => {
    if(node == null){
      return node
    }

    if(value > node.data){
      node.right= remove(value, node.right)
    }
    else if ( value < node.data){
      node.left = remove(value, node.left)
    }
    else{

      if(node.right == null){
        return node.left
      }
      if (node.left == null){
        return node.right
      }

      let succ = getSuccesor(node)
      node.data = succ.data;
      node.right = remove(succ.data,node.right);

    }
    return node
  }

  function find(value, node = root){
    if(node == null){
      return node
    };

    if(value < node){
      find(value, node.left);
    }
    else if( value > node){
      find(value, node.right);
    }
    else{
      return node
    }
  }

  function levelOrder(callback, qeue = [root]){
    if(!callback){
      return new Error("callback needed")
    }

    if(qeue.length === 0) return;

    let node = qeue.shift();
    callback(node);

    if (node.left) qeue.push(node.left);
    if (node.right) qeue.push(node.right);

    levelOrder(callback, qeue)
  }

  function inOrder(callback, node){
    if(!callback){
      return new Error("Need callback function")
    };
    if(node != null){
      inOrder(callback, node.left);
      callback(node);
      inOrder(callback, node.right);
    }
    
  }

  function preOrder(callback, node){
    if(!callback){
      return new Error("Need callback function")
    };
    if(node != null){
      callback(node);
      preOrder(node.left);
      preOrder(node.right);
    }
  }

  function postOrder(callback, node){
    if(!callback){
      return new Error("Need callback function")
    };
    if(node != null){
      postOrder(callback, node.left);
      postOrder(callback, node.right);
      callback(node);
    }
  }
  
  let height = (node) =>{
    if(node == null){
      return 0
    }

    let nodeLeft = height(node.left);
    let nodeRight = height(node.right);

    return Math.max(nodeLeft, nodeRight) +1;
  }

  let depth = (node, root1 = root) => {
    if(root1 == node){
      return 0;
    };

    let nodeLeft = depth(node, root1.left);
    let nodeRight = depth(node, root1.right);

    return Math.max(nodeLeft, nodeRight) +1;    
  }

  function isBalance(){
    let node = root
    let nodeLeft = node.left;
    let nodeRight = node.right;
    let leftCount = 0;
    let rightCount = 0;

    while(nodeLeft != null){
      nodeLeft = nodeLeft.left;
      leftCount++;
    }
    while(nodeRight != null){
      nodeRight = nodeRight.right;
      rightCount++;
    }

    if(leftCount - rightCount <= 1 || rightCount - leftCount <=1){
      return "Balance"
    }
    else{
      return "not Balance"
    }
  }

  function reBalance(){
    let allValue = []

    inOrder(pushing = (value) => allValue.push(value),root );

    root = sortedArrayToBST(allValue)
  }

      
}

  
