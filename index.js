import dotenv from 'dotenv';
import config from './config';
import server from './src/routes/index.routes'

dotenv.config();

server.listen(config.port, () => {
  console.log(`Server listening on port ${config.port}`);
});

module.exports = app;