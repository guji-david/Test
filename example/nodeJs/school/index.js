/**
 * Created by david on 2016/2/12.
 */
var klass = require('./klass');
exports.add=function (Klasses){
    Klass.forEach(function(item,index){
        var _klass=item
        var teacherName=item.teacherName
        var students=item.students
        //student.add(item);
        klass.add('teacherName',students);

    })

}
