# calhacks-5.0

# Getting Started
### Installation
```
git clone https://github.com/howardwang15/calhacks-5.0.git
cd client 
npm install

cd server
npm install
```
### Developing
By default, the React application runs at localhost:8000 and the Node server runs at localhost:3000
To start the application, go to the root of the client directory and use the command
```
npm start
```
and go to the root of the server directory and use the command
```
npm start
```
Simple components should be created using Reactstrap (Bootstrap 4 components made for React applications). To see a list of components Reactstrap provides, visit https://reactstrap.github.io/components/ 
Custom styles should be writeen in sass (not css)
To install new packages, use
```
npm install <package-name>
```
For each new custom component, create a folder under /components and add a index.jsx file and a styles.scss file

### Branching
Before making ANY changes, checkout a new branch for the feature that you're working on by using the command 
```
git checkout -b <yourName-featureName>
```
For instance, I might checkout a new branch as follows:
```
git checkout -b howard-login-page
```
Don't ever make changes to the master branch (that's the branch that needs to be kept stable)


### Precommit
Before commtting, test your code thoroughly...try to break it!
Lint the code before committing (linting basically formats all the js code we write the same way) by using the command 
```
npm run lint
```
(to see what you need to lint) or 
```
npm run fix 
```
(to have eslint automatically fix the files) from the client root directory.


### Pushing to GitHub
Make sure that you're on a branch different than master before pushing (or else serious complications will arise)
Push to your remote branch with the command
```
git push origin <branch-name>
```
For instance, I might do
```
git push origin howard-login-page
```
Then, go to the repo on GitHub, and open a pull request (PR) from the branch you just pushed. Have someone review the code before merging it into the master branch
