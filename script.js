//print odd numbers in array
(() => {
          var arr2=[1,2,3,4,5,6,7,8,9,10,12,13,14,15,16,17];
          let odds1=arr2.filter(n1=>n1%2)
          console.log(odds1)
        })();
//---------------
var arr14=[1,2,3,4,5,6,7,8,9,10,12,13,14,15,20,221,23];
var oddNumbers=(arr14)=>{
     let odds2=arr14.filter(n=>n%2)

console.log(odds2)
};
oddNumbers(arr14)
//------------
var arr1=[1,2,3,4,5,6,7,8,9,10,12,13,14,15];
function oddNumbers(arr1){
     let odds=arr1.filter(n=>n%2)
     console.log(odds)

};
oddNumbers(arr1)

//----------------------------
//Title caps in a string array
const string1=function(){
     function toTitleCase(str){
          str=str.toLowerCase().split(' ');
          for(i=0;i<str.length;i++){
               str[i]=str[i].charAt(0).toUpperCase()+str[i].slice(1);

          }
          return str.join(' ');
     }
     console.log(toTitleCase("WELCOME TO GUVI"));

}
string1();
//-----------------------------------
(()=>{function toTitleCase1(str1){
     str1=str1.toLowerCase().split(' ');
     for(i=0;i<str1.length;i++){
          str1[i]=str1[i].charAt(0).toUpperCase()+str1[i].slice(1);
     }
     return str1.join(' ');
}
console.log(toTitleCase1("WELCOME TO GUVI"));

})()
//-------------
const string=()=>{
     function toTitleCase(str){
          str=str.toLowerCase().split(' ');
          for(i=0;i<str.length;i++){
               str[i]=str[i].charAt(0).toUpperCase()+str[i].slice(1);
          }
          return str.join(' ');
}

console.log(toTitleCase("WELCOME TO GUVI"));
}
string();
// ---------------------------------
(()=>{
     var b=[1,2,3,4,5,6,7,8,9,10];
     var total1=0;
     for(var i in b){
          total1 +=b[i];
     }
     console.log(total1);
})()

//------------------------
var a=[1,2,3,4,5,6,7,8,9,10];
function sum(a){
     var total=0;
     for(var i in a){
          total +=a[i];
     }
     console.log(total)
}
sum(a)
//-------------------------------
var c=[1,2,3,4,5,6,7,8,9,10];
var sum=(c)=>{
     var d=0;
     for(var i in c){
          d +=c[i];
     }
     console.log(d)
}
sum(c)
//-------------------------
//retrun all the prime numbers
const aa=[2,3,4,5,6,7,8,9,10,11];
function isprime(num){
     for(let start=2;num>start;start++){
          if(num%start==0){
             return false;
          }
     }
     return num>1;
}
console.log(aa.filter(isprime));

(()=>{
     var arr=[1,2,3,4,5,6,7];
     numArray=arr.filter((number)=>{
          for(var i=2;i<=Math.sqrt(number);i++){
               if(number%i===0)
               return false;
          }
          return true;
            })
            console.log(numArray)
})();
//----------------------------
const array=[2,3,4,5,6,7,8,9,10,11];
var isprime=(num)=>{
     for(let start=2;num>start;start++){
          if(num%start===0){
               return false;
          }
     }
     return num>1;
}
console.log(array.filter(isprime));
// //-------------------------------------
function palindromeArray(arr){
     let ispalindrome=true;
     for(let i=0;i<arr.length/2;i++){
          if(arr[i]==arr[arr.length-i-1]){
               ispalindrome=false;
               break;
          }
     }
     return ispalindrome;
}
console.log(palindromeArray([1,2,2,1]));
//------------------------------------------
(()=>{
     let palindromeArray=(arr1)=>{
          let palindrome=true;
          for(let i=0;i<arr1.length/2;i++){
               if(arr1[i]!==arr1[arr1.length-i-1]){
                    palindrome=false;
                    break;
               }
          }
          return palindrome;
     }
     console.log(palindromeArray([1,2,3,4]));
})()
//-----------------------------------------------------
let palindromeArr=(arr1)=>{
     let palindrome=true;
     for(let i=0;i<arr1.length/2;i++){
          if(arr[i]!==arr1[arr1.length-i-1]){
               ispalindrome=false;
               break;
          }
     }
     return ispalindrome;
}
console.log(palindromeArray([1,2,2,1]));
// //-----------------------------------------------
//median of the two sorted array
function median(a,b){
     let c=[...a,...b].sort((a,b)=>a,b);
     const half=c.length/2|0;
     if(c.length%2)
     return c[half];
     return(c[half]+c[half-1])/2;
}
const arr5=[1,12,15,26,38];
const arr6=[2,13,17,30,45];
console.log(median(arr5,arr6));

//----------------------------------------------------
(()=>{
    const median=(a,b)=>{
          let c=[...a,...b].sort((a,b)=>a,b);
          const half=c.length/2|0;
          if(c.length%2)
          return c[half];
          return(c[half]+c[half-1])/2;
     }
     const arr1=[1,12,15,26,38];
     const arr2=[2,13,17,30,45];
     console.log(median(arr1,arr2));
     })();
     //--------------------------------
   var  median=(a,b)=>{
          let c=[...a,...b].sort((a,b)=>a,b);
          const half=c.length/2|0;
          if(c.length%2)
          return c[half];
          return(c[half]+c[half-1])/2;
     }
     const arr3=[1,12,15,26,38];
     const arr4=[2,13,17,30,45];
     console.log(median(arr3,arr4));
//      //-------------------------------------------
//duplicate from an array function
     function Unique(num){
          let duplicate=[...new Set(num)];
          console.log(duplicate)
     }
     var num=[111,11,11,111,22,222,222];
     Unique(num);
     //--------------------------------------------
     (()=>{
          let num=[1,1,1,2,2,2,3,3,3];
          let UniqueNum=[...new Set(num)];
          console.log(UniqueNum);
     })();
     //---------------------------------------------
    var Unique=(num)=>{
          let duplicate=[...new Set(num)];
          console.log(duplicate)
     }
     var num=[111,11,11,111,22,222,222];
     Unique(num);
//      //---------------------------------------------------
//Rotate an array by k Times 
     function rotate(num,k){
          let i=0;
          while (i<k){
               num.unshift(num.pop())
               i++
          }
          return num;
     }
var num =[1,2,3,4,5,6,7];
var k=3;
console.log(rotate(num,k));
//-----------------------------------------------------------
(function(){
     var rotate=function(nums,k){
          let i=0;
          while(i<k){
               num.unshift(nums.pop())
               i++
          }
     }     
     return nums;
})();
     var nums=[1,2,3,4,5,6,7]
var k=2;
console.log(rotate(num,k));
//----------------------------------

var rotate=(num,k)=>{
     let i=0;
     while (i<k){
          num.unshift(num.pop())
          i++
     }
     return num;
}
var num =[1,2,3,4,5,6,7];
var k=4;
console.log(rotate(num,k));
//--------------------------------------
