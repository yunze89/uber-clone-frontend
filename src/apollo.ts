import ApolloClient, { Operation } from "apollo-boost";

//graphql client인 apollo client 객체 생성
const apolloClient = new ApolloClient({
  uri: "http://localhot:4000/graphql", //backend graphql endpoint
  //global state 공용으로 관리위해 설정
  clientState: {
    defaults: {
      //로그인 관련 state
      auth: {
        __typename: "Auth",
        isLoggedIn: Boolean(localStorage.getItem("jwt")),
      },
    },
  },
  //header에 jwt 설정
  request: async (operation: Operation) => {
    operation.setContext({
      headers: {
        "X-JWT": localStorage.getItem("jwt"),
      },
    });
  },

  //서버와는 별개로 clientState를 조작하기 위한 resolver/mutation
  resolvers: {
    Mutation: {
      logUserIn: (_, { token }, { cache }) => {
        localStorage.setItem("jwt", token); //localstorage에 jwt 토큰값 저장
        cache.writeData({
          //앱에서 사용
          data: {
            auth: {
              __typename: "Auth",
              isLoggedIn: true,
            },
          },
        });
        return null;
      },
      logUserOut: (_, __, { cache }) => {
        localStorage.removeItem("jwt");
        cache.writeData({
          //앱에서 사용
          data: {
            auth: {
              __typename: "Auth",
              isLoggedIn: false,
            },
          },
        });
        return null;
      },
    },
  },
});

export default apolloClient;
