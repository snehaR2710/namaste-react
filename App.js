// const heading = document.createElement("h1");
// heading.innerHTML = "Hello There, Welcome to Programming World!!";

// const root = document.getElementById("root");
// root.appendChild(heading);


// const heading = React.createElement(
//     "h1", 
//     { id:"heading"}, 
//     "Hey There, This is my First code in React!!"
// );
// see in console basically react element is a nothing but object
/**when we write React.createElement() it basically creates a javascript object
 * for you, this is not h1 tag and all,it's React element
 */
// console.log("heading",heading);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// console.log("root", root);

// root.render(heading);
/**and this render method is responsible for to take this object(heading)
 * and put it up convert it into heading tag and put it up into dom
 */



/** how do we create nested element in react
 * <div id="parent">
 *     <div id="child">
 *       <h1>I am h1 tag</h1>
 *       <h2>I am h2 tag</h2>
 *    </div>
 *    <div id="child2">
 *       <h1>I am another h1 tag</h1>
 *       <h2>I am another h2 tag</h2>
 *    </div>
 * </div>
 * ......like this*/

const parent = React.createElement(
    "div", 
    {id: "parent"},
    React.createElement("div", {id: "child"}, 
        [React.createElement("h1", {}, "I am h1 tag"), React.createElement("h2", {}, "I am h2 tag")]
    ),
    React.createElement("div", {id: "child2"}, 
        [React.createElement("h1", {}, "I am another h1 tag"), React.createElement("h2", {}, "I am another h2 tag")]
    )
);
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log("root", root);

root.render(parent);