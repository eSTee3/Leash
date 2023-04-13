# Leash

![License Badge](https://shields.io/badge/license-MIT-yellow)  
Application [Link](https://lumo-grindz.herokuapp.com/)

## Table of Contents

1. [Description](#description)
2. [User Story](#user-story)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Contributing](#contributing)
6. [Tests](#tests)
7. [License](#license)
8. [Questions](#questions)

## Description

The web application is designed to compete with other social media applications to create a more inclisve town square for people to comminicate.
<br>

1. Retrieve all Barks:
2. Creata a Bark:
3. Updating a Bark:
4. Delete a Bark:

Overall, the web application is useful for people who want another social media option then what is currrently provideded.

Screenshot of working application:

![screenshot of working app]()

## User Story

```
GIVEN a social media application

WHEN I visit the site for the first time
┗►THEN I am presented with all Barks from newest to oldest

WHEN I click on a bark
┗►THEN I am sent to the login/signup page to log into the site

WHEN I log into the site
┗►THEN I am sent back to the initial landing page

WHEN I’m logged into the site
┗►THEN a new option called “Post a Bark” is available

WHEN I click “Post a Bark”
┗►THEN I’m taken to a page, containing a simple form that allows me to add my Bark to the current list of Barks

WHEN I’m logged in and am at the initial landing page
┗►THEN I can click on a Bark and see all comments tied to that Bark

WHEN I click on a Bark and see all the comments tied to that Bark
┗►THEN I can create my own comment to that Bark
```

## Installation

Libraries used:  
-React
-GraphQL
-Node.js
-Express.js
-MongoDB
-Mongoose
-Heroku

Copy repo code and open Visual studio Code to run. Follow steps below to set up server.

### Server setup steps when seeding database with a JavaScript file:

1. Set login information in .env file
<pre>
DB_NAME='your_mysql_database_name'
DB_USER='your_mysql_username'
DB_PASSWORD='your_mysql_password' 
</pre>

2. Login into mysql
<pre>
mysql -u root -p
</pre>

3. Source the schema
<pre>
source db/schema.sql;
</pre>

4. Exit out of mysql terminal
<pre>
quit
</pre>

5. Install node packages
<pre>
npm i
</pre>

6. Seed the database
<pre>
node ./seeds/index.js
</pre>

7. Start Server
<pre>
npm start
</pre>

## Usage

Link to application can be found [Here]()
Login craditionals that can be used:

<pre>
Email: admin@test.com
Password: 123456
</pre>

Or can create your own username and signup by providing a username, email, and password.

## Contributing

Submit bug and feature requests.
<br>
Furture work:

1. React and comment to the barks.

## Tests

No tests

## License

Please see https://mit-license.org/ to get detailed information for this license

## Questions

You can find [Colton](https://github.com/ColtonWilson) on Github
<br>
You can find [Mark](https://github.com/eSTee3) on Github
<br>
You can find [Mela](https://github.com/mela2294) on Github
<br>
You can find [Por](https://github.com/por-chang) on Github
