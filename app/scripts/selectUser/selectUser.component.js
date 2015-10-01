import selectUser from './selectUser.html!text';
import selectUserController from './selectUser.controller';

class SelectUser {
  constructor() {
    this.restrict = 'E';
    this.controller = selectUserController;
    this.controllerAs = 'selectUserCtrl';
    this.template = selectUser;
    this.bindToController = {
      onSubmit: '&'
    };
    this.scope = true
  }
}

angular.module('githubApp')
  .directive('selectUserComponent', () => new SelectUser());

export default SelectUser;
