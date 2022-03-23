module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'e583c0264ead3f5c84066b0c355e9832'),
  },
});
