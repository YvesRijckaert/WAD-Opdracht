import React, { Component } from "react";
import REGISTER from "../graphql/register";
import { Mutation } from "react-apollo";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = { showRegister: true };
  }

  handleSumbit = async (e, register) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const { data } = await register({
      variables: {
        email,
        password,
        name
      }
    });
    if (data.user.email) {
      this.setState({ showRegister: false });
    }
  };

  render() {
    let name = null;
    let email = null;
    let password = null;
    return (
      <Mutation mutation={REGISTER}>
        {(register, { loading, error }) => (
          <article>
            <h3>Registreer</h3>
            {this.state.showRegister ? (
              <form
                className="userform"
                onSubmit={e => {
                  this.handleSumbit(e, register);
                }}
              >
                <label htmlFor="reg-name">Naam</label>
                <input type="text" id="reg-name" name="name" required />
                <label htmlFor="reg-email">E-mail</label>
                <input type="email" id="reg-email" name="email" required />
                <label htmlFor="reg-pwd">Wachtwoord</label>
                <input type="password" id="reg-pwd" name="password" required />
                <input type="submit" value="Register" />
              </form>
            ) : (
              <p>Geregistreerd, log in aub!</p>
            )}
          </article>
        )}
      </Mutation>
    );
  }
}

export default Register;
