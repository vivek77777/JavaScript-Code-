// Write a function called `isVowel` that returns `true` if the input is a
// single character and either an upper or lower-case a, e, i, o, or
// u. It should return false otherwise.
//
//    isVowel("a");
//    //=> true
//
//    isVowel("E");
//    //=> true
//
//    isVowel(1);
//    //=> false
//
//    isVowel("Ea");
//    //=> false
//
//    isVowel("Y");
//    //=> false
//
var isVowel = function (a) {
  if(typeof(a)=="string"){
  while(a.length==1)
  {
    if(a=="a"||a=="e"||a=="i"||a=="o"||a=="u"||a=="A"||a=="E"||a=="I"||a=="O"||a=="U")
    return true;
  else
  return false;
  }
  return false;
  }
  else
  return false;
  
};


// Write a function called `isLowerCaseLetter` that returns `true` if
// the input is a single letter and lower-case. It should return false otherwise.
//
//    isLowerCaseLetter("a");
//    //=> true
//
//    isLowerCaseLetter("A");
//    //=> false
//
//    isLowerCaseLetter(1);
//    //=> false
//
//    isLowerCaseLetter("ae");
//    //=> false
//
//    isLowerCaseLetter(true);
//    //=> false
//
var isLowerCaseLetter = function (a) {
    if(a.length===1){
        if (a>='a'&&a<='z')
            return true;
        else
            return false;
    }
    else
        return false;
};


// Write a function called `sumUpTo` so that it accepts a positive number `n`
// and sums the first `n` positive integers. For example, if you call `sumUpTo(5)`
// it should sum the numbers 1 through 5 inclusive. It should throw an error if the
// input number is negative.
//     sumUpTo(100);
//     //=> 5050
//
//     sumUpTo(10);
//     //=> 55
//
//     sumUpTo(0);
//     //=> 0
//
//     sumUpTo(-10);
//     //=> input must be a zero or a positive number!
//
var sumUpTo = function (a) {
    sum=0;
    while(a>=0)
    {
    sum=sum+a;
    a--;
  }
  return sum;
};


// Write a function called `sumAToB` so that it accepts two parameters
// `a` and `b` and sums the numbers between `a` and `b` inclusive. Note
// that `a` may be larger than `b`, in which case you'll need to work
// backawards.
//
//     sumAToB(10, 20);
//     //=> 165
//
//     sumAToB(0, -15);
//     //=> 120
//
//     sumAToB(-10, 500);
//     //=> 125195
//
//     sumAToB(10, 10);
//     //=> 10
//     sumAToB("hello", "world");
//     //=> inputs should be numbers!
//
var sumAToB = function (a,b) {
  sum=0;
  if(a>b)
    {
      a=a+b;
      b=a-b;
      a=a-b;
    }
  for(i=a;i<=b;i++)
  {
      sum=sum+a;
      a=a+1;
      //return sum;
   }
  return sum;
};


// Write a function called `countVowels` that accepts a string and
// returns the number of vowels contained in that string. You'll want
// to use the `isVowel` helper function from above. It should throw an
// error if the input is not a string
//
//     countVowels("hello world!");
//     //=> 3
//
//     countVowels("omg this is a hilarious tweet about nothing");
//     //=> 16
//
//     countVowels("");
//     //=> 0
//
//     countVowels(true);
//     //=> input to countVowels must be a string!
//
var countVowels = function (a) {
  count=0;
        try{
          if(typeof(a)!="string")
        throw "input to countVowels must be a string!";
        }
        catch(e){
          console.log(e);
          exit(0);
        }
        for(i=0;i<a.length;i++)
        {
        if(isVowel(a[i])===true)
        {
          count=count+1;
        }
        //return count;
        }
        return count;
};


// Write a function that accepts a string and returns the same string, only in
// reverse!
//
//     reverse("hello world!");
//     //=> !dlrow olleh
//
//     reverse("omg this is a hilarious tweet about nothing");
//     //=> gnihton tuoba teewt suoiralih a si siht gmo
//
//     reverse("");
//     //=>
//
//     reverse(true);
//     //=> input to reverseString must be an string!
//
var reverseString = function (a) {
  try{
          if(typeof(a)!="string")
        throw "input to countVowels must be a string!";
        }
        catch(e){
          console.log(e);
          exit(0);
        }
        var k="";
        for(i=a.length-1;i>=0;i--)
        {
          k=k+a[i];
        }
        return k;
};


// A number is a prime number if it is only evenly divisible by 1 and itself
// (although we don't consider 1 a prime number, so 2 is the first prime
// number). Write a function called `isPrime` that accepts a number `p` as an
// argument and returns `true` if it is prime, `false` otherwise.
//
//     isPrime(101);
//     //=> true
//
//     isPrime(13);
//     //=> true
//
//     isPrime(1);
//     //=> false
//
//     isPrime(2);
//     //=> true
//
//     isPrime("hello");
//     //=> false
//
//     isPrime(-101);
//     //=> false
//
var isPrime = function (a) {
    var flag = false;
    if(typeof a === 'number'){
        if(a===2||a===3)
            flag = true;
        else
            for(var i=2;i<a/2;i++)
            {    
                if(a!==i && a%i===0)
                    return false;
                else
                    flag = true;
            }
            
    }
    return flag;
};


// Using the `isPrime` function, write a function that accepts a number as
// input sums all the primes smaller than that number.
//
//     sumPrimesUpTo(100);
//     //=> 1060
//
//     sumPrimesUpTo(0);
//     //=> 0
//
//     sumPrimesUpTo(1000);
//     //=> 76127
//
//     sumPrimesUpTo(2);
//     //=> 2
//
//     sumPrimesUpTo("whatever");
//     //=> input should be a number
//
var sumPrimesUpTo = function (a) {
  if(typeof(a)=="number")
  { var sum=0;
    for(i=2;i<=a;i++)
    {
     if(isPrime(i))
      {
        sum=sum+i;
    }
    }
  return sum;
  }
  else
  {
    return " input should be a number";
  }
};


// Using the `isPrime` function, write a function that takes in a
// positive integer, n, and returns the first n numbers.
//
//     sumOfFirstNPrimes(10);
//     //=> 129
//
//     sumOfFirstNPrimes(100);
//     //=> 24133
//
//     sumOfFirstNPrimes(1000);
//     //=> 3672913
//
//     sumOfFirstNPrimes(0);
//     //=> 0
//
//     sumOfFirstNPrimes(1);
//     //=> 2
//
//     sumOfFirstNPrimes(-10);
//     //=> input number should be zero or a positive number!
//
var sumOfFirstNPrimes = function (a) {
    var count=0,sum=0,i=0;
    try{
        if(a<0) throw "input number should be zero or a positive number!";
    }
    catch(e){
        console.log(e);
        return;
    }
    while(count<a){
        if(isPrime(i)){
            count++;
            sum += i;
            console.log(sum);
        }
        i++;
    }
    return sum;
};


// A _palindrome_ is a string that reads the same forwards and backwards. Write
// a function that accepts a string of arbitrary letters, numbers, and symbols, and
// returns true if it's a palindrome. For example:
//
//      isPalindrome("kayak");
//      //=> true
//
//      isPalindrome("A man, a plan, a canal, Panama");
//      //=> true
//
//      isPalindrome("hello world");
//      //=> false
//
// Let's start by writing a function to remove all non-letter characters
// from the input.
//
//     removeNonLetters("A man, a plan, a canal, Panama");
//     //=> AmanaplanacanalPanama
//
//     removeNonLetters("this is a string; it has some punctuation!");
//     //=> thisisastringithassomepunctuation
//
var removeNonLetters = function (a) {
 rnl="";
 for(i=0;i<a.length;i++)
 {
  if((a[i]>='a'&&a[i]<='z')||(a[i]>='A'&&a[i]<='Z'))
  {
   rnl=rnl+a[i];
  }
 // return a;
 }
 return rnl;
};


// Now use `removeNonLetters`, along with the `reverse` function from above to
// determine if the string is a palindrome.
var isPalindrome = function (a) {
  try{
  if(isNaN(a)==false) throw "Number"
}
catch(e){
 return false;
}
//var b=a.toLowerCase();
var a=removeNonLetters(a).toLowerCase();
var b=reverseString(a)
if(a==b)
{
  return true;
}
else
{
  return false;
}
};