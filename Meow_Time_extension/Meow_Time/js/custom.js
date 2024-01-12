window.onload = function(){

  const now = new Date();
  const currentHour = now.getHours();
  
  
  if(currentHour > 20)
  {
    setTimeout(function() {
  
      alert("😾Mèo nhắc nhở: Trang này sẽ đóng sau 3p nữa, bạn hãy dành thời gian nghỉ ngơi và đi ngủ🌙!");
      
    }, 17 * 60 * 1000);

    setTimeout(function() {
      (function() {
        'use strict';
        const currentHostname = window.location.hostname;
        if (currentHostname.includes("facebook.com") || currentHostname.includes("tiktok.com") || currentHostname.includes("twitter.com") || currentHostname.includes("instagram.com")) {
          window.location.href = "https://www.google.com"; // Chuyển hướng đến trang trống
          // Hoặc hiển thị thông báo cảnh báo
          // alert("Truy cập vào Facebook không được phép!");
        }
      })();
    }, 20 * 60 * 1000);
  }
  else
  {
    setTimeout(function() {
  
      alert("😼Mèo nhắc nhở: Trang này sẽ đóng sau 3p nữa, bạn hãy quay lại làm việc nào🌞!");
      
    }, 7 * 60 * 1000);

    setTimeout(function() {
      (function() {
        'use strict';
        const currentHostname = window.location.hostname;
        if (currentHostname.includes("facebook.com") || currentHostname.includes("tiktok.com")) {
          window.location.href = "https://www.google.com"; // Chuyển hướng đến trang trống
          // Hoặc hiển thị thông báo cảnh báo
          // alert("Truy cập vào Facebook không được phép!");
        }
      })();
    }, 10 * 60 * 1000);

  }
}

