var Vue, walker, node;
walker = document.createTreeWalker(document.body, 1);
while ((node = walker.nextNode())) {
    if (node.vue) {
        Vue = node.vue.$options._base;
        if (!Vue.config.devtools) {
            Vue.config.devtools = true;
            if (window.VUE_DEVTOOLS_GLOBAL_HOOK) {
                window.VUE_DEVTOOLS_GLOBAL_HOOK.emit("init", Vue);
                console.log("==> vue devtools now is enabled");
            }
        }
        break;
    }
}
