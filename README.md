# tasks2do

www.tasks2do.com

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
|   ├── config              # Config Files
|   |   └── database.js     # DB Info
|   ├── node_modules        # Dependencies
|   |   └──
|   ├── .eslintrc           # Linting
|   ├── .gitignore          # server .gitignore
|   ├── apollo.config       # Apollo configuration
|   ├── nodemon.json        # DB ENV Variables (see './config/database.js')
|   ├── package-lock.json   # Node Dependency Packages
|   ├── package.json        # Node Package
|
├── .gitignore              # Global .gitignore
└── README.md               # Global README
```