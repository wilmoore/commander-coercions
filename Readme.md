# commander-coercions

[![Build Status](http://img.shields.io/travis/wilmoore/commander-coercions.svg)](https://travis-ci.org/wilmoore/commander-coercions) [![NPM version](http://img.shields.io/npm/v/commander-coercions.svg)](https://www.npmjs.org/package/commander-coercions) [![NPM downloads](http://img.shields.io/npm/dm/commander-coercions.svg)](https://www.npmjs.org/package/commander-coercions) [![LICENSE](http://img.shields.io/npm/l/commander-coercions.svg)](license)

> A collection of commander coercions so you don't have to copy them from project-to-project.

     % npm install commander-coercions

### API

###### toInteger

```
program.option('-i, --integer <n>', 'An integer argument', toInteger)
```

    % node cli --integer 5.5

```
program.integer
#=> 5
```

###### toFloat

```
program.option('-f, --float <n>', 'A float argument', toFloat)
```

    % node cli --float 5.5

```
program.float
#=> 5.5
```

###### toListFromRange

```
program.option('-r, --range <a>..<b>', 'A range', toListFromRange)
```

    % node cli --range 5..10

```
program.range
#=> [5, 10]
```

###### toListFromCommaDelimited

```
program.option('-d, --delimited <a>,<b>', 'A delimited list', toListFromCommaDelimited)
```

    % node cli --delimited 5,10,15

```
program.delimited
#=> ['5', '10', '15']
```

###### toListFromMultipleInvocations

```
program.option('-c, --collect [value]', 'A repeatable value', toListFromMultipleInvocations, [])
```

    % node cli -c foo -c bar -c baz

```
program.collect
#=> ['foo', 'bar', 'baz']
```

###### incrementBy

```
program.option('-v, --verbose', 'A value that can be increased', incrementBy(1), 0)
```

    % node cli -vvvv --verbose

```
program.verbose
#=> 5
```

## Inspiration

- [commander.js documentation](https://github.com/visionmedia/commander.js/#coercion)

## License

  [MIT](license)

