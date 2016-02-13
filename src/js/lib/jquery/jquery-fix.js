/**
 * Created by Jeng on 2015/8/6.
 * 修复 jquery ie 兼容性
 */
jQuery.extend({
    // A method for determining if a DOM node can handle the data expando
    acceptData: function( elem ) {
        var noData = elem.nodeName && jQuery.noData[ elem.nodeName.toLowerCase() ];
        // nodes accept data unless otherwise specified; rejection can be conditional
        // TODO Fix IE10,11 uploadify upload fail
        return !noData || noData !== true  && elem.getAttribute != null && elem.getAttribute("classid") === noData;
    }
});