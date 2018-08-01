/**
 * Created by pc-david on 2016/10/24.
 */

var vm = new Vue({
    el: "#aaa",
    data: {
        activeColor: 'red',
        fontSize: 30,
        newTodo: '',
        testFont:"test",
        todos: [
            { text: 'Add some todos' }
        ],
        filters: [
            {
                categories: ['电子商务', '互联网医疗', '互联网金融'],
                showFilter: true,
                title: '分类'
            }, {
                categories: ['正在申购', '申购完成'],
                showFilter: false,
                title: '状态'
            }, {
                categories: ['杭州', '上海', '北京', '深圳', '广州'],
                showFilter: false,
                title: '地区'
            }
        ]
    },
    methods: {
        test:function(){
            vm.testFont="222222222222222";
        },
        addTodo: function () {
            var text = this.newTodo.trim()
            if (text) {
                this.todos.push({ text: text })
                this.newTodo = ''
            }
        },
        removeTodo: function (index) {
            this.todos.splice(index, 1)
        },

        toggleFilter:function (index){
            this.filters[index].showFilter = this.filters[index].showFilter ? false : true
        },

        changeFilter:function(index, category) {
            this.filters[index].title = category
        }
    }
});
