
function verifyToken () {
  return (ctx, next) => {
    let token = ctx.request.query.token || 'guest'
    if (token && token.length > 4) {
      ctx.state.verify = { status: true, len: token.length }
      return next()
    } else {
      ctx.status = 403
      ctx.body = { code: 4003, msg: 'no auth' }
    }
  }
}

export default verifyToken
