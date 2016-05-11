$(function() {
    // 获取相关元素及高度
    var $block = $('#abgne-block'),
        $photo = $block.find('.photo'),
        $photoA = $photo.find('a'),
        $photoImg = $photoA.find('img'),
        $photoDesc = $photoA.find('.desc-title'),
        $thumbs = $block.find('.thumbs'),
        $carousel = $block.find('.carousel'),
        _carouselHeight = $carousel.height(),
        $playPauseBtn = $photo.append('<a href="#playPause" class="playPause-btn-pause" id="playPause-btn" title="暫停">暫停</a>').find('#playPause-btn'),
        $ul = $thumbs.find('ul'),
        $li = $ul.find('li'),
        _liHeight = $li.height(),
        _set = Math.ceil(_carouselHeight / _liHeight),
        _count = Math.ceil($li.length / _set),
        _height = _set * _liHeight * -1,
        timer, speed = 3000,
        _animateSpeed = 400, //轮播速度和动画速度
        _index = 0,
        _countIndex = 0;
    // 在缩图前面插入一个 .nav-bar 当点击到该缩图时的效果
    $('<span class="nav-bar"></span>').insertBefore($li.find('img'));
    // 让描述区块背景有透明度
    $block.find('.desc-bg').css('opacity', 0.5);

    // 如果图片数组超出一次能显示的数量，产生切换上下的按钮
    var $controls = null;
    if (_count > 1) {
        $controls = $thumbs.append('<a href="#prev" class="prev"></a><a href="#next" class="next"></a>').find('.prev, .next');
        // eq选择器选择带有指定index 的元素
        var $prev = $controls.eq(0).hide(),
            $next = $controls.eq(1);

        // 当点击上下按钮时
        $controls.click(function(e) {
            // 计算要显示第几组
            _countIndex = Math.floor((e.target.className == 'prev' ? _countIndex - 1 + _count : _countIndex + 1) % _count);

            // 进行动画
            // stop停止正在进行的动画
            $ul.stop().animate({
                top: _countIndex * _height
            }, _animateSpeed);

            // 判斷上下鈕顯示與否
            $prev.toggle(_countIndex > 0);
            $next.toggle(_countIndex != _count - 1);

            return false;

        });
    }

});
