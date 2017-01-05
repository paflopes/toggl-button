/*jslint indent: 2 */
/*global $: false, document: false, togglbutton: false*/
'use strict';

togglbutton.render('.modal-content:not(.toggl)', {observe: true}, function (elem) {
  var link,
    description = $('.form-group.card-details-title > .form-control.input-sm', elem).textContent,
    project = $('.project', elem).textContent;

  link = togglbutton.createTimerLink({
    className: 'kanbanize',
    description: description,
    projectName: project
  });

  $('.link-list').appendChild(link);
});
