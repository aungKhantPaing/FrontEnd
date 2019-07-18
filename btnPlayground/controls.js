row$(document).ready(function() {
    var music = $('#music')[0];
    var button = $('#btn-lyric')[0];
    var btn_Clipboard = $('#btn-clipboard')[0];
    var clipboard = new ClipboardJS('#btn-clipboard');
    
    clipboard.on('success', function(e) {
        console.info('Action:', e.action);
        console.info('Text:', e.text);
        console.info('Trigger:', e.trigger);

        e.clearSelection();
    });
    
    clipboard.on('error', function(e) {
        console.error('Action:', e.action);
        console.error('Trigger:', e.trigger);
    });
    
    $('[data-toggle="popover"]').popover();
    
    $("body").keypress(function(event){
        console.dir(event);

        //Music Controls
        //112 -> p
        if (event.keyCode == 112) {
            if (music.paused){
                music.play();
            }else {
                music.pause();
            }
        }
        //109 -> m
        else if (event.keyCode == 109) {
            music.muted = !music.muted;
        }
        else if (event.keyCode == 114) {
            music.currentTime = 0;
        }
        //101 -> e
        else if (event.keyCode == 101) {
            music.muted = false;
            if (music.volume != 1) {
                music.volume += 0.1;
            }
            console.log(music.volume);
        }
        //100 -> d
        else if (event.keyCode == 100) {
            if (music.volume > 0.1){
                music.volume -= 0.1;
            }
            if (music.volume < 0.1) {
                music.muted = true;
            }
            console.log(music.volume);
        }

        //Other toggles
        //108 -> l
        else if (event.keyCode == 108){
            button.click();
        }
    });
});