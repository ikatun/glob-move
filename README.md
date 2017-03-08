# glob-move
NodeJS library used to move files and directories using glob patterns

## example1 Copy contents of node_modules/ directory to my_modules/ directory
```
const move = require('glob-move');

move('node_modules/*', 'my_modules')
  .then(() => 'Content of node_modules moved successfully!');
  .catch(console.error);
```

## example2 Copy contents of node_modules/ directory to my_modules/ directory including .files (.gitignore, .npmignore...)
```
const move = require('glob-move');

move('node_modules/*', 'my_modules', { dot: true })
  .then(() => 'Content of node_modules moved successfully!');
  .catch(console.error);
```
