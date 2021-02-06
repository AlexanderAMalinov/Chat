run:
	sudo node server/index.js
devstart:
	npm run start
build:
	npm run build
lint:
	npx eslint .
lintfix:
	npx eslint . --fix