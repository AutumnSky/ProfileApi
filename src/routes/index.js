import * as controller from '../controllers';

export default (app) => {
  app.get('/portfolios', controller.getPortfolios);
  app.get('/workportfolios', controller.getWorkPortfolios);
  app.get('/personalprojects', controller.getPersonalProjects);

  app.use('/', (req, res) => {
    res.send('hello  😀');
  });
};
