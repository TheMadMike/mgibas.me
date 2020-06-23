const githubApi = {
  url: 'https://api.github.com',
  user: 'TheMadMike',
};

const fetchStarredRepos = async () => {
  const data = await fetch(`${githubApi.url}/users/${githubApi.user}/starred`);
  const json = await data.json();

  const owned = [];
  // eslint-disable-next-line no-restricted-syntax
  json.forEach((repo) => {
    if (repo.html_url.includes(`https://github.com/${githubApi.user}/`)) {
      owned.push(repo);
    }
  });

  return owned;
};

export default fetchStarredRepos;
