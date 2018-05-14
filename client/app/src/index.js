import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import App from "./containers/App";
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter } from "react-router-dom";

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import store from "./store";

const client = new ApolloClient({
  uri: `http://localhost:4000/graphql`
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <App store={store} />
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById(`root`)
);
registerServiceWorker();
