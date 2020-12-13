const Keulee = {
    name: "Keulee",
    age: 31,
    gender: "female"
};

const resolvers = {
    Query: {
        person:() => Keulee
        // person: function() {
        //     return Keulee
        // }
    }
};

export default resolvers;