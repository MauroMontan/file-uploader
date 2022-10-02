const app = require('./index');
const Config = require('./src/config');

const PORT = Config.LOCALPORT;

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
