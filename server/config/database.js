const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const DB_URI = (
  `mongodb+srv://${process.env.MONGO_USER}:${
    process.env.MONGO_PASS
  }@tasks2do-sandbox-hcmaz.gcp.mongodb.net/test?retryWrites=true`
);

mongoose.connect(DB_URI, { useNewUrlParser: true });

mongoose.connection.once('open', () => console.log(`Connected to MongoDB at ${DB_URI}`));
mongoose.connection.on('error', error => console.error(error));

module.exports = mongoose;
