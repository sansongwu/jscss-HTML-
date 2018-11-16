document.body.style.cssText = "background: yellow !important";
function sleep(delay) {
                var start = (new Date()).getTime();
                while ((new Date()).getTime() - start < delay) {
                    continue;
                }
            }
            sleep(15000)