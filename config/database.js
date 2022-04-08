module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'ec2-99-80-170-190.eu-west-1.compute.amazonaws.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'd192tbn6vterqe'),
      user: env('DATABASE_USERNAME', 'oyfuoesjmmumjx'),
      password: env('DATABASE_PASSWORD', '437a77ce5c47d9a5af10cf7cf6b96b68594837781a66e093f0df3a9925ad6f4b'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
