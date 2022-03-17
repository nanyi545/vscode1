/**
 * https://pomb.us/build-your-own-react/
 * 
 * Build your own React
 * 
 * 
 */

/** react way: 
const element = <h1 title="foo">Hello</h1>
const container = document.getElementById("root")
ReactDOM.render(element, container)
 */


function createElement(type, props, ...children) {

    function createTextElement(text) {
        return {
          type: "TEXT_ELEMENT",
          props: {
            nodeValue: text,
            children: [],
          },
        }
    }
      
    return {
      type,
      props: {
        ...props,
        children: children.map(child =>{
            if(typeof child === "object")return child;
              return createTextElement(child);
            }
        )
      },
    }
  }
  

  const Didact = {
    createElement,
    render,
  }
  

// const element = {
//     type: "h1",
//     props: {
//       title: "foo",
//       children: "Hello",
//     },
//   };


// generate element ....

// const element = createElement("h2", {}, "hello"); // Ok 


// const element = Didact.createElement(
//   "div",
//   { id: "i1" },
//   Didact.createElement("div",{id: "i2-1" }, 
//     Didact.createElement("div",{id: "i3-1" }, "bar-kid1"),
//   ),
//   Didact.createElement("div",{id: "i2-2" }, "bb"),
//   Didact.createElement("div",{id: "i2-3" }),
// )
const element = Didact.createElement(
  "div",
  { id: "i1" },
  Didact.createElement("div",{id: "i2-1" }),
  Didact.createElement("div",{id: "i2-2" })
)


/**
 * If we have a comment like this one, when babel transpiles the JSX it will use the function we define.
 * 
 
@jsx Didact.createElement 
const element = (
    <div id="foo">
      <a>bar</a>
      <b />
    </div>
  )

  ???? how ??

 */

console.log("element:"+JSON.stringify(element));

//  find the root
const container = document.getElementById("root");

function createDom(fiber) {
  // console.log("---createDom from fiber----- type:"+fiber.type+"  id:"+fiber.props["id"]);
  const dom =
    fiber.type == "TEXT_ELEMENT"
      ? document.createTextNode("")
      : document.createElement(fiber.type)

  const isProperty = key => key !== "children"
  Object.keys(fiber.props)
    .filter(isProperty)
    .forEach(name => {
      dom[name] = fiber.props[name]
    })

  return dom
}

function commitRoot() {
  commitWork(wipRoot.child)
  currentRoot = wipRoot
  wipRoot = null
}

function commitWork(fiber) {
  if (!fiber) {
    return
  }
  const domParent = fiber.parent.dom
  domParent.appendChild(fiber.dom)
  commitWork(fiber.child)
  commitWork(fiber.sibling)
}


function render(element, container) {
  wipRoot = {
    dom: container,
    props: {
      children: [element],
    },
    // We also add the alternate property to every fiber. This property is a link to the old fiber, 
    // the fiber that we committed to the DOM in the previous commit phase.
    alternate: currentRoot,
  }
  nextUnitOfWork = wipRoot;
}

let nextUnitOfWork = null
// work in progress 
let wipRoot = null
let currentRoot = null

function workLoop(deadline) {
  let shouldYield = false
  while (nextUnitOfWork && !shouldYield) {
    nextUnitOfWork = performUnitOfWork(
      nextUnitOfWork
    )
    // console.log("---nextUnitOfWork---");
    // if(nextUnitOfWork){
    //   console.log(nextUnitOfWork.dom);
    // }
    shouldYield = deadline.timeRemaining() < 1
  }
  if (!nextUnitOfWork && wipRoot) {
    commitRoot()
  }
  requestIdleCallback(workLoop)
}

requestIdleCallback(workLoop)


/**
 * why fiber ?
 * 
 * 1  make it easy to find the next unit of work.
 * 2  virtual DOM 
 * 
 */



function printDom(node){
  printDomRecurse(node,0);
}


function printDomRecurse(node,level){
  let str = "*".repeat(level);
  str+="n:";
  str+=node.nodeName;
  str+=" id:";
  str+=node.id;
  console.log(str);
  let l2 = level+1;
  for(let i=0;i<node.childElementCount;i++){
    printDomRecurse(node.children[i],l2);
  }
}

/**
 * We’ll have one fiber for each element and each fiber will be a unit of work.
 */
function performUnitOfWork(fiber) {
  // console.log("---performUnitOfWork-----");
  //  add dom node
  if (!fiber.dom) {
    fiber.dom = createDom(fiber)
  }

  //  create new fibers
  const elements = fiber.props.children
  let index = 0
  let prevSibling = null
  while (index < elements.length) {
    const element = elements[index]
    const newFiber = {
      type: element.type,
      props: element.props,
      parent: fiber,
      dom: null,
    }
    if (index === 0) {
      fiber.child = newFiber
    } else {
      //   sibling --> points to next fiber in the same level .... 
      prevSibling.sibling = newFiber
    }
    prevSibling = newFiber
    index++
    // console.log("---performUnitOfWork-----index："+index);
  }
  //  return next unit of work
  if (fiber.child) {
    return fiber.child
  }
  // depth first traversal ... 
  let nextFiber = fiber
  while (nextFiber) {
    if (nextFiber.sibling) {
      return nextFiber.sibling
    }
    nextFiber = nextFiber.parent
  }
  // if reach here ---> will return undefined 
}


Didact.render(element, container)





