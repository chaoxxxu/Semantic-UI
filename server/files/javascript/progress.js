semantic.progress = {};

// ready event
semantic.progress.ready = function() {

  var
    $progress      = $('.definition  .ui.progress').not('.success, .error, .warning'),
    $stateProgress = $('.definition .ui.success.progress, .ui.warning.progress, .ui.error.progress')
  ;

  setTimeout(function() {

    $progress
      .progress({
        showActivity: false,
        random: {
          min: 10,
          max: 90
        }
      })
      .progress('increment')
    ;

    $stateProgress
      .progress('set progress', 100)
    ;

  }, 300);

};


// attach ready event
$(document)
  .ready(semantic.progress.ready)
;