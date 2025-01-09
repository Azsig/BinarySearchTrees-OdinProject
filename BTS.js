function Node(data){
    let data = data;
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

  function sortedArrayToBST(arr = array, start, end){
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

    }
  }

      
}