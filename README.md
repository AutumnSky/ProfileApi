# API Server for Profile Page

> http://www.autumnpage.com

## run
- dev
```
$yarn run dev
```

- production
This command is depend on [forever](https://www.npmjs.com/package/forever)
```
$yarn run build
$yarn start
```

## example for config/default.json
```
{
  "db": {
    "host": "mongodb://",
    "port": 1234
  }
}
```