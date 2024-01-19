
   function openImg(path) {
        // Calcul des coordonnées pour centrer la fenêtre
        var left = screen.availWidth  / 2;
        var top = screen.availHeight / 2;

        // Ouvrir la fenêtre contextuelle au centre
        window.open(path, "Ma Pop-up", ` top=${top}, left=${left}`);
    
   };
