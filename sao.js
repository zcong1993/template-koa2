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
      message: 'Use simple template?',
      type: 'confirm',
      default: true
    },
    session: {
      message: 'Need session support?',
      type: 'confirm',
      default: false,
      when: answers => !answers.simple
    }
  },
  filters: {
    'views/**': '!simple',
    'public/**': '!simple',
    'controllers/index.js': '!simple',
    'controllers/session.js': '!simple',
    'views/session.pug': 'session',
    'controllers/session.js': 'session'
  },
  move: {
    'gitignore': '.gitignore'
  },
  post({log, chalk, isNewFolder, folderName}) {
    log.success('Done!')
    if (isNewFolder) {
      log.info(`cd ${chalk.yellow(folderName)} to get started!`)
    }
  }
}
