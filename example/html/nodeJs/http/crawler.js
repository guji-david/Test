/**
 * Created by david on 2016/2/13.
 */
var http=require('http');
var cheerio=require('cheerio');
var url='http://www.imooc.com/learn/348';
function  filterChapter(html){
  var $=cheerio.load(html);
  var chapter =$('.chapter');
    var courseData=[];
    chapter.each(function(item){
        var chapter =$(this);
        var chapterTitle =chapter.find('strong').text();
        var videos=chapter.find('.video').children('li');

        var chapterData={
            chapterTitle:chapterTitle,
            videos:[]
        };
        videos.each(function(item){
            var video=$(this).find('.studyvideo');
            var videoTitle=video.text();
            var id=video.attr('href').split('/video/')[1];
            chapterData.videos.push({
                title:videoTitle,
                id:id
            });
        });
        courseData.push(chapterData);

    });
    return courseData;
}
function printCourseInfo(courseData){
    courseData.forEach(function(item){
       var chapterTitle=item.chapterTitle;
        console.log(chapterTitle+'\n');
        item.videos.forEach(function(video){
            console.log('['+video.id+'] '+video.title+'\n');
        })
    });
}
http.get(url,function(res){

    var html='';
    res.on('data',function(data){
        html+=data;
    });
    res.on('end',function(){
        var courseData=filterChapter(html);
        printCourseInfo(courseData);
    })
}).on('error',function(){
    console.log('��ȡ�γ����ݴ��� ')
});






