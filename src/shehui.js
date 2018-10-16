var fnTextPopup = function(arr, options) {
                // arr鍙傛暟鏄繀椤荤殑
                if(!arr || !arr.length) {
                    return;
                }
                // 涓婚€昏緫
                var index = 0;
                document.documentElement.addEventListener('click', function(event) {
                    var x = event.pageX,
                        y = event.pageY;
                    var eleText = document.createElement('span');
                    eleText.className = 'text-popup';
                    this.appendChild(eleText);
                    if(arr[index]) {
                        eleText.innerHTML = arr[index];
                    } else {
                        index = 0;
                        eleText.innerHTML = arr[0];
                    }
                    this.r = Math.floor(Math.random()*255);
                    this.g = Math.floor(Math.random()*255);
                    this.b = Math.floor(Math.random()*255);
                    // 鍔ㄧ敾缁撴潫鍚庡垹闄よ嚜宸�
                    eleText.addEventListener('animationend', function() {
                        eleText.parentNode.removeChild(eleText);
                    });
                    // 浣嶇疆
                    eleText.style.left = (x - eleText.clientWidth / 2) + 'px';
                    eleText.style.top = (y - eleText.clientHeight) + 'px';
                    eleText.style.color = '#'+('00000'+(Math.random()*0x1000000<<0).toString(16)).substr(-6);
                     // '#'+('00000'+(Math.random()*0x1000000<<0).toString(16)).substr(-6); 
                     // eleText.color = 'rgba('+ this.r +','+ this.g +','+ this.b +'1)'; 
                    // index閫掑
                    index++;

                });
            };
            // fnTextPopup(['瀵屽己', '姘戜富', '鏂囨槑', '鍜岃皭', '鑷敱', '骞崇瓑', '鍏', '娉曟不', '鐖卞浗', '鏁笟', '璇氫俊', '鍙嬪杽']);
            fnTextPopup(['民主', '富强', '文明', '和谐']);

