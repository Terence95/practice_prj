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
        // Math.ceil() 函数执行向上取整
        // Math.floot() 函数执行向下取整
        // Math.round() 执行标准舍入
        // 下面这句话是讲 _carouselHeight / _liHeight 的值进行向上取整
        // 也就是 280 / 72 ~ 4 所以 _set 是 4
        _set = Math.ceil(_carouselHeight / _liHeight),
        _count = Math.ceil($li.length / _set),
        _height = _set * _liHeight * -1,
        timer, speed = 3000,
        _animateSpeed = 400, //轮播速度和动画速度
        _index = 0,
        _countIndex = 0;
    console.log('_liHeight=' + _liHeight); //72
    console.log('_carouselHeight=' + _carouselHeight);//280
    console.log('_set=' + _set); //4 计算一组能显示几张图 在这里 在 carousel 280 的高度下，一个li的高度是72 所以在 carousel中可以显示4张图
    console.log('_count='+_count); // 2 表示 4张图片为一组，一共有两组图片
    console.log('_height='+_height); // -288px 移动4个li的像素
    // 在缩图前面插入一个 .nav-bar 当点击到该缩图时的效果
    $('<span class="nav-bar"></span>').insertBefore($li.find('img'));
    // 让描述区块背景有透明度
    $block.find('.desc-bg').css('opacity', 0.5);

    // 如果图片数组超出一次能显示的数量，产生切换上下的按钮
    var $controls = null;
    if (_count > 1) {
        $controls = $thumbs.append('<a href="#prev" class="prev"></a><a href="#next" class="next"></a>').find('.prev, .next');
        // eq选择器选择带有指定index 的元素
        // 如果大于 1组图片了，那么向上的按钮就被隐藏
        var $prev = $controls.eq(0).hide(),
            $next = $controls.eq(1);

        // 当点击上下按钮时
        $controls.click(function(e) {
            // 计算要显示第几组
            // e.target.className看点击事件发生的元素的 className是不是 prev 如果是 _countIndex = _countIndex - 1 + _count = 0 即显示第一组的四张
            // 否则  _countIndex + 1 % 2 = 2 % 2 =
            _countIndex = Math.floor((e.target.className == 'prev' ? _countIndex - 1 + _count : _countIndex + 1) % _count);
            // console.log(_countIndex);
            // 进行动画
            // stop停止正在进行的动画
            $ul.stop().animate({
                // 求移动多少像素
                // _countIndex * _height(-288px);
                top: _countIndex * _height
            }, _animateSpeed);

            // 判斷上下鈕顯示與否
            $prev.toggle(_countIndex > 0);
            $next.toggle(_countIndex != _count - 1);

            return false;

        });
    }


    // 缩图li被点击
    $li.click(function() {
        var $this = $(this),
            $a = $this.find('a'),
            $img = $this.find('img');


        clearTimeout(timer);
        _index = $this.index();

        // 分別改變左邊顯示區塊的超連結, 圖片, alt 及描述內容
        $photoA.attr('href', $a.attr('href'));
        $photoImg.attr({
            src: $img.attr('src'),
            alt: $img.attr('alt')
        });

        $photoDesc.html($img.attr('alt'));
        $this.addClass('current').siblings('.current').removeClass('current');

        // 如果目前的播放按钮不是播放样式时就启动计时器
        if (!$playPauseBtn.hasClass('playPause-btn-play')) {
          timer = setTimeout(auto, speed + _animateSpeed);
        }

    }).eq(_index).click();


    // 当播放按钮被点击时
    $playPauseBtn.click(function() {
        // 这里要进行播放暂停图标的样式切换

        // toggleClass()对设置或者移除被选元素的一个或者多个类进行切换
        // 如果不存在则添加类，如果设置，则删除之

        var $this = $(this).toggleClass('playPause-btn-pause playPause-btn-play'),
            _hasPlay = $this.hasClass('playPause-btn-play'),
            _txt = _hasPlay ? '播放' : '暂停';


        // 如果目前的播放按钮不是 “播放状态” 就启动计时器； 否则停止计时器
        if (_hasPlay) {
            // clear timeout 方法可以取消
            clearTimeout(timer);
        } else {
            // setTimeout(code, millisec) 用于在指定的毫秒数后调用函数或计算表达式
            timer = setTimeout(auto, speed);
        }
        $this.attr('title', _txt).text(_txt);

        return false;
    });


    // 自动轮播使用
    function auto() {
        _index = (_index + 1) % $li.length;
        var $tmp = $li.eq(_index).click();

        var _indexCount = Math.floor(_index / _set);
        // 判斷是否要切換縮圖的顯示組數
        if ($controls !== null && (_index == (_countIndex + 1) * _set || _index === 0) && _countIndex != _indexCount) {
            $next.click();
            $tmp.animate({
                opacity: '1'
            }, _animateSpeed, function() {
                $tmp.addClass('current').siblings('.current').removeClass('current');
            });
        }
    }


});
