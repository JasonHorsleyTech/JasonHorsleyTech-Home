/* 
 data-toggle on twitter bootstrap is OK, if you want vertical. But what if you DON'T and you instead want FANCY STUFF?
 
 Adding custom JS. Waits for a doc ready, adds basic class toggling to associated elements
 */
$(document).ready(function () {
    /*
     * Usage examples
     * 
     * <div class="css-toggle"></div>
     * Clicking div.css-toggle [
     *  Adds self.open and removes self.closed, 
     *  Removes self.closed and adds self.open
     * ]
     * 
     * <div class="css-toggle" target="anotherDiv"></div>
     * <div class="anotherDiv"></div>
     * Clicking div.css-toggle [
     *  Adds #anotherDiv.open and removes #anotherDiv.closed, 
     *  Removes #anotherDiv.closed and adds #anotherDiv.open
     * ]
     * 
     * If target cannot be querySelected, defatuls to self
     */
    $(".css-toggle").click(function () {
        let sel = $(this).attr("target");
        let elem = ($("#" + sel)[0]) ? $("#" + sel) : $(this);
        // Check open first, so a no-class element will "open" by default
        if (elem.hasClass("open")) {
            elem.removeClass("open");
            elem.addClass("closed");
        } else {
            elem.removeClass("closed");
            elem.addClass("open");
        }
    })
});