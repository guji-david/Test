/**
 * Created by pc-david on 2016/7/28.
 */
((function(window, PhotoSwipe){
    document.addEventListener('DOMContentLoaded', function(){
        var options = {
                preventHide: true,
                getImageSource: function(obj){
                    return obj.url;
                },
                getImageCaption: function(obj){
                    return obj.caption;
                }
            },
            instance = PhotoSwipe.attach([
                    { url: 'images/full/001.jpg', caption: '大熊 '},
                    { url: 'images/full/002.jpg', caption: 'Image 002'},
                    { url: 'images/full/003.jpg', caption: 'Image 003'},
                    { url: 'images/full/004.jpg', caption: 'Image 004'},
                    { url: 'images/full/005.jpg', caption: 'Image 005'},
                    { url: 'images/full/006.jpg', caption: 'Image 006'},
                    { url: 'images/full/007.jpg', caption: 'Image 007'},
                    { url: 'images/full/008.jpg', caption: 'Image 008'},
                    { url: 'images/full/009.jpg', caption: 'Image 009'},
                    { url: 'images/full/010.jpg', caption: 'Image 010'},
                    { url: 'images/full/011.jpg', caption: 'Image 011'},
                    { url: 'images/full/012.jpg', caption: 'Image 012'},
                    { url: 'images/full/013.jpg', caption: 'Image 013'},
                    { url: 'images/full/014.jpg', caption: 'Image 014'},
                    { url: 'images/full/015.jpg', caption: 'Image 015'},
                    { url: 'images/full/016.jpg', caption: 'Image 016'},
                    { url: 'images/full/017.jpg', caption: 'Image 017'},
                    { url: 'images/full/018.jpg', caption: 'Image 018'}
                ], options);
        instance.show(0);

    }, false);


})(window, window.Code.PhotoSwipe));