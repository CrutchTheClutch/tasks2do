# tasks2do

www.tasks2do.com

---

## Table of Contents

## File Structure

```bash
tasks2do
├── client
|   ├── build               # Production Build
|   |   └──
|   ├── node_modules        # Dependencies
|   |   └──
|   ├── public              # Entry Point
|   |   ├── favicon.ico
|   |   ├── index.html
|   |   └── manifest.json
|   ├── src                 # React App
|   |   ├── App.js
|   |   ├── App.scss
|   |   ├── index.js
|   |   └── index.scss
|   ├── .eslintrc           # Linting Rules
|   ├── .gitignore          # client .gitignore
|   ├── package-lock.json   # Node Dependency Packages
|   ├── package.json        # Node Package
|   └── README.md           # Client README
|
├── server
|   ├── node_modules        # Dependencies
|   |   └──
|   ├── src                 # Apollo/Express Server
|   |   ├── models          # Mongoose Models
|   |   |   └──
|   |   ├── resolvers       # GraphQL Resolvers
|   |   |   └──
|   |   ├── typeDefs        # GraphQL Type Definitions
|   |   |   └──
|   |   ├── config.js       # DB Configurations (see Server README)
|   |   └── index.js
|   ├── .eslintrc           # Linting
|   ├── .gitignore          # server .gitignore
|   ├── package-lock.json   # Node Dependency Packages
|   ├── package.json        # Node Package
|   └── README.md           # Server README
|
├── .gitignore              # Global .gitignore
└── README.md               # Global README
```