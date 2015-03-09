/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindElementAction(compId, symbolName, "${Menu_btn}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.$('MenuActive_Click').toggle();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3090, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

            Symbol.bindElementAction(compId, symbolName, "${HHPLOGO_Click}", "click", function(sym, e) {
         // insert code for mouse click here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("Home");
         

      });
         //Edge binding end



      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4935, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6265, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7855, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9851, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 11601, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 13862, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 15811, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 17415, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 18917, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${PRbtn}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.play("PrayerRequest");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${event_btn}", "click", function(sym, e) {
         // insert code for mouse click here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("Events");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${peek_btn}", "click", function(sym, e) {
         // insert code for mouse click here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("Peak");
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 21571, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${community_btn}", "click", function(sym, e) {
         // insert code for mouse click here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("News");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Download_Sermons}", "click", function(sym, e) {
         // insert code for mouse click here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("Orders");
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 23885, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'Show_Movie'
   (function(symbolName) {   
   
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         var Slides = sym.$("Slides");
         var content = '<iframe width="480" height="345" frameborder="0" scrolling="hidden" marginheight="0" marginwidth="0"src="http://youbetech.com/betatesting/Higher%20Purpose%20Fellowship%20Mobile%20App/HPF%20Slide%20Show/index.html"></iframe>'
         Slides.html(content);

      });
      //Edge binding end

   })("Show_Movie");
   //Edge symbol end:'Show_Movie'

   //=========================================================
   
   //Edge symbol: 'Menu_btn'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${Menu_Image}", "click", function(sym, e) {
         // insert code for mouse click here
         // Set a toggle to hide or show an element 
         
         // Set a toggle to play or pause the audio timeline 
         if (sym.isPlaying()) {
         	sym.stop();
         } else {
         	sym.play();
         }
         
         

      });
      //Edge binding end

   })("Menu_btn");
   //Edge symbol end:'Menu_btn'

   //=========================================================
   
   //Edge symbol: 'MenuActive_Click'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${About_Click}", "click", function(sym, e) {
         // insert code for mouse click here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.getComposition().getStage().play("About HPF");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${WWB_Click}", "click", function(sym, e) {
         // insert code for mouse click here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.getComposition().getStage().play("WWB");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle8}", "click", function(sym, e) {
         // insert code for mouse click here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.getComposition().getStage().play("Contact");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${LEADERSHIP_CLICK}", "click", function(sym, e) {
         // insert code for mouse click here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.getComposition().getStage().play("Leadership");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Our_Ministries}", "click", function(sym, e) {
         // insert code for mouse click here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.getComposition().getStage().play("OurMin");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${contrib}", "click", function(sym, e) {
         // insert code for mouse click here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.getComposition().getStage().play("contribute");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${HPFNews_BTN}", "click", function(sym, e) {
         sym.getComposition().getStage().play("News");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${HPFEvents}", "click", function(sym, e) {
         sym.getComposition().getStage().play("Events");

      });
      //Edge binding end

   })("MenuActive_Click");
   //Edge symbol end:'MenuActive_Click'

   //=========================================================
   
   //Edge symbol: 'ContactView'
   (function(symbolName) {   
   
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         var Webview2 = sym.$("Webview2");
         var content2 = '<iframe width="444" height="619" frameborder="0" scrolling="hidden" marginheight="0" marginwidth="0"src="http://youbetech.com/betatesting/Higher%20Purpose%20Fellowship%20Mobile%20App/mobilepages/contact.html"></iframe>'
         Webview2.html(content2);
         

      });
      //Edge binding end

   })("ContactView");
   //Edge symbol end:'ContactView'

   //=========================================================
   
   //Edge symbol: 'OMViewWeb'
   (function(symbolName) {   
   
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         var Our_Ministries = sym.$("Our_Ministries");
         var content3 = '<iframe width="444" height="619" frameborder="0" scrolling="hidden" marginheight="0" marginwidth="0"src="http://youbetech.com/betatesting/Higher%20Purpose%20Fellowship%20Mobile%20App/mobilepages/leadership-team.html"></iframe>'
         Our_Ministries.html(content3);
         
         

      });
      //Edge binding end

   })("OMViewWeb");
   //Edge symbol end:'OMViewWeb'

   //=========================================================
   
   //Edge symbol: 'paymentview'
   (function(symbolName) {   
   
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         var Payment = sym.$("Payment");
         var content4 = '<iframe width="444" height="619" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"src="http://youbetech.com/betatesting/Higher%20Purpose%20Fellowship%20Mobile%20App/mobilepages/contributions.html"></iframe>'
         Payment.html(content4);
         

      });
      //Edge binding end

   })("paymentview");
   //Edge symbol end:'paymentview'

   //=========================================================
   
   //Edge symbol: 'HPFNews'
   (function(symbolName) {   
   
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         var NewView = sym.$("NewView");
         var content4 = '<iframe width="444" height="618" frameborder="0" scrolling="hidden" marginheight="0" marginwidth="0"src="http://higherpurposefellow65892045547.blogspot.com/"></iframe>'
         NewView.html(content4);
         

      });
      //Edge binding end

   })("HPFNews");
   //Edge symbol end:'HPFNews'

   //=========================================================
   
   //Edge symbol: 'HPFEVent'
   (function(symbolName) {   
   
      

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         // insert code to be run when the symbol is created here
         var Events= sym.$("Events");
         var content22 = '<iframe width="444" height="630" align="center" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"src="http://youbetech.com/betatesting/Higher%20Purpose%20Fellowship%20Mobile%20App/mobilepages/calendar-events.html"></iframe>'
         Events.html(content22);

      });
      //Edge binding end

   })("HPFEVent");
   //Edge symbol end:'HPFEVent'

   //=========================================================
   
   //Edge symbol: 'PRView'
   (function(symbolName) {   
   
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         var PrayRequest = sym.$("PrayRequest");
         var content6 = '<iframe width="444" height="613" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"src="http://youbetech.com/betatesting/Higher%20Purpose%20Fellowship%20Mobile%20App/mobilepages/prayer-request.html"></iframe>'
         PrayRequest.html(content6);
         

      });
      //Edge binding end

   })("PRView");
   //Edge symbol end:'PRView'

   //=========================================================
   
   //Edge symbol: 'viewpeak'
   (function(symbolName) {   
   
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         var peakview = sym.$("peakview");
         var content7 = '<iframe width="444" height="611" align="center" frameborder="0" scrolling="hidden" marginheight="0" marginwidth="0"src="http://youbetech.com/betatesting/Higher%20Purpose%20Fellowship%20Mobile%20App/mobilepages/video.html"></iframe>'
         peakview.html(content7);
         

      });
      //Edge binding end

   })("viewpeak");
   //Edge symbol end:'viewpeak'

   //=========================================================
   
   //Edge symbol: 'logoano'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 13000, function(sym, e) {
         
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("repeat");

      });
      //Edge binding end

   })("logoano");
   //Edge symbol end:'logoano'

   //=========================================================
   
   //Edge symbol: 'viewerdvd'
   (function(symbolName) {   
   
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         var OrderDVDWeb = sym.$("OrderDVDWeb");
         var content19 = '<iframe width="444" height="618" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"src="http://youbetech.com/betatesting/Higher%20Purpose%20Fellowship%20Mobile%20App/mobilepages/dvd.html"></iframe>'
         OrderDVDWeb.html(content19);
         

      });
      //Edge binding end

   })("viewerdvd");
   //Edge symbol end:'viewerdvd'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-111927735");