/**
 * Created by pc-david on 2016/12/19.
 */
var vm = new Vue({
    'check-all': {
        twoWay: true,
        params: ['checkData'],
        bind() {
            /**
             - 如果所有的列表的checked属性都为true,则选中全选框,否则不选中全选框
             */
            this.vm.$watch(this.params.checkData, (checkData) => {
                if (checkData.every((item) => item.checked)) {
                    this.set(true);
                } else {
                    this.set(false);
                }
            }, { deep: true });
        },
        // checkAll发生更改时
        update(checkAll) {
            /**
             - 如果全选框被选中,则将列表的所有checked属性转为true,否则转为false
             */
            if (checkAll) {
                this.vm[this.params.checkData].forEach((item) => {
                    item.checked = true;
                });
            } else {
                this.vm[this.params.checkData].forEach((item) => {
                    item.checked = false;
                });
            }
        },
    },
});