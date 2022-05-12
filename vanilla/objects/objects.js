// In JS objects are Map<String, Value>
const a1 = {};                          // empty object
const a2 = "bar";                       // single value object
const a3 = {type: "bar", color: "red"}; // multiple value object
// This means that a Javascript object is just a multi-level 'hash map' of key/value pairs, with no class definition needed.


var cust1 = {
    name: "John Smith",
    street: "123 Main",
    city: "Pittsburgh",
    state: "PA",
    email: "jsmith@aol.com",
    balance: 120.50,
    payDownBal: function (amtPaid) {
        this.balance -= amtPaid;
    },
    addToBal: function (amtCharged) {
        this.balance += amtCharged;
    }
};

// Retrieve the value for the object
document.write("Customer Name : ", cust1.name, "<br />");

// Change the value for the object
cust1.street = "215 Main St";
document.write("Customer Address : ", cust1.street, "<br />");

// Add a property to cust1
cust1.country = "US";
document.write("Customer Country : ", cust1.country, "<br />");

// Delete a property
delete cust1.country;

// Cycle through all the properties for the object
for (var prop in cust1) {
    if (cust1.hasOwnProperty(prop)) {
        document.write(prop, "<br />");
    }
}

// Check if a property is in an object
document.write("name in cust1 : ", "name" in cust1, "<br />");

// Interact with an object using a function
function getInfo(cust) {
    return cust1.name + " lives at " + cust1.street + " in " + cust1.city + " " + cust1.state + " email : " + cust1.email + " and has a balance of $" + cust1.balance;
}

document.write(getInfo(cust1), "<br />");

// Call object methods
cust1.payDownBal(20.50);
cust1.addToBal(10.00);

document.write(getInfo(cust1), "<br />");

// Create an object constructor
function Customer(name, street, city, state, email, balance) {
    this.name = name;
    this.street = street;
    this.city = city;
    this.state = state;
    this.email = email;
    this.balance = balance;

    this.payDownBal = function (amtPaid) {
        this.balance -= amtPaid;
    };
    this.addToBal = function (amtCharged) {
        this.balance += amtCharged;
    };
}

var cust2 = new Customer("Sally Smith", "234 Main", "Pittsburgh", "PA", "ssmith@aol.com", 0.00);

cust2.addToBal(15.50);

// Define a shared prototype property for all objects
Customer.prototype.isCreditAvail = true;

// We define prototype methods that are shared by every object created
Customer.prototype.toString = function () {
    return this.name + " lives at " + this.street + " in " + this.city + " " + this.state + " email : " + this.email + " and has a balance of $" + this.balance.toFixed(2) + " Creditworthy : " + this.isCreditAvail;
};

document.write(cust2.toString());
