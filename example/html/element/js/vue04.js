
/**
 * Created by pc-david on 2016/12/19.
 */
var vm = new Vue({
    el: "#aaa",
    data() {
        return {
            active: 0
        };
    },

    methods: {
        next() {
            if (this.active++ > 2) this.active = 0;
        }
    }
});