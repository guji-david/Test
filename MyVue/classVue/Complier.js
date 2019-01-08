import Watcher from './Watcher'
const REG =/\{\{(.*)\}\}/
class Complier{
    constructor(el,vm){
        this.el= document.querySelector(el);
        this.vm=vm;
        this.frag=this._createFragment();
        this.el.appendChild(this.frag)
    }
    _createFragment(){
        var frag=document.createDocumentFragment();
        var child;
        while(child=this.el.firstChild){
            this._compile(child)
            frag.appendChild(child)
        }
        return frag;
    }
    _compile(node){

        if(node.nodeType ===1){
            console.log(node)
            var attr=node.attributes;
            if(attr.hasOwnProperty('v-model')){
                var name=attr['v-model'].nodeValue
                node.value=this.vm[name]
                node.addEventListener('input', (e) =>{
                    this.vm[name]=e.target.value
                })
            }
        }
        if(node.nodeType ===3){
            if(REG.test(node.nodeValue)){
                var name = RegExp.$1;
                name=name.trim();
                new Watcher(node,name,this.vm)
            }
        }
    }
}
export default Complier