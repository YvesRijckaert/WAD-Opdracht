import React, { Component } from "react";

import GET_CURRENT_USER from "../graphql/getCurrentUser";
import { Query } from "react-apollo";
import Register from "./Register";
import Login from "./Login";

class User extends Component {
  handleSignOut = client => {
    localStorage.removeItem(`jwt`);
    client.resetStore();
    location.reload(); // eslint-disable-line
  };

  render() {
    return (
      <section className="user">
        <h2>Welkom!</h2>
        <Query query={GET_CURRENT_USER}>
          {({ loading, error, data, client }) => {
            if (loading) return null;
            if (error) return null;
            if (data.currentUser) {
              //signedin
              return (
                <div>
                  <p className="signedin">
                    Ingelogd als {data.currentUser.name}
                  </p>
                  <button onClick={() => this.handleSignOut(client)}>
                    Log uit
                  </button>
                </div>
              );
            }
            return (
              <div>
                <Register />
                <Login client={client} />
              </div>
            );
          }}
        </Query>
      </section>
    );
  }
}

export default User;
