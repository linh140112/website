// Đoạn script này tạo hiệu ứng khi bạn cuộn trang xuống
// Các phần tử có class "reveal" sẽ từ từ hiện ra (Fade in Up)

window.addEventListener('scroll', reveal);

function reveal(){
    var reveals = document.querySelectorAll('.reveal');

    for(var i = 0; i < reveals.length; i++){
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150; // Khoảng cách từ dưới lên để bắt đầu hiện

        if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add('active');
        }
    }
}

// Kích hoạt ngay lần đầu tải trang để hiện các phần tử đầu tiên
reveal();