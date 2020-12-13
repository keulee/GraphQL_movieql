import { people, getById } from "./db";

const resolvers = {
    Query: {
        //person:() => Keulee
        // person: function() {
        //     return Keulee
        // }
        people: () => people,
        person: () => getById()
    }
};

export default resolvers;