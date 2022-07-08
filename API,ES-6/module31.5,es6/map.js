const persons = [{
    name: 'komola', id: '10'
},
{ name: 'kola', id: 50 },
{ name: 'mola', id: 20 },
{ name: 'lkka', id: 30 }]
// const person = persons.map(pr=>{
//     return pr.name
// });
const person = persons.map(pr => {
    return pr.id * 2
});
// console.log(person)
 //array এর মধ্যে অনেকগুলো সংখ্যার মধ্যে 1o theke বড় সংখ্যা গুলো আমাকে বের করে এনে আরেকটা array এর মধ্যে রাখতে হবে 
 const nums=[1,4,6,10,50,30]
 const larger= nums.filter(num => num>10)
 console.log(larger)
 /*
filter হচ্ছে  যে শর্ত দেওয়া হয় সে শর্ত  ফুল ফিল করলে পুরো এলিমেন্টকে দিবে . যতগুলো পাবে ততখুলো দিবে । না পাইলে খালি এরে দিবে 
find হচ্ছে  যে শর্ত দেওয়া হয় সে শর্ত  ফুল ফিল করলে পুরো এলিমেন্টকে দিবে, শুধু মাত্র প্রথম জনকে দিবে। না পাইলে আন্ডিফাইন দিবে 
*/
const , let হচ্ছে  ব্লক স্কোপের বাহিরে কাজ করে না। function scope এর বাহিরে কাজ করে না। 
var ব্লক  স্কোপের বাহিরে কাজ করে।  var function scope এর বাহিরে কাজ করে না। 
ReferenceError: name1 is not defined 
ReferenceError: যখন কোন ভ্যারিয়েবলকে তৈরি না করে এক্সেস করা হয় 
TypeError: Assignment to constant variable.
const দিয়ে ভ্যারিয়েবল  তৈরি করলে সেই ভ্যারিয়েবলে এক বারিই ভ্যালু এসাইন করতে পারি। একবারের বেশি দুইবার ভ্যালু এসাইন করলে type error দেখাবে 
let দিয়ে দিয়ে ভ্যারিয়েবল  তৈরি করলে বারবার ভ্যালু এসাইন করা যায়। 