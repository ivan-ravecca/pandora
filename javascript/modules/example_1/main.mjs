import bar from "./workshop.mjs";

bar("Baaar");

// Example where lexical scope wins
// var workshop = {
//     teacher: "Kyle",
//     ask(question) {
//         setTimeout(()=>{
//             console.log(this.teacher, question);
//         }, 100);
//     }
// };

// workshop.ask("Is this lexical 'this'?");

// Example where 
var workshop = {
    teacher: "Kyle",
    ask:(question) => {
        console.log(this.teacher, question);
    }
};

// workshop.ask("Is this lexical 'this'?"); // undefined, there is no this
// workshop.ask.call(workshop, "Is this lexical 'this'?"); // undefined, still no this
// solution, do not use arrow or this in that context

// var arrowFunc = (param) => {
//     console.log(param);
// };
// var woow = new arrowFunc("would it work?"); // exception arrow func are not constructors