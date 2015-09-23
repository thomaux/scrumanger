angular.module("scrumanger.components.templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("board/views/board.html","<md-toolbar>\r\n    <div class=\"md-toolbar-tools\">Sprint #{{Board.sprintNr}}</div>\r\n</md-toolbar>\r\n<md-content layout layout-padding>\r\n    <div ng-transclude></div>\r\n</md-content>");
$templateCache.put("lane/views/lane.html","<md-list>\r\n    <md-subheader>{{Lane.title}}</md-subheader>\r\n    <section dnd-list=\"Board.tasks\" dnd-drop=\"Lane.moveTask(event, index, item)\">\r\n        <ticket ng-repeat=\"task in Board.tasks|filter:{status: Lane.status}\"\r\n                title=\"{{task.title}}\"\r\n                dnd-draggable=\"task\"\r\n                dnd-moved=\"Board.tasks.splice(Board.tasks.indexOf(task), 1)\">\r\n\r\n        </ticket>\r\n        <md-list-item ng-if=\"!(Board.tasks|filter:{status: Lane.status}).length\">\r\n            No tasks.\r\n        </md-list-item>\r\n    </section>\r\n\r\n</md-list>");
$templateCache.put("task-list/views/add-task.html","<md-dialog aria-label=\"add task\">\r\n    <form>\r\n        <md-toolbar>\r\n            <div class=\"md-toolbar-tools\">\r\n                <h2>Add task</h2>\r\n                <span flex></span>\r\n                <md-button aria-label=\"cancel\" class=\"md-icon-button\" ng-click=\"AddTaskDialog.cancel()\">\r\n                    <i class=\"fa fa-times\"></i>\r\n                </md-button>\r\n            </div>\r\n        </md-toolbar>\r\n        <md-dialog-content>\r\n            <input ng-model=\"AddTaskDialog.taskName\" ng-required=\"true\" placeholder=\"name\">\r\n        </md-dialog-content>\r\n        <div class=\"md-actions\" layout=\"row\">\r\n            <span flex></span>\r\n            <md-button aria-label=\"add\" class=\"md-raised md-primary\" ng-disabled=\"!AddTaskDialog.taskName\" ng-click=\"AddTaskDialog.ok()\">\r\n                Add\r\n            </md-button>\r\n            <md-button aria-label=\"cancel\" ng-click=\"AddTaskDialog.cancel()\">\r\n                Cancel\r\n            </md-button>\r\n        </div>\r\n    </form>\r\n</md-dialog>");
$templateCache.put("task-list/views/task-list.html","<md-list>\r\n    <md-subheader>\r\n        {{TaskList.title}}\r\n        <md-button ng-hide=\"TaskList.disableAdd()\" class=\"md-icon-button md-primary\" ng-click=\"TaskList.addTask()\">\r\n            <i class=\"fa fa-plus\"></i>\r\n            <md-tooltip>Add task</md-tooltip>\r\n        </md-button>\r\n        <ng-transclude></ng-transclude>\r\n        <span flex></span>\r\n        <md-button class=\"md-icon-button\" ng-click=\"TaskList.expanded = !TaskList.expanded\">\r\n            <i class=\"fa\" ng-class=\"{\'fa-chevron-up\': TaskList.expanded, \'fa-chevron-down\': !TaskList.expanded}\"></i>\r\n            <md-tooltip>\r\n                {{TaskList.collapsed ? \'Expand\' : \'Collapse\'}}\r\n            </md-tooltip>\r\n        </md-button>\r\n    </md-subheader>\r\n    <section ng-if=\"TaskList.expanded\" dnd-list=\"TaskList.list\" dnd-disable-if=\"TaskList.disableAdd()\">\r\n        <md-list-item ng-repeat=\"task in TaskList.list\"\r\n                      dnd-draggable=\"task\"\r\n                      dnd-disable-if=\"TaskList.disableAdd()\"\r\n                      dnd-moved=\"TaskList.list.splice($index, 1)\">\r\n            {{task.title}}\r\n        </md-list-item>\r\n        <md-list-item ng-if=\"!TaskList.list.length\">\r\n            No tasks.\r\n        </md-list-item>\r\n    </section>\r\n</md-list>");
$templateCache.put("ticket/views/ticket.html","<md-card>\r\n    <md-card-content>\r\n        {{Ticket.title}}\r\n    </md-card-content>\r\n</md-card>");}]);