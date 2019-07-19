window.onload = function(evt) {
  document.addEventListener("deviceready", function () {
    console.log(navigator.camera);
    document.querySelector('#btn_video').addEventListener('touchend', function (evt) {
      let winModal = new Modal(document.getElementById('choiceSrcVideo'));
      winModal.backdrop = true;
      winModal.show();
    });





    // capture callback si succès
    var captureSuccess = function(mediaFiles) {
      var i, path, len;
      for (i = 0, len = mediaFiles.length; i < len; i += 1) {
        path = mediaFiles[i].fullPath;
        // ici modifier l’attribut « src » de la balise <video src=’’></video>
      }
    };
    // capture error callback si erreur
    var captureError = function(error) {
      navigator.notification.alert('Error code: ' + error.code, null, 'Capture Error');
    };
    // start video capture
    navigator.device.capture.captureVideo(captureSuccess, captureError, {limit:2});

    let btn_useCameraVideo = document.querySelector('#useCameraVideo');
    btn_useCameraVideo.addEventListener('touchend', function(evt) {
      takeVideo();
    })
    // ***************** prise Video ********************************
    function captureSuccess (mediaFiles) {
      var i, path, len;
      for (i = 0, len = mediaFiles.length; i < len; i += 1) {
        path = mediaFiles[i].fullPath;
      }
      let video = document.querySelector('#my-video');
      video.src = path;
      // on peut stocker lURI qui pointe sur la vidéo
      // dans le localStorage pour pouvoir la rappeler
      // plus tard.
      localStorage.setItem('uriVideo', path);
    }
    function onFail (err) {
      alert('Erreur : ' + err) ;
    }
    function takeVideo() {
      navigator.device.capture.captureVideo(captureSuccess, onFail, {limit:2});
    }
})}
