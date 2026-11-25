PS C:\LearnReact> cd backend 
PS C:\LearnReact\backend> npm init 
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help init` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (backend) 
version: (1.0.0) 
description: 
entry point: (index.js) 
test command: 
git repository: 
keywords: 
author: 
license: (ISC) 
type: (commonjs) 
About to write to C:\LearnReact\backend\package.json:

{
  "name": "backend",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "type": "commonjs"
}


Is this OK? (yes) 

npm notice
npm notice New minor version of npm available! 11.6.2 -> 11.21.0
npm notice Changelog: https://github.com/npm/cli/releases/tag/v11.21.0
npm notice To update run: npm install -g npm@11.21.0
npm notice
PS C:\LearnReact\backend> 





                          npm install express cors mysql2

added 77 packages, and audited 78 packages in 10s

31 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
PS C:\LearnReact\backend> node index.js 
Server is running on port 3000

