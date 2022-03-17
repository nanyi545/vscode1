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


const element = Didact.createElement(
  "div",
  { id: "foo" },
  "hehe",
  Didact.createElement("div",{}, "bar"),
  Didact.createElement("div",{}, "bb")
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



function render(element, container) {
    // We start by creating the DOM node using the element type, and then append the new node to the container.
    //  We also need to handle text elements, if the element type is TEXT_ELEMENT we create a text node instead of a regular node.
    const dom =
    element.type == "TEXT_ELEMENT"
      ? document.createTextNode("")
      : document.createElement(element.type)

      //assign the element props to the node.
      const isProperty = key => key !== "children"
      Object.keys(element.props)
        .filter(isProperty)
        .forEach(name => {
          dom[name] = element.props[name]
        })
    

    // We recursively do the same for each child.
    element.props.children.forEach(child =>
        render(child, dom)
    )  

    container.appendChild(dom)
    
}
  

// let nextUnitOfWork = null

// function workLoop(deadline) {
//   let shouldYield = false
//   while (nextUnitOfWork && !shouldYield) {
//     nextUnitOfWork = performUnitOfWork(
//       nextUnitOfWork
//     )
//     shouldYield = deadline.timeRemaining() < 1
//   }
//   requestIdleCallback(workLoop)
// }

// requestIdleCallback(workLoop)

// function performUnitOfWork(nextUnitOfWork) {
//   // TODO
// }


Didact.render(element, container)





