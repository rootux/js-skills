import angular from 'angular';

import constants  from './config/app.constants';
import appConfig  from './config/app.config';
import appRun     from './config/app.run';
import 'angular-ui-router';
import 'angular-ui-bootstrap';
// Import our templates file (generated by Gulp)
import './config/app.templates';
import 'angular-moment';

import './layout';
import './home';
import './services';
import './products';
import './filters';

const requires = [
  'ui.router',
  'ui.bootstrap',
  'angularMoment',
  'templates',
  'app.layout',
  'app.products',
  'app.home',
  'app.filters',
  'app.services',
];


window.app = angular.module('app', requires);

angular.module('app').constant('AppConstants', constants);

angular.module('app').config(appConfig);

angular.module('app').run(appRun);

angular.bootstrap(document, ['app'], {
  strictDi: true
});
