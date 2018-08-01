/**
 * Created by pc-david on 2016/12/19.
 */
var vm = new Vue({
    el: "#aaa",
    data() {
        return {
            tags: [
                { key: 1, name: '标签一', type: '' },
                { key: 2, name: '标签二', type: 'gray' },
                { key: 5, name: '标签三', type: 'primary' },
                { key: 3, name: '标签四', type: 'success' },
                { key: 4, name: '标签五', type: 'warning' },
                { key: 6, name: '标签六', type: 'danger' }
            ],
            data: [{
                label: '一级 1',
                children: [{
                    label: '二级 1-1'
                }]
            }, {
                label: '一级 2',
                children: [{
                    label: '二级 2-1'
                }, {
                    label: '二级 2-2'
                }]
            }, {
                label: '一级 3',
                children: [{
                    label: '二级 3-1'
                }, {
                    label: '二级 3-2'
                }]
            }],

            defaultProps: {
                children: 'children',
                label: 'label'
            }
        };
    },
    methods: {
        handleClose(tag) {
            this.tags.splice(this.tags.indexOf(tag), 1);
        },
        handleNodeClick(data) {
            console.log(data);
        }
    }
});