
const samePerson = person;
const clone1 =  { ...samePerson };
const clone2 = { ...samePerson };

person.age++
person.country = 'FR'