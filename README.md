# Banco Neon - Front-end test
This is a test project for a front-end position in Banco Neon

##Instalation
This project requires some dependencies to run. First of all, install then:
- [NodeJS](http://nodejs.org/)
- [GulpJS](http://gulpjs.com/)

```sh
# Clone the project repository
$ git clone https://github.com/diegorochawebdg/neon-test.git
$ cd neon-test

# install gulp globally
$ npm install -g gulp

# install dependencies
$ npm install
```

## Gulp tasks
There's some tasks to build the project properly, but you can use these to build/run it:

- `gulp`: The default task. This one build the entirely project and start automatically the "watch" task after done.
- `gulp build`: Like the first task, but only build the project on the "dist/" folder
