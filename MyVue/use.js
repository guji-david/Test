Vue.use=function (plugin) {
    if(plugin.installed){
        return;
    }
    var args = toArray(arguments,1)
    args.unshift(this);
    if(typeof plugin.install === 'function'){
        plugin.install.apply(plugin,args);
    } else if(typeof plugin === 'function'){
        plugin.install.apply(null,args);
    }
    plugin.installed = true;
    return this
}
function toArray (list, start) {
    start = start || 0;
    var i = list.length - start;
    var ret = new Array(i);
    while (i--) {
        ret[i] = list[i + start];
    }
    return ret;
}