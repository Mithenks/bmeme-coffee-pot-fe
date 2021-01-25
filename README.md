# Gatsby development docker project

Example project to develop application with [GatsbyJS](https://gatsbyjs.com/) using [Docker](https://www.docker.com/).

This project use [bmeme/gatsby-dev](https://hub.docker.com/r/bmeme/gatsby-dev) image from [BMEME](https://www.bmeme.com).

## TL;DR

Create and run the docker container

```bash
$ docker-compose up -d
```

Run the Gatsby CLI to create your project

```bash
$ rm app/.gitkeep
$ ./gatsby new .
```

Run your application

```bash
$ ./gatsby develop
```

## Documentation

Start the docker development container

```
$ docker-compose up -d
```

Create a new gatsby project

```
$ rm app/.gitkeep
$ ./gatsby new .
```

Run gatsby develop

```
$ ./gatsby develop --host=0.0.0.0
```

Run gatsby serve

```
$ ./gatsby build && ./gatsby serve --host=0.0.0.0
```

Install a gatsby plugin

```
$ ./npm install gatsby-plugin-styled-components styled-components babel-plugin-styled-components
```

## References

- [gatbsy-cli npm package](https://www.npmjs.com/package/gatsby-cli)
- [Gatsby official tutorial](https://www.gatsbyjs.com/docs/tutorial/)
- [Gatsby tutorial on youtube by Coding Addict](https://www.youtube.com/watch?v=5Mam9NuxwQc)
- [Node.js Docker official images](https://hub.docker.com/_/node)
