exports.session = async ctx => {
  ctx.session.n = ctx.session.n ? ctx.session.n + 1 : 1
  await ctx.render('session', ctx.session)
}
