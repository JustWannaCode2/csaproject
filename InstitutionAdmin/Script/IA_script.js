jQuery(document).ready(function() {

    //The following code is for making the navigation bar stay to the top of the page with scrolling down.

    //Declaring new variable of navigation offset
    var navOffset = jQuery("#DDNavBar").offset().top
   /* alert(navOffset);*/

    //Wrapping the navigation bar so it does not jump in the page and none of the content is lost
    jQuery("#DDNavBar").wrap('<div class="nav-placeholder"></div>');

    //Using the above new div to set outerHeight
    jQuery(".nav-placeholder").height(jQuery("#DDNavBar").outerHeight());
    /*alert(navOffset);*/

    //The function starts when window is scrolled
    jQuery(window).scroll(function() {
        var scrollPos = jQuery(window).scrollTop();

        //If you scroll to the beginning of the navigation bar. This only works at certain threshold.
        if (scrollPos >= navOffset ) {
            jQuery("#DDNavBar").addClass("fixed");
           
        }

        // Remove the class and use initial position. e.g. relative or static
        else {
            jQuery("#DDNavBar").removeClass("fixed");
         
        }
    });
});