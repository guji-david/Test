/**
 * Created by pc-david on 2016/12/19.
 */
var vm = new Vue({
    el: "#aaa",
    data: {
        radio: '2',
        radio2:6,
        radio3:"北京",
        radioList:["北京","上海","广州","深圳"],
        value1:true,
        value2:true,
        value4: 0,
        value5: 50,
        value6: 42,
        value7: null,
        value8: 3.9,
        checkList: [],
        regDisabled:true
    },
    methods: {
        radioChange:function (val) {
            console.log("val"+val);
        },
        rate:function (val) {
            console.log("val------------->"+val);
        }
    },
    computed:{
        change1: function () {
            this.checkList=['复选框 A','复选框 B','复选框 C'];
           return this.checkList;
},
    }
});