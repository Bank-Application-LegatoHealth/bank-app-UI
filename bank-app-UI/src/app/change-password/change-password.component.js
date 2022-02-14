var check = function() {
    if (document.getElementById('password').value ==
      document.getElementById('confirmPassword').value) {
      document.getElementById('message').style.fontFamily= 'Verdana, Geneva, Tahoma, sans-serif';
      document.getElementById('message').style.fontSize="18px";
      document.getElementById('message').style.display=flex;
      document.getElementById('message').style.flexDirection=column;
      document.getElementById('message').style.margin=auto;
      document.getElementById('message').style.width="18px";
      document.getElementById('message').innerHTML = 'Password Matched!';
    } else {
        document.getElementById('message').style.fontFamily= 'Verdana, Geneva, Tahoma, sans-serif';
        document.getElementById('message').style.fontSize="18px";
        document.getElementById('message').style.display=flex;
        document.getElementById('message').style.flexDirection=column;
        document.getElementById('message').style.margin=auto;
        document.getElementById('message').style.width="18px";
        document.getElementById('message').innerHTML = 'New Password and Confirm Password does not match';
    }
  }