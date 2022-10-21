// const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
    
  }
}

class BinarySearchTree {
  constructor() {
  this.rootNode = null;
  }
// ***********************************************
  root() {
    return this.rootNode;
  }
  // *********************************************
  add(data) {
    let newNode = new Node(data);
    if (!this.rootNode) {
      this.rootNode = newNode;
      return;
    }

    let currentNode = this.rootNode;
  while (currentNode) {
    if (data < currentNode.data) {
        if (!currentNode.left) { currentNode.left = newNode;  return;  } 
         else { currentNode = currentNode.left; }
    } 
    else {
      if (!currentNode.right) { currentNode.right = newNode;  return;  } 
        else { currentNode = currentNode.right; }
    }
  }
}

//     let newNode = new Node(data);
    
//     const findPlaceForNode = (data, currentNode) => {
//       if (!currentNode) { 
//         this.rootNode = newNode
//         return;
//       };
//       if (data < currentNode.data) { 
//           if (currentNode.left) {
//             findPlaceForNode(data, currentNode.left); 
//           } else { 
//             currentNode.left = newNode;
//           }       
//     } else {  
//       if (data > currentNode.data) {
//         if (currentNode.right) {
//           findPlaceForNode(data, currentNode.right); 
//       } else {
//         currentNode.right = newNode;
//       }
//     }
//     }

// }
//   findPlaceForNode(data, this.root());
  // }

 
  // **********************************************
  has(data) {
    let newNode = new Node(data);
    let currentNode = this.rootNode;

    if (!currentNode) { return false;}
    while (currentNode){
        if (currentNode.data === newNode.data) {
           return true;
          } else {
                if (data < currentNode.data) {
                  currentNode = currentNode.left;
                 } 
                 else currentNode = currentNode.right
                }
    }
    return false;
  }

  // *******************************************************
  find(data) {
    let newNode = new Node(data);
    let currentNode = this.rootNode;
    if (!currentNode) { return null;}

    while (currentNode){
      if (currentNode.data === newNode.data) {
         return currentNode;
        } else {
              if (data < currentNode.data) {
                currentNode = currentNode.left;
               } 
               else currentNode = currentNode.right
              }
  }
  return null;
}


// // *************************************************
  // remove(data) {
//     let newNode = new Node(data);
//     let currentNode = this.rootNode;
//     // let prevNode = this.parent;
//     if (!currentNode) { return false;}
    
//     while (currentNode){
//       if (currentNode.data === newNode.data) {
//           if (!currentNode.left && !currentNode.right) { currentNode = null; console.log('+++'); return true; }
//            else {
//                  if (currentNode.left && currentNode.right) {
//                     let minFromRight = currentNode.right;
//                      while (minFromRight.left) {
//                       // this.parent = minFromRight
//                        minFromRight = minFromRight.left; 
//                       } 
//                      currentNode.data = minFromRight.data; 
//                      minFromRight = null; 

//                      return currentNode;
                      
//                     } else {
//                            if (currentNode.left && !currentNode.right) { currentNode.data = currentNode.left.data;
//                             currentNode.left = null; return currentNode;
//                       } else {
//                         currentNode.data = currentNode.right.data; currentNode.right = null;
//                         return currentNode;
//                         }
//                     }
//                   }
//       } else {
//               if (newNode.data < currentNode.data) { currentNode = currentNode.left;  } 
//               else { currentNode = currentNode.right; }
//             }
//   }   
//   return false;
// } 
// **** РАБОТАЮЩИЙ КОД УДАЛЕНИЯ УЗЛА ****************
remove(data) {
    this.rootNode = removeNode(this.rootNode, data);

    function removeNode (node, data) {
      if (data < node.data) { node.left = removeNode(node.left, data);  return node; }
      else if (data > node.data) { node.right = removeNode (node.right, data);  return node; }
            else {
              if (!node.left && !node.right) { return null; }
              if (!node.left) { node = node.right; return node; }
              if (!node.right) { node = node.left; return node; }

              let minFromRight = node.right;
              while (minFromRight.left){ minFromRight = minFromRight.left; }
              node.data = minFromRight.data;
              node.right = removeNode(node.right, minFromRight.data);
              return node
            }
    }
}

// // ********************************************************
  min() {
    if (!this.rootNode) { 
      return null;
    }
    let currentNode = this.rootNode;
    while (currentNode.left) { 
      currentNode = currentNode.left;
     }
    return currentNode.data;
  }

//   // ************************************************
  max() {
    if (!this.rootNode) { 
      return null;
    }
    let currentNode = this.rootNode;
    while (currentNode.right) {
      currentNode = currentNode.right; 
    }
    return currentNode.data;
  }
   

 }

 const obj = new BinarySearchTree();

 obj.add(15);
 obj.add(7);
 obj.add(6);
 obj.add(11);
 obj.add(10);
 obj.add(2);
 obj.add(8);
 obj.add(9);
 
 obj.remove(7);

console.log(obj);

module.exports = {
  BinarySearchTree
};


