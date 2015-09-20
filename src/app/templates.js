angular.module("scrumanger.templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("views/app.html","<md-toolbar>\r\n    <div class=\"md-toolbar-tools\">\r\n        <md-button class=\"md-primary md-hue-1\" ng-click=\"App.isNavigationOpen = !App.isNavigationOpen\" ng-class=\"{\'md-raised\': App.isNavigationOpen}\">\r\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"32px\" height=\"32px\" viewBox=\"0 0 18 18\" fit=\"\" preserveAspectRatio=\"xMidYMid meet\" style=\"pointer-events: none; display: block;\">\r\n                <path d=\"M0 0h18v18h-18z\" fill=\"none\"></path>\r\n                <path d=\"M2 13.5h14v-1.5h-14v1.5zm0-4h14v-1.5h-14v1.5zm0-5.5v1.5h14v-1.5h-14z\" fill=\"white\"></path>\r\n            </svg>\r\n        </md-button>\r\n        <h1>Scrumanger</h1>\r\n    </div>\r\n</md-toolbar>\r\n<section layout=\"row\" layout-padding>\r\n    <md-sidenav md-is-locked-open=\"App.isNavigationOpen\" flex>\r\n        <md-toolbar>\r\n            <div class=\"md-toolbar-tools\">Menu</div>\r\n        </md-toolbar>\r\n        <md-button ui-sref=\"main.plan\" ui-sref-active=\"md-accent\">Plan</md-button>\r\n        <md-button ui-sref=\"main.sprint\" ui-sref-active=\"md-accent\">Active sprint</md-button>\r\n    </md-sidenav>\r\n    <md-content flex>\r\n        <ui-view></ui-view>\r\n    </md-content>\r\n</section>");
$templateCache.put("plan/views/plan.html","<section layout=\"row\">\r\n    <md-list flex>\r\n        <md-subheader>Sprints</md-subheader>\r\n        <md-list-item ng-repeat=\"sprint in Plan.plan.sprints\">\r\n            <md-list>\r\n                <md-subheader>Sprint #{{sprint.nr}}</md-subheader>\r\n                <md-list-item ng-repeat=\"task in sprint.tasks\">\r\n                    {{task.title}}\r\n                </md-list-item>\r\n            </md-list>\r\n        </md-list-item>\r\n    </md-list>\r\n    <md-list flex>\r\n        <md-subheader>Backlog</md-subheader>\r\n        <md-list-item ng-repeat=\"task in Plan.plan.backlog\">\r\n            {{task.title}}\r\n        </md-list-item>\r\n    </md-list>\r\n</section>");
$templateCache.put("sprint/views/sprint.html","<board sprint-nr=\"{{Sprint.active.nr}}\" tasks=\"Sprint.active.tasks\">\r\n    <lane title=\"Todo\" status=\"todo\" flex></lane>\r\n    <lane title=\"In Progress\" status=\"doing\"></lane>\r\n    <lane title=\"Done\" status=\"done\"></lane>\r\n</board>");}]);