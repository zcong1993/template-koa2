module.exports = {
  description: 'Scaffolding out a koa2 project.',
  prompts() {
    return [
      {
        name: 'name',
        message: 'What is the name of the new project?',
        default: this.outFolder
      },
      {
        name: 'description',
        message: 'How would you descripe the new project?',
        default: `my go grpc project`
      },
      {
        name: 'author',
        message: 'What is your name',
        default: this.gitUser.name,
        store: true,
        required: true
      },
      {
        name: 'username',
        message: 'What is your GitHub username',
        default: this.gitUser.name,
        store: true,
        required: true
      },
      {
        name: 'email',
        message: 'What is your GitHub email',
        default: this.gitUser.email,
        store: true,
        required: true,
        validate: v => /.+@.+/.test(v)
      },
      {
        name: 'website',
        default(answers) {
          return `https://github.com/${answers.username}`
        },
        store: true
      },
      {
        name: 'simple',
        message: 'Use simple template ?',
        type: 'confirm',
        default: true
      },
      {
        name: 'test',
        message: 'Use a ci?',
        type: 'confirm',
        default: true
      },
      {
        name: 'cors',
        message: 'Need cors support ?',
        type: 'confirm',
        default: false
      },
      {
        name: 'session',
        message: 'Need session support ?',
        type: 'confirm',
        default: false,
        when: answers => !answers.simple
      },
      {
        name: 'watch',
        message: 'Need auto reload on dev mode ?',
        type: 'confirm',
        default: true
      }
    ]
  },
  actions() {
    return [
      {
        type: 'add',
        files: '**',
        filters: {
          'views/**': '!simple',
          'public/**': '!simple',
          'controllers/index.js': '!simple',
          'controllers/session.js': '!simple',
          'views/session.pug': 'session',
          'controllers/session.js': 'session',
          'test/**': 'test'
        }
      },
      {
        type: 'move',
        patterns: {
          // We keep `.gitignore` as `gitignore` in the project
          // Because when it's published to npm
          // `.gitignore` file will be ignored!
          gitignore: '.gitignore',
        }
      }
    ]
  },
  async completed() {
    await this.gitInit()
    this.showProjectTips()
  }
}
