const Pet = (props) => {
    return React.createElement("div", {}, [
        React.createElement("H1", {}, props.name),
        React.createElement("H2", {}, props.animal)
    ]) 
};

export default Pet;