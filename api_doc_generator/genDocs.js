/**
 * @api {get} /user/:username public gists for user
 * @apiName Get public gists for user
 * @apiSampleRequest http://localhost:3000/user/
 * @apiGroup Gists
 *
 * 
 * @apiSuccess {Array}  returns list of gist objects.
 *
 * @apiSuccessExample Success-Response example:
 *     HTTP/1.1 200 OK
 * [
  {
    url: "https://api.github.com/gists/c4a894eaff11f9d24b89bc51ec4d2e75",
    forks_url:
      "https://api.github.com/gists/c4a894eaff11f9d24b89bc51ec4d2e75/forks",
    commits_url:
      "https://api.github.com/gists/c4a894eaff11f9d24b89bc51ec4d2e75/commits",
    id: "c4a894eaff11f9d24b89bc51ec4d2e75",
    node_id: "G_kwDOAj82kdoAIGM0YTg5NGVhZmYxMWY5ZDI0Yjg5YmM1MWVjNGQyZTc1",
    git_pull_url:
      "https://gist.github.com/c4a894eaff11f9d24b89bc51ec4d2e75.git",
    git_push_url:
      "https://gist.github.com/c4a894eaff11f9d24b89bc51ec4d2e75.git",
    html_url: "https://gist.github.com/c4a894eaff11f9d24b89bc51ec4d2e75",
    files: {
      route_with_guard: {
        filename: "route_with_guard",
        type: "text/plain",
        language: null,
        raw_url:
          "https://gist.githubusercontent.com/eyosidesta/c4a894eaff11f9d24b89bc51ec4d2e75/raw/395664bbbe11822032468b57da38ff640413adcf/route_with_guard",
        size: 164,
      },
    },
    public: true,
    created_at: "2022-08-24T22:06:06Z",
    updated_at: "2022-08-24T22:06:36Z",
    description: "",
    comments: 0,
    user: null,
    comments_url:
      "https://api.github.com/gists/c4a894eaff11f9d24b89bc51ec4d2e75/comments",
    owner: {
      login: "eyosidesta",
      id: 37697169,
      node_id: "MDQ6VXNlcjM3Njk3MTY5",
      avatar_url: "https://avatars.githubusercontent.com/u/37697169?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/eyosidesta",
      html_url: "https://github.com/eyosidesta",
      followers_url: "https://api.github.com/users/eyosidesta/followers",
      following_url:
        "https://api.github.com/users/eyosidesta/following{/other_user}",
      gists_url: "https://api.github.com/users/eyosidesta/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/eyosidesta/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/eyosidesta/subscriptions",
      organizations_url: "https://api.github.com/users/eyosidesta/orgs",
      repos_url: "https://api.github.com/users/eyosidesta/repos",
      events_url: "https://api.github.com/users/eyosidesta/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/eyosidesta/received_events",
      type: "User",
      site_admin: false,
    },
    truncated: false,
  },
];
 **/