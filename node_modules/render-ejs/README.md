# node-render-ejs

Node.js utility: render ejs template

```
render-ejs -d '{"info":{"data":"as you like"}}' -t /path/to/template.ejs -f /path/to/content.ext
```


###### Table of Contents

- [Requirements](#Requirements)
- [Usage](#Usage)
- [License](#License)

<a id="Requirements"></a>
## Requirements

- development on Node 11.6.0


<a id="Usage"></a>
## Usage

### CLI

```
$ render-ejs -d '{"info":{"data":"as you like"}}' -t /path/to/template.ejs -f /path/to/content.ext
```

#### Example

- /path/to/templates/html.ejs

```html
<html>
<body>
  <h1>Hello, world!!</h1>
  <p><%= info.data %></p>
</body>
</html>
```

render content

```
$ render-ejs -d '{"info":{"data":"as you like"}}' -t /path/to/templates/html.ejs -f /path/to/content.html
```

result

```html
<html>
<body>
  <h1>Hello, world!!</h1>
  <p>as you like</p>
</body>
</html>
```


### Install

```
$ npm install --save-dev render-ejs
```


<a id="License"></a>
## License

node-render-ejs is licensed under the [MIT](LICENSE) license.

Copyright &copy; since 2018 shun@getto.systems
