var superman = {

    heroName: 'Superman',

    sayHello: function() {
        console.log("Hello, I'm " + this.heroName );
    }
};

superman.sayHello();

passedSayHello = superman.sayHello;

passedSayHello();

passedSayHello.call(superman)