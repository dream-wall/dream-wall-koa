/**
 * Created by 胡志甫 on 2017/12/3.
 */
const userController = require('../../controllers/user');

module.exports = function (router) {
  router.post('/register', userController.addUser);
  router.post('/login', userController.findUser);
  router.get('/users', userController.getUsers);
  router.post('/withdraw', userController.destoryUser);
};
