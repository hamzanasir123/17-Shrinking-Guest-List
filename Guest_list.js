"use strict";
let Guest_list = ['Kashif', 'Waqas', 'Naveed',];
// for(let i=0; i<Guest_list.length; i++)
//     console.log('Dear Mr. ' + Guest_list[i] + '\n\nIts my pleasure to invite you in our party.\n\nThankyou!\n\n') ;
// }
let absent_Guest = 'Kashif';
let new_Guest = 'Azher';
Guest_list[0] = new_Guest;
// for(let i=0; i<Guest_list.length; i++){
//     console.log('Dear Mr. ' + Guest_list[i] + '\n\nIts my pleasure to invite you in our party.\n\nThankyou!\n\n') ;
// }
console.log(`${absent_Guest} is not coming to the party.\n\n`);
console.log('Good News! We find a big table so we are inviting 3 more guests.\n\n');
Guest_list.unshift('Shahmir');
Guest_list.splice(2, 0, 'Saam');
Guest_list.push('Kashif');
for (let i = 0; i < Guest_list.length; i++) {
    console.log('Dear Mr. ' + Guest_list[i] + '\n\nIts my pleasure to invite you in our party.\n\nThankyou!\n\n');
}
console.log('\nSorry we can not arrange big table, Only two peoples will be invited.');
while (Guest_list.length > 2) {
    let remove_Guest = Guest_list.pop();
    console.log(`Sorry Mr. ${remove_Guest}, you are not invited for the dinner.\n`);
}
for (let i = 0; i < Guest_list.length; i++) {
    console.log('Dear Mr. ' + Guest_list[i] + '\n\nYou are still invited.\n\nThankyou!\n\n');
}
Guest_list.splice(0, 2);
console.log(Guest_list);
