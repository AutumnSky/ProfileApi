import Portfolio from '../models/portfolio.model';

export const getPortfolio = async (req, res) => {
  const result = await Portfolio.find({});
  res.json(result);
};
