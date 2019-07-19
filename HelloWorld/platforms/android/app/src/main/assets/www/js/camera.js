window.onload = function(evt) {
  document.addEventListener("deviceready", function () {
    options = {
      quality: 50, //Compression les principales configurations quality sont : 20, 50, and 100
      //Format des données en sortie ici base64 (alphanum)
      destinationType: Camera.DestinationType.DATA_URL,
      // Que doit faire le plugin : ouvrir quelle source pour la vidéo ici CAMERA
      sourceType: Camera.PictureSourceType.SAVEDPHOTOALBUM,
      encodingType: Camera.EncodingType.JPEG, //Format d'encodage de l'image JPG conseillé sur Android
      mediaType: Camera.MediaType.PICTURE, //Type de données retourn par Camera: ici Image
      allowEdit: true, //Autorisation d'édition de l'image, aléatoire sur Android à éviter
      correctOrientation: true //Correction sur Android de l'orientation de la prise de vue

    };
    // vérification de la dispo du plugin camera
    console.log(navigator.camera);
    document.querySelector('#btn_photo').addEventListener('touchend', function (evt) {
      let winModal = new Modal(document.getElementById('choiceSrcPhoto'));
      winModal.backdrop = true;
      winModal.show();
    });
    // gestion du clic sur le bouton utilser la camera pour prendre une photo
    let btn_useCamera = document.querySelector('#useCamera');
    btn_useCamera.addEventListener('touchend', function(evt) {
      navigator.camera.getPicture(onSuccess, onFail, {
        quality: 50,
        destinationType: Camera.DestinationType.DATA_URL, // Base64 encodage de l'image
        encodingType: Camera.EncodingType.JPEG
      });
    });
    // gestion du clic sur le bouton utiliser l'album photo pour récupérer une image
    let btn_useAlbum = document.querySelector('#useAlbum');
    btn_useAlbum.addEventListener('touchend',function(evt) {
      navigator.camera.getPicture(onSuccess, onFail, options);
    });
    // si tout se passe bien au retour à l’application on affiche l’image dans le composant <img>
    function onSuccess(imageData) {
      var image = document.querySelector('#my-photo');
      image.src = "data:image/jpeg;base64," + imageData;
    } // si il y a une erreur on affiche l’erreur dans une alerte
    function onFail (err) {
      alert('Error : ' + err);
    }
  }); // fin deviceReady
};
