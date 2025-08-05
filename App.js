const heading = React.createElement("h1", { id: "heading" }, "hello world");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

{
  /* <div id="parent">
    <div id="child">
        <h1>I am H1 tag</h1>
    </div>
</div> */
}

const parent = React.createElement(
  "div",
  { id: "parent" },[
  React.createElement(
    "div",
    { id: "child" },
    [React.createElement("h1", {}, "I am H1 tag"), React.createElement("h1", {}, "I am H1 tag")]
  ),React.createElement(
    "div",
    { id: "child" },
    [React.createElement("h2", {}, "I am H2 tag"), React.createElement("h2", {}, "I am H2 tag")]
  )]
);

root.render(parent);
