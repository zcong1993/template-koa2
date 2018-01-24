module.exports = {
  prompts: {
    name: {
      message: 'What is the name of the new project?',
      role: 'folder:name'
    },
    description: {
      message: 'How would you descripe the new project?',
      default: `my koa2 project`
    },
    username: {
      message: 'What is your GitHub username?',
      role: 'git:name',
      store: true
    },
    email: {
      message: 'What is your GitHub email?',
      role: 'git:email',
      store: true
    },
    website: {
      message: 'The URL of your website?',
      default({username}) {
        return `github.com/${username}`
      },
      store: true
    },
    simple: {
      message: 'Use simple template ?',
      type: 'confirm',
      default: true
    },
    cors: {
      message: 'Need cors support ?',
      type: 'confirm',
      default: false
    },
    session: {
      message: 'Need session support ?',
      type: 'confirm',
      default: false,
      when: answers => !answers.simple
    },
    test: {
      message: 'Need test ?',
      type: 'confirm',
      default: true
    },
    watch: {
      message: 'Need auto reload on dev mode ?',
      type: 'confirm',
      default: true
    }
  },
  filters: {
    'views/**': '!simple',
    'public/**': '!simple',
    'controllers/index.js': '!simple',
    'controllers/session.js': '!simple',
    'views/session.pug': 'session',
    'controllers/session.js': 'session',
    'test/**': 'test'
  },
  move: {
    'gitignore': '.gitignore'
  },
  showTip: true,
  installDependencies: false,
  gitInit: true
}
