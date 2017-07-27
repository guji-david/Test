/**
 * Created by David on 2017/7/26.
 */
import  './css/common.css'
import Layer from './components/layer/layer.js'
const App =function () {
   var dom=document.getElementById('app');
   var layer=new Layer();
   dom.innerHTML=layer.tpl({
       name:'david',
       arr:['a','b','c']
   });
}
new App();