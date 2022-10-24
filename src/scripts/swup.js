const swup = new Swup()

// run once
init();

// this event runs for every page view after initial load
swup.on('contentReplaced', init);