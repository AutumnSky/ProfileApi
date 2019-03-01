import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const portfolioSchema = new Schema({
  projectName: String,
  year: Number,
  role: [ String ],
  using: [ String ],
  participation: Number,
  link: {
    type: {
      iOS: String,
      Android: String,
      Web: String
    }
  },
  screenshot: [ String ]
});

const Portfolio = mongoose.model('Portfolio', portfolioSchema);

export default Portfolio;
