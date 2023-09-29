const findTheOldest = function(people) {
    let oldestPerson = {};
    people.reduce((acc, curr) => {
        if(!curr.yearOfDeath)
            curr.yearOfDeath = new Date().getFullYear();
        if(curr.yearOfDeath - curr.yearOfBirth > acc) {
            acc = curr.yearOfDeath - curr.yearOfBirth;
            oldestPerson = {...curr};
        }
        return acc;   
    },0);
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
