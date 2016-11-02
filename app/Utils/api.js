export default api = {
  getBio(username) {
    username = username.toLowerCase().trim();
    let url = `http://api.github.com/users/${username}`;
    return fetch(url).then((res) => res.json());
  },

  getRepos(username) {
    let url = `http://api.github.com/users/${username}/repos`;
    return fetch(url).then((res) => res.json());
  },

  getNotes(username) {
    username = username.toLowerCase().trim();
    let url = `https://githubnotetaker-b3939.firebaseio.com/${username}.json`;
    return fetch(url).then((res) => res.json());
  },

  addNote(username, note) {
    username = username.toLowerCase().trim();
    let url = `https://githubnotetaker-b3939.firebaseio.com/${username}.json`
    return fetch(username, {
      method: 'post',
      body: JSON.stringify(note)
    }).then((res) => res.json());
  }
}
