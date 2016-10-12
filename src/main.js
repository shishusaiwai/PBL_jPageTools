function PBL(options) {
  var options = options || {};
  var debug = options.debug || false;
  var jitterBtnIDs = options.jitterBtnIDs || [];
  
  function watchError() {
    window.onerror = function(errorMessage, scriptURI, lineNumber,columnNumber,errorObj) {
      if (debug) {
         var error_msg = "错误信息：" + errorMessage + "\n" + "出错文件：" + scriptURI + "\n" + "出错行号：" + lineNumber + "\n" + "出错列号：" + columnNumber + "\n" + "错误详情：" + errorObj;
         alert(error_msg);
      } else {
         console.log("错误信息：" , errorMessage);
         console.log("出错文件：" , scriptURI);
         console.log("出错行号：" , lineNumber);
         console.log("出错列号：" , columnNumber);
         console.log("错误详情：" , errorObj);
      }
    }
  }

  function preventBtnJitter() {
    for (var i=0; i<jitterBtnIDs.length; i++) {
      var btnID = jitterBtnIDs[i];
      document.getElementById(btnID).addEventListener("click", function(){
	var btn = document.getElementById(btnID);
	btn.disabled = true;
	(function (btn) {
	  setTimeout(function () {btn.disabled = false;}, 2000);
	})(btn);
      });
    }
  }

  /* init operations */
  watchError();
  preventBtnJitter();
}
