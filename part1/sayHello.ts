function sayHello(name?: string) {
    if (name != undefined)
        console.log(`Hello ${name}`);
    else 
        console.log('Hello World');
}

sayHello("Toto");
sayHello();