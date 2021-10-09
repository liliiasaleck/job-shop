const {alias} = require('react-app-rewire-alias')

module.exports = function override(config) {
  alias({
    '@components': 'src/components',
    '@assets' : 'src/assets',
    '@helpers' : 'src/helpers',
    '@hooks' : 'src/hooks',
    '@routing' : 'src/routing',
    '@templates' : 'src/templates',
    '@ts' : 'src/ts',
    '@views' : 'src/views',





  })(config)

  return config
}