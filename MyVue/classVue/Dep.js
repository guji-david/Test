
class Dep {
    // static  target=null;
    constructor(){
        this.list =[]
    }
    listen(listener){
        this.list.push(listener)
    }
    notify(){
        for(var i=0;i<this.list.length;i++){
            this.list[i].update()
        }
    }
}
Dep.prototype.target==null
export default Dep

