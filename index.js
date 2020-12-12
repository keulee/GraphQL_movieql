import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/resolvers";

// GraphQL서버에 할 것 : 어떤 Mutation, Query를 가지고 있는지 알려주기. (schema.graphql -> Query)
const server = new GraphQLServer({
    typeDefs: "graphql/schema.graphql",
    resolvers
    //   resolvers: resolvers
});

server.start(() => console.log("Graphql Server Running"));

/*
schema.graphql 설명 (graphql에서 주석 처리가 오류로 읽힘...)
사용자가 뭘 할지 정의
ㄴDatabase로 부터 정보(data)를 받는 것 == Query
ㄴ정보를 Database로 보내는 것
Mutation : 서버 또는 데이터베이스, 메모리에서 정보를 바꾸는 작업을 할 때를 말함. 
Query : 정보를 받을때 쓰임
*/
