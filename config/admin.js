module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET',"wP6umpoC6/UiVqXyeyN8cg=="),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT', "9wDIACYJfzDrWp/U+xyW+Q=="),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT', "YYf64y4kejyHGauobjUvZA=="),
    },
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
  },
});
