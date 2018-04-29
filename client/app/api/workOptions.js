class Api {
  url = `http://localhost:4000/workOptions`;

  getAll = () => {
    return fetch(`${this.url}`).then(r => r.json());
  };
}
export default Api;
