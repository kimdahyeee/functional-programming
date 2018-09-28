//filter 함수 추가하여 리펙토링
function filter(list, predicate) {
    var new_list = [];
    for (var i = 0, len = list.length; i < len; i++) {
        if (predicate(list[i])) new_list.push(list[i]);
    }
    return new_list;
}

var users = [
    { id: 1, name: "ID", age: 32 },
    { id: 2, name: "HA", age: 25 },
    { id: 3, name: "BJ", age: 32 },
    { id: 4, name: "PJ", age: 28 },
    { id: 5, name: "JE", age: 27 },
    { id: 6, name: "JM", age: 32 },
    { id: 7, name: "HI", age: 24 }
];

var temp_users = [];
//개선
temp_users = filter(users, function(user){return user.age < 30;});
console.log(temp_users.length); // 4

var ages = [];
for (var i = 0, len = temp_users.length; i < len; i++) {
    ages.push(temp_users[i].age);
}
console.log(ages); //[25,28,27,24]

var temp_users = [];
//개선
temp_users = filter(users, function(user){return user.age >= 30;});
console.log(temp_users.length); // 3

var names = [];
for (var i = 0, len = temp_users.length; i < len; i++) {
    names.push(temp_users[i].name);
}
console.log(names); //["ID", "BJ", "JM"]
