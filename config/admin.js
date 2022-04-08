module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '173a5fd4c04cf73df4d1916f3ea5c64f'),
  },
});
