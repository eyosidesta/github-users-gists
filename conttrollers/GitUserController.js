const GitUser = require("../models/GitUser");
const axios = require("axios");
const public_api = process.env.PUBLIC_GITHUB_USERS_API || 'https://api.github.com/users';

const getCircularReplacer = () => {
  const seen = new WeakSet();
  return (key, value) => {
    if (typeof value === "object" && value !== null) {
      if (seen.has(value)) {
        return;
      }
      seen.add(value);
    }
    return value;
  };
};

exports.get_all_user_gists = async (req, res) => {
  const findUserName = await GitUser.findOne({
    where: {
      username: req.params.username,
    },
  });
  if (!findUserName) {
    const resp = await axios.get(
      `${public_api}/${req.params.username}/gists`,
      {
        headers: {
          Accept: "application/vnd.github+json",
        },
      }
    );

    await GitUser.create({
      username: req.params.username,
      lastseen: new Date(),
    });
    res.send(JSON.stringify(resp.data, getCircularReplacer()));
  } else {
    const resp = await axios.get(
      `${public_api}/${req.params.username}/gists?since=${findUserName.lastseen}`,
      {
        headers: {
          Accept: "application/vnd.github+json",
        },
      }
    );
    res.send(JSON.stringify(resp.data, getCircularReplacer()));
    findUserName.lastseen = new Date();
    await findUserName.save();
  }
};
