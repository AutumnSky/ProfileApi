import * as controller from '../controllers';

export default (app) => {
  app.get('/portfolios', controller.getPortfolios);
  app.get('/portfolio/:id', controller.getPortfolioById);
  app.get('/workportfolios', controller.getWorkPortfolios);
  app.get('/workportfolio/:id', controller.getWorkPortfolioById);
  app.get('/personalprojects', controller.getPersonalProjects);
  app.get('/personalproject/:id', controller.getPersonalProjectById);

  app.use('/', (req, res) => {
    res.send('hello  😀');
  });
};
