exports.echo = async ctx => {
  ctx.response.body = ctx.request.body
}

exports.index = async ctx => {
  ctx.body = 'Post something to "/echo"'
}
