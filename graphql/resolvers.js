import { getMovies, getById } from "./db";

const resolvers = {
    Query: {
        //person:() => Keulee
        // person: function() {
        //     return Keulee
        // }
        movies: () => getMovies(),
        movie: (_, { id }) => getById(id)
    },
    Mutation: {
        addMovie: (_, {name, score}) =>
    }
};

export default resolvers;