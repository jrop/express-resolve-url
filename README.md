express-resolve-url
===================

[![Greenkeeper badge](https://badges.greenkeeper.io/jrop/express-resolve-url.svg)](https://greenkeeper.io/)

> Resolve URLs easily in express.js

# Installation

```sh
npm i --save express-resolve-url
```

# Use

```js
const express = require('express')
const resolveUrl = require('express-resolve-url')

/*
 * Setup a sub-sub-app
 */
 const subSubApp = express()
 	.use(resolveUrl())
 	.get('/', function (req, res) {
 		res.end('The URL for /goo (from the sub-sub-app) is: ' + req.resolveUrl('/goo'))
 		// => /sub-app/sub-app/goo
 	})

/*
 * Setup a sub-app
 */
const subApp = express()
	.use(resolveUrl())
	.use('/sub-app', subSubApp)
	.get('/', function (req, res) {
		res.end('The URL for /goo (from the sub-app) is: ' + req.resolveUrl('/goo'))
		// => /sub-app/goo
	})

/*
 * Setup the root-app
 */
const app = express()
	.use(resolveUrl())
	.use('/sub-app', subApp)
	.get('/', function (req, res) {
		res.end('The URL for /goo (from the root-app) is: ' + req.resolveUrl('/goo'))
		// => /goo
	})
```

# License

ISC License (ISC) Copyright (c) 2016, Jonathan Apodaca jrapodaca@gmail.com

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
