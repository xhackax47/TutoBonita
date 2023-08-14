var module;
try {
  module = angular.module('bonitasoft.ui.fragments');
} catch (e) {
  module = angular.module('bonitasoft.ui.fragments', []);
  angular.module('bonitasoft.ui').requires.push('bonitasoft.ui.fragments');
}
module.directive('pbFragmentNouvelleDemandeFragment', function() {
  return {
    template: '<div>    <div class="row">\n        <div pb-property-values=\'dbb64879-b65b-492a-8702-9b5234f4c116\'>\n    <div ng-if="!properties.hidden" class="component col-md-12  col-sm-12  col-xs-12  col-lg-12" ng-class="properties.cssClasses">\n        <pb-date-picker></pb-date-picker>\n    </div>\n</div>\n    </div>\n    <div class="row">\n        <div pb-property-values=\'f17c91e0-84a8-4d7d-8368-fcb6896c0cb5\'>\n    <div ng-if="!properties.hidden" class="component col-md-12  col-sm-12  col-xs-12  col-lg-12" ng-class="properties.cssClasses">\n        <pb-input></pb-input>\n    </div>\n</div>\n    </div>\n</div>'
  };
});
