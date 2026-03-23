// Assuming the relevant part of the code is around these lines.
// Update desktop tabs section to use classes instead of .show()/.hide()
// Old code example:
// $("#tab1").hide(); 
// $("#tab1").show(); 

// Updated code example:
$("#tab1").removeClass('ui-tabs-active');
// Uncomment and update with your logic to determine active tab
// $("#tab2").addClass('ui-tabs-active');

// Add similar adjustments for other tabs as required.

// The rest of your custom.js file continues here...