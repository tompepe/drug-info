# drug-info
Scripts and processes:
1. Update the board
2. Prototype changes and features
3. Add cypress end to end test
4. Test drive work using jest
5. Run the app in dev mode
6. Lint 
7. Build and distribute the application (not supported yet)
8. Update the board
9. Periodically run tests against the API to verify compliance

## scriptsUsedForSetup.sh
* These are scripts I had to run to get the project up and going on my machine.  
* Hopefully it is not required for to setup a dev box.  
* All one /should/ need to do is run npm install.  Due to cypress you might have to sudo npm install.

## 1 and 8 Update the board
* https://trello.com/b/BIPpI0z9/drug-info
* Doing includes feature discovery, design, dev, testing, and deployment (whatever we determine that to be)

## 2. Prototyping
1. Add a directory under prototypes containing at least an index.js index.html file
2. Create new files to try things out feel free to reference code from the src directory or copy it
3. Delete the directory when done or keep it for reference
4. There is an example of this under prototypes/story1 and an example script under package.json I do not anticipate adding a script under package.json every time a prototype is added

## 3 and 8 Cypress
1. To run cypress you will need docker
2. run ```npm run cy:run```
3. Cypress tests optionally mock out the server for certain tests mocking the server is done by default
4. To run cypress tests against the prod server (https://rxnav.nlm.nih.gov) run the following command ```CYPRESS_USE_PROD_URL=true npm run cy:run```
5. Cypress runs against chrome since (so I've heard) chrome runs cypress scripts fastest 
6. Cypress tests use testing-library for selectors

### Cypress on Docker
1. Cypress runs on docker to prevent cypress from needing root access just to run tests
2. Docker is wrapped in a shell script cypress-docker-run.sh 
3. This script uses another script and env file to pass CYPRESS_ env variables to the docker container
4. To add a variable follow the comments in the script file

### Debugging Cypress
1. By default videos are captured for each test
2. To run in interactive mode (currently) requires cypress to be installed locally

### Cypress Typescript
1. Cypress uses mocha which conflicts with the types used by jest
2. The project has 2 tsconfig files to separate these contexts
3. Cypress also uses webpack and this project uses parcel
4. It's best to limit any reuse between cypress code and any other code to a minimum
5. ```testUtilities/mockUrl/*``` files are shared by Cypress and Jest tests.  This can be done since they only rely on types defined in this codebase.

## 4. Test drive with jest
1. run the tests ```npm test```
2. run with watch ```npm test -- --watch```
3. jest uses testing-library

## 5. Run the app in dev mode
1. run the app in dev mode ```npm start```


## 6. Lint
1. Much of what is in the lint rules is there by recommendations from the tech stack with a few resolutions
2. The only opinion of my own is to allow for ```<h1>{ value }</h1>``` to go on the same line everything else is to keep the various rules from conflicting with one another.
3. Any changes or improvements here are welcome I just assume leave it alone
4. Visual studio code should be linting automatically
5. To run the linter ```npm lint```

## 7. Build and deploy
1. This is mostly untested as the app has never been deployed
2. To build ```npm build```


