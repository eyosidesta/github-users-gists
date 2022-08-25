# github-users-gists
#Project Structure 
The project's initial file, index.js, is created when the project launches.
Route Folder: The route folder contains definitions for all route files.
Model: database models that define the table defined here in a model folder package. Controller Folder: all controller files that may handle api requests are defined here in the controller folder.
JSON: This file, package.json, lists all dependencies.

User requests to fetch Github user gists are handled by the project's index.js file, which then sends a fetch request to the route file, which is kept in a Route subdirectory. The controller will handle a client request to retrieve a user's gist from Github by supplying a username.

Two scenarios should be handled at this time. First, as this is the first api call made by this particular user, all publicly accessible Github user gists will be retrieved, and the user's username and the current time will be recorded in a sqlite3 database. The system should only fetch the gists that have been added since the last search because in the second situation, the gists by this particular user have already been fetched.

AWS Ec2 instance needs to be utilized in order to deploy the project in the AWS infrastructure. A virtual server called an Ec2 instance is part of Amazon's elastic compute infrastructure (EC2) and is used to run applications on the AWS architecture. The containerized Nodejs App is going to be deployed using an EC2 instance. Doing so requires the use of Docker, a platform for building and deploying Docker Images using containers. Nodejs applications will be deployed to servers as Docker containers.
