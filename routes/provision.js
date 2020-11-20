// `app` is a configured Express App with authentication middleware
// that provides the `req.user` parameter for authenticated users.
import axios from 'axios'
const PUBLISHABLE_KEY = process.env.XKIT_PUBLISHABLE_KEY
const SECRET_KEY = process.env.XKIT_SECRET_KEY

app.use(async (req, res) => {
  if (!req.user) return
  const { access_token } = await axios({
    baseUrl: 'https://app.xkit.co/api/platform',
    method: 'post',
    url: '/users',
    auth: {
      username: PUBLISHABLE_KEY,
      password: SECRET_KEY
    },
    data: {
      user: { external_id: req.user.id }
    }
  })
 
  res.locals.xkitToken = access_token
})

