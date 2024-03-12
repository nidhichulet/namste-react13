// const heading = React.createElement("h1", {}, "hello naina chulet")

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);


// const heading = React.createElement("h1", {id:"heading"}, "hello naina chulet");
// // console.log(heading) //we are craeting react Elemnet which is object
// ReactDOM.render(heading, document.getElementById("root"));


// function App(){
//     return React.createElement("h1",{},"hello chulet shahab")
// }

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(React.createElement(App))

const parent = React.createElement("div", { id: "parent" }, React.createElement("div", { id: "child" }, [React.createElement("h1", {}, "hello noni", React.createElement("h2", {}, "hello durvika"))]))

ReactDOM.render(parent,document.getElementById("root"))
