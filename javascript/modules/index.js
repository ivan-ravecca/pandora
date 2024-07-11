var workshop = (function Module(teacher){
    var publicAPI = {ask, };
    return publicAPI; // closure
    // *********

    console.log("pre compiler working, you won't see this message");
    function ask(question) { // because of lexical scope
        console.log(teacher, question);
    }
})("Kyle");

workshop.ask(", Is this a module?")