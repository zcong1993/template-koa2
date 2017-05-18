exports.index = async ctx => {
  await ctx.render('index')
}

exports.user = async ctx => {
  await ctx.render('user', ctx.params)
}
