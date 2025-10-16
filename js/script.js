document.addEventListener("DOMContentLoaded", function() {
    if (typeof window.WOW !== 'undefined' && typeof window.WOW === 'function') {
        try {
            new WOW().init();
        } catch (e) {
            console.warn('WOW initialization failed:', e);
        }
    } else {
        // WOW.js not present; skip gracefully
        // console.info('WOW.js not loaded, skipping animations init.');
    }
});



