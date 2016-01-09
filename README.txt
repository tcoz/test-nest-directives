Here's what you need to know:

This is the web project part.

- You have node installed and can run it from the command line.
- You run "npm install" from the same dir as package.json
-- This will download and install all required deps in node_modules
-- You can just use the deps as is, but it's fun to run "npm install"
- You run "node server.js" from the same dir as server.js
-- This will start the barest bones http server you ever saw.
- You go to localhost 8090 and profit.

You should see a bland page with an ugly list.

To run the tests:

- You go to top level dir
- You run npm test

You should see more or less:

INFO [Chrome 47.0.2526 (Mac OS X 10.11.2)]: Connected on socket J8w1ihXwWpfOyo0JYqfq with id 23334215
INFO: 'Inside MainView Controller Constructor'
INFO: 'Running MainViewModule tests...'
INFO: 'Inside MainView Controller Constructor'
INFO: 'Running tnParentDirectiveController...'
INFO: 'Running tnChildDirectiveController...'
INFO: 'Running tnChildDirectiveController...'
INFO: 'Running ParentDirective tests...'
INFO: 'Running tnParentDirectiveController...'
INFO: 'Running tnChildDirectiveController...'
INFO: 'Running tnChildDirectiveController...'
INFO: 'Running tnChildDirectiveController...'
INFO: 'Running ChildDirective tests...'
INFO: 'Running tnChildDirectiveController...'
Chrome 47.0.2526 (Mac OS X 10.11.2): Executed 6 of 6 SUCCESS (0.085 secs / 0.082 secs)





