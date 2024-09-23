export const initVideo = () => {
    // Функция для смены источника видео в зависимости от ширины экрана
    function updateVideoSource() {
        var video = document.getElementById('myVideo');
        var source = document.getElementById('videoSrc');
        console.log(video);
        console.log(source);
        console.log(window.innerWidth);

        if (window.innerWidth < 450) {
            source.setAttribute('src', './src/video/timelapse2.mp4');
        } else {
            source.setAttribute('src', './src/video/timelapse1.mp4');
        }
        // Обновляем видео, чтобы новые источники применились
        video.load();

    }

    // Проверяем при загрузке страницы
    window.onload = updateVideoSource;

    // Проверяем при изменении размера окна
    window.onresize = updateVideoSource;
}