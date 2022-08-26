# Github Users Gists 

Nodejs function to fetch all publicly accessible Github usrs Gists, Based on the specified github user's username.

## Usage

### How it works

User requests to fetch Github user gists are handled by the project's index.js file, which then sends a fetch request to the route file, which is kept in a Route subdirectory. The controller will handle a client request to retrieve a user's gist from Github by supplying a username.

Two scenarios should be handled at this time. First, as this is the first api call made by this particular user, all publicly accessible Github user gists will be retrieved, and the user's username and the current time will be recorded in a sqlite3 database. The system should only fetch the gists that have been added since the last search because in the second situation, the gists by this particular user have already been fetched.

In order to start the project, you need to run the following command:

```
$ npm start
```

### Project Structure

The project's initial file, index.js, is invoked when the project starts.
Route Folder: The route folder contains definitions for all route files.
Model: database models that define the tables, defined here in a model file under Model Folder.
Controller Folder: all controller files that may handle api requests are defined here in the controller folder.
package.json: lists all dependencies.
.env: all environmental variables declared in .env file, such as PUBLIC_GITHUB_USERS_API AND PORT.

### Database

To manage a github user's username and the most recent time their data was fetched, I utilized a sqlite3 database. I used Sequelize to make it simple to handle the sqlite3 db.

database configuration:

```
const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('git-user-db', 'root', 'pass', {
    dialect: 'sqlite',
    storage: 'path/to/database.sqlite',
})

module.exports = sequelize;
```

database model:

```
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class GitUser extends Model {}

GitUser.init({
    username: {
        type: DataTypes.STRING,
    },
    lastseen: {
        type: DataTypes.DATE,
    },
}, {
    sequelize,
    modelName: 'gituser',
    timestamps: false
})

module.exports = GitUser
```

### Documentation
api documentation is found in docs folder index.html file

### Deployment

In order to deploy this project in aws we need to follow the following steps:

```
-> we need to have account on aws

-> We launch an EC2 instance
in this step we have to configure instances for our application like CPU, memory, storage, and network capacity.

-> Install dependencies on the EC2 instance

$ sudo apt update
$ sudo apt install mysql-client

-> create an application Directory

$ pwd
$ cd/home/ubuntu/
$ mkdir Nodejs-docker
$ cd Nodejs-docker

-> Clone the code repository on the EC2 instance
$ pwd
$ cd/home/ubuntu/
$ git clone https://github.com/eyosidesta/github-users-gists

-> Install Docker
$ sudo apt-get update
$ sudo apt-get install apt-transport-https ca-certificates curl gnupg lsb-release
$ curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg –dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
$ sudo apt-get update
$ sudo apt-get install docker-ce docker-ce-cli containerd.io
$ docker –version
$ sudo groupadd docker
$ sudo usermod -aG docker daniEL2371

-> Dockerize your Node.js application in the EC2 instance
$ pwd
$ cd /home/ubuntu/Nodejs-docker
$ vim Dockerfile

#Base Image node:12.18.4-alpine
$ FROM node:12.18.4-alpine
#Set working directory to /app
$ WORKDIR /app
#Set PATH /app/node_modules/.bin
$ ENV PATH /app/node_modules/.bin:$PATH
#Copy package.json in the image
$ COPY package.json ./

#Install Packages
$ RUN npm install express --save
$ RUN npm install mysql --save

#Copy the app
$ COPY . ./
#Expose application port
$ EXPOSE 3000


```
Which should result in response similar to the following:

```json

  [
    {
        "url": "https://api.github.com/gists/828e8049f8592420dc3c7a2f34771e7b",
        "forks_url": "https://api.github.com/gists/828e8049f8592420dc3c7a2f34771e7b/forks",
        "commits_url": "https://api.github.com/gists/828e8049f8592420dc3c7a2f34771e7b/commits",
        "id": "828e8049f8592420dc3c7a2f34771e7b",
        "node_id": "G_kwDOAj9GP9oAIDgyOGU4MDQ5Zjg1OTI0MjBkYzNjN2EyZjM0NzcxZTdi",
        "git_pull_url": "https://gist.github.com/828e8049f8592420dc3c7a2f34771e7b.git",
        "git_push_url": "https://gist.github.com/828e8049f8592420dc3c7a2f34771e7b.git",
        "html_url": "https://gist.github.com/828e8049f8592420dc3c7a2f34771e7b",
        "files": {
            "code.py": {
                "filename": "code.py",
                "type": "application/x-python",
                "language": "Python",
                "raw_url": "https://gist.githubusercontent.com/daniEL2371/828e8049f8592420dc3c7a2f34771e7b/raw/600dee32380504b52264db941e16b2b6b607f547/code.py",
                "size": 457
            }
        },
        "public": true,
        "created_at": "2022-08-24T19:01:26Z",
        "updated_at": "2022-08-24T19:01:27Z",
        "description": "",
        "comments": 0,
        "user": null,
        "comments_url": "https://api.github.com/gists/828e8049f8592420dc3c7a2f34771e7b/comments",
        "owner": {
            "login": "daniEL2371",
            "id": 37701183,
            "node_id": "MDQ6VXNlcjM3NzAxMTgz",
            "avatar_url": "https://avatars.githubusercontent.com/u/37701183?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/daniEL2371",
            "html_url": "https://github.com/daniEL2371",
            "followers_url": "https://api.github.com/users/daniEL2371/followers",
            "following_url": "https://api.github.com/users/daniEL2371/following{/other_user}",
            "gists_url": "https://api.github.com/users/daniEL2371/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/daniEL2371/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/daniEL2371/subscriptions",
            "organizations_url": "https://api.github.com/users/daniEL2371/orgs",
            "repos_url": "https://api.github.com/users/daniEL2371/repos",
            "events_url": "https://api.github.com/users/daniEL2371/events{/privacy}",
            "received_events_url": "https://api.github.com/users/daniEL2371/received_events",
            "type": "User",
            "site_admin": false
        },
        "truncated": false
    },
    {
        "url": "https://api.github.com/gists/7ea18ab0fe6c6ed653a07dd92cea62de",
        "forks_url": "https://api.github.com/gists/7ea18ab0fe6c6ed653a07dd92cea62de/forks",
        "commits_url": "https://api.github.com/gists/7ea18ab0fe6c6ed653a07dd92cea62de/commits",
        "id": "7ea18ab0fe6c6ed653a07dd92cea62de",
        "node_id": "MDQ6R2lzdDdlYTE4YWIwZmU2YzZlZDY1M2EwN2RkOTJjZWE2MmRl",
        "git_pull_url": "https://gist.github.com/7ea18ab0fe6c6ed653a07dd92cea62de.git",
        "git_push_url": "https://gist.github.com/7ea18ab0fe6c6ed653a07dd92cea62de.git",
        "html_url": "https://gist.github.com/7ea18ab0fe6c6ed653a07dd92cea62de",
        "files": {
            "LDA.py": {
                "filename": "LDA.py",
                "type": "application/x-python",
                "language": "Python",
                "raw_url": "https://gist.githubusercontent.com/daniEL2371/7ea18ab0fe6c6ed653a07dd92cea62de/raw/da91f67b5c8d22279b3a2503ebbdb9f1450bd18a/LDA.py",
                "size": 2759
            }
        },
        "public": true,
        "created_at": "2021-06-29T14:17:36Z",
        "updated_at": "2021-06-29T14:17:36Z",
        "description": "",
        "comments": 0,
        "user": null,
        "comments_url": "https://api.github.com/gists/7ea18ab0fe6c6ed653a07dd92cea62de/comments",
        "owner": {
            "login": "daniEL2371",
            "id": 37701183,
            "node_id": "MDQ6VXNlcjM3NzAxMTgz",
            "avatar_url": "https://avatars.githubusercontent.com/u/37701183?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/daniEL2371",
            "html_url": "https://github.com/daniEL2371",
            "followers_url": "https://api.github.com/users/daniEL2371/followers",
            "following_url": "https://api.github.com/users/daniEL2371/following{/other_user}",
            "gists_url": "https://api.github.com/users/daniEL2371/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/daniEL2371/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/daniEL2371/subscriptions",
            "organizations_url": "https://api.github.com/users/daniEL2371/orgs",
            "repos_url": "https://api.github.com/users/daniEL2371/repos",
            "events_url": "https://api.github.com/users/daniEL2371/events{/privacy}",
            "received_events_url": "https://api.github.com/users/daniEL2371/received_events",
            "type": "User",
            "site_admin": false
        },
        "truncated": false
    },
    ...
  ]

```

