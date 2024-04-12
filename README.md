# Objects

On this lesson we learned how objects work in javaScript. Objects are a way to store data in key-value pairs. They are similar to arrays, but instead of using indexes to access the data, we use the keys (or properties) to access the data.

Objects are created using curly braces {} and properties are defined using key-value pairs. The key is a string that describes the property and the value can be any data type.

```javascript
let person = {
  name: "John",
  age: 32,
  isStudent: false,
};
```

Notice is not necessari to wrap the key in quotes. But we can do it if we want to.

## Accessing Properties

We can access the properties of an object using the dot notation or the bracket notation.

```javascript
console.log(person.name); // John
console.log(person["age"]); // 32
```

The main difference between the two is that the bracket notation allows us to access the properties using variables.

```javascript
let key = "name";
console.log(person[key]); // John
```

Cool right? 😎

## Adding and Modifying Properties

We can also add new properties to an object by simply assigning a value to a new key.

```javascript
person.city = "New York";
console.log(person); // {name: "John", age: 32, isStudent: false, city: "New York"}
```

## Deleting Properties

We can delete properties from an object using the `delete` keyword.

```javascript
delete person.isStudent;
console.log(person); // {name: "John", age: 32, city: "New York"}
```

This is the most common way to delete a property. As usual, there are many ways to do it. But this is the most common.

## Looping Through Properties

We can loop through the properties of an object using a `for...in` loop.

```javascript
for (let key in person) {
  console.log(key, person[key]);
}

// Output:
// name John
// age 32
// city New York
```

## Object keys and values

There are two methods that can be used to get the keys or values of an object. `Object.keys()` and `Object.values()`.

```javascript
console.log(Object.keys(person)); // ["name", "age", "city"]
console.log(Object.values(person)); // ["John", 32, "New York"]
```

As you can see, these methods return an array with the keys or values of the object.

## Arrays inside Objects

Objects can contain any data type, including arrays.

```javascript
let person = {
  name: "John",
  age: 32,
  isStudent: false,
  hobbies: ["reading", "swimming", "coding"],
};
```

We can access the elements of the array using the bracket notation.

```javascript
console.log(person.hobbies[0]); // reading
```

In case we want to add a new element to the array, we can do it like this:

```javascript
person.hobbies.push("running");
console.log(person.hobbies); // ["reading", "swimming", "coding", "running"]
```

As you can see, we can use the push method to add a new element because it's an array.

## Nested Objects

Objects can also contain other objects.

```javascript
let person = {
  name: "John",
  age: 32,
  address: {
    street: "123 Main St",
    city: "New York",
  },
};
```

We can access the properties of the nested object using the dot notation.

```javascript
console.log(person.address.city); // New York
```

# Array matrix

A matrix is a two-dimensional array. It is an array of arrays. Each element of the main array is an array itself.

```javascript
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
```

We can access the elements of the matrix using two indexes.

```javascript
console.log(matrix[0][0]); // 1
console.log(matrix[1][2]); // 6
```

Remember the ship battle game? That's a matrix. The game board was a two-dimensional array.

## Looping Through a Matrix

This process is a little bit more complex than looping through a one-dimensional array. We need to use nested loops.

```javascript
for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    console.log(matrix[i][j]);
  }
}
```

"i" in this case is the index of the rows and "j" is the index of the columns.

This part of the lesson is a little bit more complex. But don't worry, you will get used to it with practice. 💪
