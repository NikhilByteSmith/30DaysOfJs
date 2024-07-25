// Task 1
let book1 = {
    title: "Life of Joy",
    author: "abc",
    year: 2010    
};
console.log(book1);

// Output:
// { title: 'Life of Joy', author: 'abc', year: 2010 }

// Task 2
console.log(book1.author);
console.log(book1.title);

// Output:
// abc
// Life of Joy

// Task 3
book1.greet = function() {
   return "Hello " + this.author;
};
console.log(book1.greet());

// Output:
// Hello abc

// Task 4
changeYear = function(year) {
    book1.year = year;
};
changeYear(2012);
console.log(book1.year);

// Output:
// 2012

// Task 5
library1 = {
    name: "Central Library",
    books: [book1]
};
console.log(library1);

// Output:
// {
//     name: 'Central Library',
//     books: [
//       {
//         title: 'Life of Joy',
//         author: 'abc',
//         year: 2012,
//         greet: [Function: greet]
//       }
//     ]
// }

// Task 6
console.log(library1.name);
library1.books.forEach(book => {
    console.log(book.title);
});

// Output:
// Central Library
// Life of Joy

// Task 7
const book2 = {
    title: "The Great Adventure",
    author: "def",
    year: 1975,
    getTitleAndYear: function(str) {
        return `${str} ${this.title} was published in ${this.year}`;
    }
};
console.log(book2.getTitleAndYear("Greetings"));

// Output:
// Greetings The Great Adventure was published in 1975

// Task 8
for (let key in book1) {
    console.log(`The key is ${key} and its value is ${book1[key]}`);
}

// Output:
// The key is title and its value is Life of Joy
// The key is author and its value is abc
// The key is year and its value is 2012
// The key is greet and its value is function() {
//    return "Hello " + this.author;
// }

// Task 9
console.log(Object.keys(book1));
console.log(Object.values(book1));

// Output:
// [ 'title', 'author', 'year', 'greet' ]
// [ 'Life of Joy', 'abc', 2012, [Function: greet] ]
