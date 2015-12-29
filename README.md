Note: Still under active development
# meteor-react-redux-starter-kit
Get started with Meteor, React, Redux, Webpack, and React-Router!

Embrace the react-redux ecosystem while using meteor's awesome realtime magic

The meteor and webpack integration settings are basically forked from [jedwards1211/meteor-webpack-react](https://github.com/jedwards1211/meteor-webpack-react)'s `webpack-meteor-tools` branch, definitely check out the README there before continuing.

Redux store settings and project structure are inspired from these great repos
1. [davezuko/react-redux-starter-kit](https://github.com/davezuko/react-redux-starter-kit)
1. [erikras/react-redux-universal-hot-example](https://github.com/erikras/react-redux-universal-hot-example)
1. [erikras/ducks-modular-redux](erikras/ducks-modular-redux): Redux folder structuring

# Packages

## build
- webpack

## react family
- react + react-dom
- react-router
- react-bootstrap
- material-ui

## redux family
- redux
- react-redux
- redux-simple-router
- redux-devtools
- redux-thunk


(below TODO, not yet added)
- reselect
- immutable.js


# Why

// TODO: keeping ui and logic decoupled makes predictable and scalable

---

# Getting Started

First clone this repo and install dependencies:
```
git clone https://github.com/YuHuaiChen/meteor-react-redux-starter-kit.git
cd meteor-react-redux-starter-kit
npm install
```

## Run in development mode

```
npm start
```

Go to `http://localhost:3000`, and press `ctrl+h` to see the awesome Redux-DevTools

## Run in production mode

```
npm run prod
```

## Meteor Settings


### API TODOs

checkout [hackathon-starter#Obtaining API Keys](https://github.com/sahat/hackathon-starter#obtaining-api-keys) for lots of API guides

1. Google Login
1. Facebook Login

// TODO

1. filepicker
1. emails

# More Detailed Guides

// TODO...

# Deployment

# Goal

## Depend on Meteor as less as possible

The goal for this starter kit is to depend on Meteor as less as possible,
and embrace the whole React ecosystem.

## Trade-off between complexity and flexibility

## Trade-off between unopinionated and completeness

# RoadMap

1. upgrade to Babel 6
1. email
1. testing
1. guides for beginners like hackathon-starter
