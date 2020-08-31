var bob = {

    personName: 'Bob',

    sayHello: function() {
        console.log("Hello, I'm " + this.personName + ".");
    }
};

bob.sayHello();


// passedSayHello belongs to the global scope -
passedSayHello = bob.sayHello;
passedSayHello();

passedSayHello.call(bob)
