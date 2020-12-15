export const people = [
    {
       id: "0",
       name: "Keulee",
       age: 31,
       gender: "female"
   },
   {
       id: "1",
       name: "Toto",
       age: 10,
       gender: "male"
   },
   {
       id: "2",
       name: "Rimi",
       age: 31,
       gender: "female"
   },
   {
       id: "3",
       name: "Nathan",
       age: 9,
       gender: "male"
   },
   {
       id: "4",
       name: "hihi",
       age: 17,
       gender: "female"
   }
];

export const getById = id => {
    const filteredPeople = people.filter(person => person.id === String(id));
    return filteredPeople[0]
}