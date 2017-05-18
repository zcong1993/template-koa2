exports.echo = async ctx => {
  console.log(ctx.request.body)
  ctx.response.body = ctx.request.body
}

exports.index = async ctx => {
  ctx.body = 'Post something to "/echo"'
}
