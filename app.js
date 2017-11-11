/*global angular,pdfMake*/
;
(function(window, angular) {
    'use strict';
    angular
        .module('app', [])
}(window, angular, undefined));

;
(function(window, angular){
    'use strict';
    angular
        .module('app')
        .run(run);
    run.$inject = ['$rootScope'];

    function run($rootScope) {
        
    }
}(window, angular, undefined));

;
(function(window, angular) {
    'use strict';
    angular
        .module('app')
        .config(config);
    config.$inject = [];

    function config() {
                
    }
}(window, angular, undefined));


var generatePDF = function() {
  kendo.drawing.drawDOM($("#page1")).then(function(group) {
    kendo.drawing.pdf.saveAs(group, "PDF.pdf");
  });;
}

$('div[contenteditable]').keydown(function(e) {
    // trap the return key being pressed
    if (e.keyCode === 13) {
      // insert 2 br tags (if only one br tag is inserted the cursor won't go to the next line)
      document.execCommand('insertHTML', false, '<br><br>');
      // prevent the default behaviour of return key pressed
      return false;
    }
  });

$("#btnDownload").click(function(){
    generatePDF();
})
