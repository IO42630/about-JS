class User {
  logName() {
    console.log(this);
  }
}

(new User).logName(); // logs User {}


function logFunction() {
  console.log(this);
}

new logFunction(); // logs logFunction {}
