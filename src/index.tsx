import React from "react";
import { ApolloProvider } from "react-apollo";
import apolloClient from "./apollo";
import ReactDOM from "react-dom";
//import App from "./App";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    {/* provider에 apolloclient 객체를 넣어주어 연결시켜준다. 자식들이 apolloClient객체를 사용할 수 있도록 */}
    <ApolloProvider client={apolloClient}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
