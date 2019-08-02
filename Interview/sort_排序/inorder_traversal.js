//    1
// null  2
//    3
// 中序遍历：一棵树  递归的概念  先输出1左子树 根结点  右子树
// 输出132



  function TreeNode(val) {
    this.val =val
    this.left = this.right = null;

  }
  let a1 = new TreeNode(1)
  let a2 = new TreeNode(2)
  let a3 = new TreeNode(3)

  a1.right = a2
  a2.left = a3


  var inoderTraversal = function(root){

    let arr = [];
    const inoder = root => {    //递归ziji diaoyong 
      if(root === null) return null;  //叶子结点为空的时候
      inoder(root.left);
      arr.push(root.val);
      inoder(root.right);
    }

    inoder(root)
    return arr;
  }

  console.log(inoderTraversal(a1))

             