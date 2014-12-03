// JavaScript Document

function getClientBounds()
   {
    var clientWidth;
    var clientHeight;
    switch(Sys.Browser.agent) {
     case Sys.Browser.InternetExplorer:
      clientWidth = document.documentElement.clientWidth;
      clientHeight = document.documentElement.clientHeight;
      break;
     case Sys.Browser.Safari:
      clientWidth = window.innerWidth;
      clientHeight = window.innerHeight;
      break;
     case Sys.Browser.Opera:
      clientWidth = Math.min(window.innerWidth, document.body.clientWidth);
      clientHeight = Math.min(window.innerHeight, document.body.clientHeight);
      break;
     default:  // Sys.Browser.Firefox, etc.
      clientWidth = Math.min(window.innerWidth, document.documentElement.clientWidth);
      clientHeight = Math.min(window.innerHeight, document.documentElement.clientHeight);
      break;
    }

    return new Sys.UI.Bounds(0, 0, clientWidth, clientHeight);
   }
       
   function resizeElements()
   {
    var clientBounds = getClientBounds();
    var clientWidth = clientBounds.width;
    var clientHeight = clientBounds.height;
   
    var bg = $get("modalBackground"); 
    bg.style.width = Math.max(Math.max(document.documentElement.scrollWidth, document.body.scrollWidth), clientWidth) + 'px';
    bg.style.height = Math.max(Math.max(document.documentElement.scrollHeight, document.body.scrollHeight), clientHeight) + 'px';
   
    var scrollLeft = (document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft);
    var scrollTop = (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop); 
    var dialog = $get("animationDialog");
    dialog.style.left = scrollLeft + "px";
    dialog.style.top = scrollTop + "px";
   }

   $addHandler(window, "scroll", resizeElements);
   $addHandler(window, "resize", resizeElements);
   resizeElements();