//#2 Функция возврата минимального элемента в массиве
let arr = [2, 65, 76, 34, 23, 89, 4, 8, 6, 54];

function getMin(arr)
{
    return [ Math.min.apply(Math, arr) ];

}
alert(getMin(arr) );
 
//#3 Четные в массиве
getEven = arr.filter(n => n % 2 !== 1);
alert(getEven);

//#4
let users =
[
    {name: 'Jonny Walker', birthDate: '1995-12-17'},
    {name: 'Andrew', birthDate: '2001-10-29'},
    {name: 'Victor', birthDate: '1998-11-09'},
]
let ent = prompt('Enter a username: ', 'user');
let user = users.find(item => item.name == ent);
alert("name: " + user.name + " birthDate: " + user.birthDate);
/************************************************************/
let searchByName = users.indexOf(user);
console.log(users[searchByName]);
