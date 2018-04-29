class Api {
  url = `http://localhost:4000/workOptions`;

  getAll = () => {
    return fetch(`${this.url}`).then(r => r.json());
  };

  create = content => {
    return fetch(`${this.url}`, this.getOptions(`post`, { content })).then(r =>
      r.json()
    );
  };

  update = workOption => {
    return fetch(
      `${this.url}/${workOption.id}`,
      this.getOptions(`put`, workOption)
    )
      .then(r => r.json())
      .catch(err => console.error(err));
  };

  remove = workOption => {
    return fetch(`${this.url}/${workOption.id}`, this.getOptions(`delete`))
      .then(r => r.json())
      .catch(err => console.error(err));
  };

  getOptions = (method, body = null) => {
    const options = {
      method: method.toUpperCase(),
      headers: {
        "content-type": `application/json`
      }
    };
    if (body) {
      options.body = JSON.stringify(body);
    }
    return options;
  };
}
export default Api;
