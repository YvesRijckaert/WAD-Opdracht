import React, { Component } from "react";
import { observer } from "mobx-react";
import WorkPlaces from "../components/WorkPlaces";
import OverView from "../components/OverView";
import AdminWork from "../components/AdminWork";
import EditWorkOption from "../components/EditWorkOption";
import AddWorkOption from "../components/AddWorkOption";
import NotFound from "../components/NotFound";
import { Switch, Route, Link, withRouter } from "react-router-dom";
import { Observer } from "mobx-react";

import { Query } from "react-apollo";
import GET_ALL_WORKTOTALS from "../graphql/getAllWorkTotals";
import GET_ALL_WORKOPTIONS from "../graphql/getAllWorkOptions";

import User from "../components/User";
import ProtectedComponent from "../components/ProtectedComponent";
import ProtectedRoute from "../components/ProtectedRoute";

class App extends Component {
  render() {
    const { store } = this.props;
    return (
      <div className="App">
        <User />
        <Switch>
          <Route
            path="/"
            exact
            component={() => (
              <Observer>
                {() => (
                  <div>
                    <section className="werkplaatsen">
                      <h2>Voeg nieuwe werkdag toe</h2>
                      <div className="work-places">
                        <ProtectedComponent
                          protect={<WorkPlaces store={store} />}
                          alternative={
                            <p className="error-message">
                              Je moet ingelogd zijn!
                            </p>
                          }
                        />
                      </div>
                    </section>
                    <Query query={GET_ALL_WORKTOTALS}>
                      {({ loading, error, data: { allWorkTotals } }) => {
                        if (loading) return <p>Loading...</p>;
                        if (error) return <p>Error...</p>;
                        return (
                          <section>
                            <h2>Totaal werkuren</h2>
                            {console.log(allWorkTotals)}

                            <p>Totaal loon netto: € {store.totalSalary}</p>
                            <p>Je mag nog x uren werken</p>
                          </section>
                        );
                      }}
                    </Query>
                    <Query query={GET_ALL_WORKOPTIONS}>
                      {({ loading, error, data: { allWorkOptions } }) => {
                        if (loading) return <p>Loading...</p>;
                        if (error) return <p>Error...</p>;
                        return <p>{console.log(allWorkOptions)}</p>;
                      }}
                    </Query>
                    <section className="beheer">
                      <h2>Beheer</h2>
                      <ProtectedComponent
                        protect={<AdminWork />}
                        alternative={
                          <p className="error-message">
                            Je moet ingelogd zijn!
                          </p>
                        }
                      />
                    </section>
                  </div>
                )}
              </Observer>
            )}
          />
          <ProtectedRoute
            path="/edit"
            component={() => (
              <Observer>
                {() => (
                  <article>
                    <Link className="bttn" to="/">
                      ← go back home
                    </Link>
                    <h3>Verander bestaande werkplaats</h3>
                    {store.workOptions.length === 0 ? (
                      <div>
                        <p className="error-message">
                          Nog geen werk plaatsen toegevoegd.
                        </p>
                        <Link className="link" to="/add">
                          Voeg werkplaats toe
                        </Link>
                      </div>
                    ) : (
                      ``
                    )}
                    <div className="work-option-wrap">
                      {store.workOptions.map(workOption => (
                        <EditWorkOption
                          key={workOption.id}
                          workOption={workOption}
                          update={store.update}
                          remove={store.remove}
                          showFlash={store.showFlash}
                        />
                      ))}
                    </div>
                  </article>
                )}
              </Observer>
            )}
          />
          <ProtectedRoute
            path="/add"
            component={() => (
              <Observer>
                {() => (
                  <article>
                    <Link className="bttn" to="/">
                      ← go back home
                    </Link>
                    <h3>Voeg werkplaats toe</h3>
                    <AddWorkOption store={store} />
                  </article>
                )}
              </Observer>
            )}
          />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(observer(App));
