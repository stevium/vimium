if (location.search !== "?x") {
    location.search = "?x";
    throw new Error;  // load everything on the next page;
}
Vomnibar.init();
setTimeout(() => {
    Vomnibar.vomnibarUI.activate({name:"activate", selectFirst: true, focus: true});
}, 10);
