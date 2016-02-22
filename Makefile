.PHONY: test

all:
	make test

test:
	node_modules/.bin/mocha main.js

watch:
	ls -d *.js | entr sh -c 'make test'
