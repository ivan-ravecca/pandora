const Pet = (props) => {
    return React.createElement("div", {}, [
        React.createElement("H2", {}, props.name),
        React.createElement("H3", {}, props.animal)
    ]) 
};
const animals = [
    {
        animal: "Dog",
        name: "Lassie"
    },
    {
        animal: "Cat",
        name: "Gardfield"
    }
];
const App = () => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, "React is working!"),
        React.createElement(Pet, animals[0]),
        React.createElement(Pet, animals[1]),
    ]);
};
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));