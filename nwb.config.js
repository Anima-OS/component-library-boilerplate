module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'boilerplate',
      externals: {
        react: 'React'
      }
    }
  }
}
