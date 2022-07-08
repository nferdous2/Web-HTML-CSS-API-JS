
const multiLineNew = `this is is multi line
this is second line
this is third line
fourth line
`;
const friends = ['abul', 'babul', 'kabul', 'sabul'];
const count = 5;
const old2 = `<h3 class="friend-name">Friend-${count}</h3>`;
const new1 = `<h3 class="friend-name">Friend-${friends.length}</h3>`;
console.log(new1)
const first = 'Mamun';
const last = 'Chowdhury';
const fullOld = 'This person name is ' + first + ' ' + last;
const fullNew = `This person name is: ${first} ${last}. Has money ${(friends.length + 10) * 500}. He lives in Dhaka.`;
console.log(fullNew);