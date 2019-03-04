import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const schema = new Schema({
  projectName: {
    type: {
      ko: String,
      en: String
    }
  },
  year: Number,
  from: String,
  to: String,
  role: [ String ],
  using: [ String ],
  participation: Number,
  link: {
    type: {
      iOS: String,
      Android: String,
      web: String
    }
  },
  screenshot: [ String ]
});

const model = mongoose.model('PersonalProject', schema);

export default model;
