// In one of the previous sections, we had an practice problem where you had to
// reverse a string. Do the same thing with an array, but use the `reduce` and
// `concat` methods to avoid local variables.
//
//      reverse([ 1, 2, 3, 4, 5 ]);
//      //=> [ 5, 4, 3, 2, 1 ]
//
//      reverse([ "hello", "world" ]);
//      //=> [ "world", "hello" ]
//
var reverse = function (a) {
  a.reverse(a);
  return a;
};

// Did you know that you could have arrays within arrays? This is perfectly
// legal JavaScript:
//
//     var nestedArray = [ 1, 2, [ 10, 20 ], 3, 4, 5 ];
//
//     nestedArray[0];
//     //=> 1
//
//     nestedArray[1];
//     //=> 2
//
//     nestedArray[2];
//     //=> [ 10, 20 ]
//
//     nestedArray[2][0];
//     //=> 10
//
// For this problem, write a function using `reduce` that "flattens" a possibly
// nested array into a single array.
//
//     flatten(nestedArray);
//     //=> [ 1, 2, 10, 20,  3, 4, 5 ]
//
//     flatten([ 1, [2, 3], 4, [5, 6, 7], 8 ]);
//     //=> [ 1, 2, 3, 4, 5, 6, 7, 8 ]
//
// You'll also want to use the `concat` method to make this work.
//
var flatten = function (a) {
  var b=[];
  //a.reduce(a);
  //return a;
  for(var i=0;i<a.length;i++)
  {
  b=b.concat(a[i]);
  //return b;
  }
  return b;
  
};

// Using `range` and a chain of array methods, write a function that accepts a
// number `n` and returns the sum of all of the positive multiples of 3 and 5 that
// are smaller than or equal to `n`.
//
//     sumOfMultiplesOf3And5(100);
//     //=> 2418
//
//     sumOfMultiplesOf3And5(50);
//     //=> 593
//
//     sumOfMultiplesOf3And5(0);
//     //=> 0
//
var sumOfMultiplesOf3And5 = function (a) {
  var sum=0;
    for(var i=0;i<=a;i++)
  {
    if(i%3==0||i%5==0)
   {
    // var sum=0;
    sum=sum+i;
   }
  }
    return sum;
  //return sum;
};

// Write a function called atLeastOneVowel that accepts a string and
// returns true if that word contains at least one vowel. Do not use a
// `for` loop or a `forEach` loop.
//
//     atLeastOneVowel("hello");
//     //=> true
//
//     atLeastOneVowel("dry");
//     //=> false
//
//     atLeastOneVowel("sdfjkl");
//     //=> false
//
var atLeastOneVowel = function (a) {
  if(a.includes("e"))
  {
    return true;
  }
  else
  {
    return false;
  }
};

// Write a function that accepts a list of tweets, and returns the
// longest tweet that contains the word `awesome` or the empty string
// if no tweet contains the word awesome.
//
//     logestAwesomeTweet([ "awesome", "longer tweet with awesome", "not awesome", "empty" ]);
//     //=> "longer tweet with awesome"
//
//     longestAwesomeTweet([ "hello", "world" ]);
//     //=> ""
//
var longestAwesomeTweet = function (a) {
  var mstring=""
  for(var i=0;i<a.length;i++)
  {
    if(a[i].includes("awesome")&&(a[i].length>mstring.length))
    {
      mstring=a[i];
    }
  }
  return mstring;
};

// Write a function that accepts an array of HTMLElements and returns an
// array of their content.
//
//     elementsToContent(["<p>this is a paragraph</p>", "<li>list item</li>", "<a>link!</a>" ]);
//     //=> [ "this is a paragraph", "list item", "link!" ]
//
//     elementsToContent([ "<h1>This is an important heading!</h1>", "<h5>this is not as important</h5>" ]);
//     //=> [ "This is an important heading!", "this is not as important" ]
//
var elementsToContent = function (a) {
  var b=[];
  for(i=0;i<a.length;i++)
  {
     b=b.concat(a[i].substring(a[i].indexOf(">")+1,a[i].lastIndexOf("<")));
  }
  return b;
};

// In a previous section, we created a function called `randUpTo` that
// returned a random integer up to an upper bound. Using that function
// along with the `range` function, write a method called
// `randomArray` that accepts two numbers, `length`, and `max`. It
// should return an array of length `length` that contains random
// numbers up to the value `max`.
//
//     randomArray(10, 100);
//     //=> [ 56, 32, 4, 92, 73, 75, 11, 10, 26, 4 ]
//
//     randomArray(5, 10);
//     //=> [ 2, 0, 3, 9, 10 ]
//
var randomArray = function (a,b) {
  //c=b.length;
  var arr=[];
 for(i=0;i<a;i++)
{
  var res=Math.floor(Math.random()*b);
  if(!arr.includes(res))
  arr[i]=res;
  //return res;
}
return arr;
};

// Using the `randomNums` function from above, write a function called
// `randomElements` that accepts an array, and a number, `n` and
// returns a new array that consists of `n` random elements selected
// from the input array. Duplicates are allowed.
//
// randomElements([ "red", "orange", "yellow", "green", "blue", "purple", "gray", "black", "white" ], 5);
// //=> [ "green", "green", "blue", "orange", "black" ]
//
// randomElements([ "clubs", "diamonds", "hearts", "spades" ], 3);
// //=> [ "hearts", "diamonds", "hearts" ]
//
var randomElements = function (a,b) {
  //var arr=[];
 while(a.length>b)
  {  var res=Math.floor(Math.random()*a.length);
    a.splice(res,1);
  }
  return a;
};

____________
// New York Baby Names: Beginning 2007
// This data was generated from open data available via the New York State Department of Health
// more info here: http://www.health.ny.gov/statistics/vital_statistics/",
// Link: https://health.data.ny.gov/api/views/jxy9-yhdk/rows.json

function namez(names)
{
  return names[0]==='z';
}
console.log("\n"+names.filter(namez)+"\n");

function Havez(names)
{
  return names.includes("z");
}
console.log(names.filter(Havez));


var Upperw=function(names)
{
  return names.charAt(0).toUpperCase()+names.slice(1);
}
var abc=function(names)
{
 return names.includes("w"); 
}
var final=function(a)
{
  var names = a.filter(abc);
    names = names.map(Upperw);
    return names;
};
console.log(final(names)+"\n");


var Vowels=function(names)
{
  return names.includes('a','e','i','o','u');
}
console.log(names.every(Vowels)+"\n");

var TLetter=function(names)
{
  return names.length==2;
}
console.log(names.filter(TLetter)+"\n");


var Mname=function(names)
{
  return names=="vivek";
}
console.log(names.some(Mname)+"\n");


console.log(names.sort()[0]+"\n");


console.log(names.filter(Havez).length+"\n");

function numvowels(a){
var count = 0;
for(var i=0;i<a.length;i++){
if(a[i]==='a'||a[i]==='e'||a[i]==='i'||a[i]==='o'||a[i]==='u'){
count++;
}
}
return count;
}
var max = function(a){return Math.max(...a.map(numvowels));};
var m = max(names);
console.log(m+"\n");

function MaxNumVow(a){return numvowels(a) === m;}
console.log(names.filter(MaxNumVow)+"\n");