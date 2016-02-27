.PHONY: test

all:
	make test

test:
	node_modules/.bin/mocha main.js

watch:
	node_modules/.bin/mocha -w main.js
