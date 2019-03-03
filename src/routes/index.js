import portfolio from './portfolio.route';

export default (app) => {
  app.use('/', (req, res) => {
    res.send("hello");    
  });

  app.use('/portfolio', portfolio);
};
