import portfolio from './portfolio.route';

export default (app) => {
  app.use('/portfolio', portfolio);
};
