function megaFriend(friends) {
    if (Array.isArray(friends) == false) {
        return 'please provide an array of string';
    }
    let mega = friends[0];
    for (const friend of friends) {
        if (friend.length > mega.length) {
            mega = friend;
        }
    }
    return mega;
}
const friends = ['kutub', 'Lion', 'Shamol', 'Sabbir'];
const myBigBuddy = megaFriend(123);
// console.log(myBigBuddy);
if (friends.indexOf('Lion') != -1) {
    // console.log('lion exits')
}
if (friends.includes('Lion')) {
    // console.log('lion exits using includes')
}
//concat
const first = [1, 3, 5];
const second = [4, 6, 8, 9];
const combined = first.concat(second);
console.log(combined);