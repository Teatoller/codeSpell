# codeSpell
- AI Code Explainer tool

# Author name
- Steven Ennis following a FreeCodeCamp tutorial by Tapas Adhikary

# Description of project
- Express.js backend, a REST endpoint that talks to an LLM and integrated to a React 19 Frontend

# Project setup instructions
- create an acount on Nebius and use this model [openai/gpt-oss-120b](https://studio.nebius.com/playground?models=openai/gpt-oss-120b)

## Prerequisites
- Version control [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

## Project setup

1. Create a folder on your machine `mkdir myproject`
2. `cd myproject`
3. Run `git https://github.com/Teatoller/codeSpell.git`
4. `cd codeSpell`
5. open **code-spell-application** in your chosen editor. For **vscode** enter `code .` on terminal and press enter.
6. `git checkout main`
7. `cd server`

# Link to live site
on the terminal run
1. create .env file `touch .env` add API key from your Nebius AI account guided by the env.example in the server folder
2. run `yarn install` on the terminal and then
3. run `yarn dev`

Runs the app in the development mode.\
Open [http://localhost:4000](http://localhost:4000).

# Endpoint (Test on Postman)

POST: http://localhost:4000/api/explain-code

Payload raw JSON.

Example:

{
    "language": "JavaScript",
    "code": "function great(name) {\n    return `Hello, ${name}!`;\n}\n\nconsole.log(great('Tapas'));"
}


### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

# Link to live site n/a

# Copyright and License information
Copyright © 2025, Steven Ennis. Released under the [MIT License](LICENSE)