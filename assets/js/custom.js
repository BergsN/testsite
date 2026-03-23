// Replacing .show()/.hide() calls with addClass/removeClass in the desktop tabs section

// Assuming this is around line 92-112 based on user request

// ... previous code ...

// Replace .show()/.hide()
$('.tabs-desktop .ui-tabs-active').addClass('active');
$('.tabs-desktop .ui-tabs-active').removeClass('inactive');

// ... following code ...