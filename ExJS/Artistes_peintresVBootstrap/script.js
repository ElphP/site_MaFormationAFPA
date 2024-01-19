"use strict"

let picasso= `
<h1 class="m-2">Galerie Picasso</h1>
<div class="card__contenu d-flex flex-wrap ">
  <div class="card__tab col-12 col-md-6 col-lg-3 m-md-3">
    <img class="col-12"
      src="./img/Femme_qui_pleure.png"
      alt="Femme_qui_pleure"
    />
    <p class="bg-dark text-light text-center">
      Femme qui pleure
    </p>
  </div>
  <div class="card__tab col-12 col-md-6 col-lg-3 m-md-3">
    <img class="col-12"
      src="./img/Demoiselles_Avignon.png"
      alt="Demoiselles_Avignon"
    />
    <p class="bg-dark text-light text-center">
     Les demoiselles d'Avignon
    </p>
  </div>
  <div class="card__tab col-12 col-md-6 col-lg-3 m-md-3">
    <img class="col-12"
      src="./img/guernica.png"
      alt="Guernica"
    />
    <p class="bg-dark text-light text-center">
      Guernica
    </p>
  </div>
  <div class="card__tab col-12 col-md-6 col-lg-3 m-md-3">
    <img class="col-12"
      src="./img/Le_Peintre_et_son_Modele.png"
      alt="Le_Peintre_et_son_Modele"
    />
    <p class="bg-dark text-light text-center">
      Le peintre et son modèle
    </p>
  </div>
  <div class="card__tab col-12 col-md-6 col-lg-3 m-md-3">
    <img class="col-12"
      src="./img/Marie_Therese.png"
      alt="Marie_Therese"
    />
    <p class="bg-dark text-light text-center">
      Marie-thérèse
    </p>
  </div>
  <div class="card__tab col-12 col-md-6 col-lg-3 m-md-3">
    <img class="col-12"
      src="./img/Autoportrait_Picasso.png"
      alt="Autoportrait_Picasso"
    />
    <p class="bg-dark text-light text-center">
      Autoportrait
    </p>
  </div>
</div>`;


let card= document.querySelector(".card");
let peintures = document.createElement("div");
peintures.innerHTML = picasso; 
card.appendChild(peintures);



document.querySelectorAll(".nav-link").forEach((e) => {
    
    e.addEventListener("click", ()=> {
        
        document.querySelectorAll(".nav-link").forEach((item)   => {
            
        if(item.classList.contains("active"))  {
            item.classList.remove("active");
            item.classList.add("text-white");
        }
    })
    e.classList.remove("text-white");
    e.classList.add("active");
  
    
    switch(e.id)  {
        case "picasso" : {
            
            card.removeChild(card.childNodes[1]); 
            let peintures = document.createElement("div");
            peintures.classList.add("position");
            peintures.innerHTML = picasso; 
            card.appendChild(peintures);
            break;
        }
        case "caillebote" :{
            card.removeChild(card.childNodes[1]); 
            let peintures = document.createElement("div");
            peintures.classList.add("position");
            peintures.innerHTML = caillebote; 
            card.appendChild(peintures);
            break;
        }
        case "kandinsky" : {
            card.removeChild(card.childNodes[1]); 
            let peintures = document.createElement("div");
            peintures.classList.add("position");
            peintures.innerHTML = kandinsky; 
            card.appendChild(peintures);
            break;
        }
        case "monet" : {
            card.removeChild(card.childNodes[1]); 
            let peintures = document.createElement("div");
            peintures.classList.add("position");
            peintures.innerHTML = monet; 
            card.appendChild(peintures);
            break;
        }
        case "wermeer" : {
            card.removeChild(card.childNodes[1]); 
            let peintures = document.createElement("div");
            peintures.classList.add("position");
            peintures.innerHTML = wermeer; 
            card.appendChild(peintures);
            break;
        }
        case "vangogh" : {
            card.removeChild(card.childNodes[1]); 
            let peintures = document.createElement("div");
            peintures.classList.add("position");
            peintures.innerHTML = vangogh; 
            card.appendChild(peintures);
            break;
        }
        default :{
            card.removeChild(card.childNodes[1]); 
            let peintures = document.createElement("div");
            peintures.innerHTML = "Une erreur est survenue dans le chargement des peintures!"; 
            card.appendChild(peintures);
        }
    }
    })
})





let caillebote =`

<h1 class="m-2">Galerie Caillbotte</h1>
<div class="card__contenu d-flex flex-wrap ">
  <div class="card__tab col-12 col-md-6 col-lg-3 m-md-3">
    <img class="col-12"
      src="./img/Jour_de_pluie_à_Paris.png"
      alt="Jour_de_pluie_à_Paris"
    />
    <p class="bg-dark text-light text-center">
      Jour de pluie à Paris
    </p>
  </div>
  <div class="card__tab col-12 col-md-6 col-lg-3 m-md-3">
    <img class="col-12"
      src="./img/Peintres_en_batiment.png"
      alt="Peintres_en_batiment"
    />
    <p class="bg-dark text-light text-center">
      Peintres en batiment
    </p>
  </div>
  <div class="card__tab col-12 col-md-6 col-lg-3 m-md-3">
    <img class="col-12"
      src="./img/Raboteurs_de_parquet.png"
      alt="Raboteurs_de_parquet"
    />
    <p class="bg-dark text-light text-center">
      Raboteurs de parquet
    </p>
  </div>
  <div class="card__tab col-12 col-md-6 col-lg-3 m-md-3">
    <img class="col-12"
      src="./img/Périssoires_sur_l’Yerres.png"
      alt="Périssoires_sur_l’Yerres"
    />
    <p class="bg-dark text-light text-center">
      Périssoires sur l'Yerres
    </p>
  </div>
  <div class="card__tab col-12 col-md-6 col-lg-3 m-md-3">
    <img class="col-12"
      src="./img/Autoportrait_Caillebotte.png"
      alt="Autoportrait_Caillebotte"
    />
    <p class="bg-dark text-light text-center">
      Autoportrait
    </p>
  </div>
</div>
`;

let wermeer =  `
<h1 class="m-2">Galerie Wermeer</h1>
<div class="card__contenu d-flex flex-wrap ">
  <div class="card__tab col-12 col-md-6 col-lg-3 m-md-3">
    <img class="col-12"
      src="./img/fille_a_la-perle.png"
      alt="fille_a_la-perle"
    />
    <p class="bg-dark text-light text-center">
      Fille à la perle
    </p>
  </div>
  <div class="card__tab col-12 col-md-6 col-lg-3 m-md-3">
    <img class="col-12"
      src="./img/La_Laitière.png"
      alt="La_Laitière"
    />
    <p class="bg-dark text-light text-center">
      La laitière
    </p>
  </div>
  <div class="card__tab col-12 col-md-6 col-lg-3 m-md-3">
    <img class="col-12"
      src="./img/La_Liseuse_à_la_fenêtre.png"
      alt="La_Liseuse_à_la_fenêtre"
    />
    <p class="bg-dark text-light text-center">
      La liseuse à la fenêtre
    </p>
  </div>
</div>`

let kandinsky =  `<h1 class="m-2">Galerie Kandinsky</h1>
<div class="card__contenu d-flex flex-wrap ">
  <div class="card__tab col-12 col-md-6 col-lg-3 m-md-3">
    <img class="col-12"
      src="./img/Composition-1939.png"
      alt="Composition-1939"
    />
    <p class="bg-dark text-light text-center">
      Composition-1939
    </p>
  </div>
  <div class="card__tab col-12 col-md-6 col-lg-3 m-md-3">
    <img class="col-12"
      src="./img/Composition-VI-1913.png"
      alt="Composition-VI-1913"
    />
    <p class="bg-dark text-light text-center">
      Composition-VI-1913
    </p>
  </div>
  <div class="card__tab col-12 col-md-6 col-lg-3 m-md-3">
    <img class="col-12"
      src="./img/tableau-en-bleu-1925-.png"
      alt="tableau-en-bleu-1925-"
    />
    <p class="bg-dark text-light text-center">
      Tableau en bleu 1925
    </p>
  </div>
  <div class="card__tab col-12 col-md-6 col-lg-3 m-md-3">
    <img class="col-12"
      src="./img/Noir-et-violet-1923.png"
      alt="Noir-et-violet-1923"
    />
    <p class="bg-dark text-light text-center">
      Noir et violet - 1923
    </p>
  </div>
  <div class="card__tab col-12 col-md-6 col-lg-3 m-md-3">
    <img class="col-12"
      src="./img/Moscou-1916.png"
      alt="Moscou-1916"
    />
    <p class="bg-dark text-light text-center">
      Moscou 1916
    </p>
  </div>
  <div class="card__tab col-12 col-md-6 col-lg-3 m-md-3">
    <img class="col-12"
      src="./img/Jaune_rouge_bleu.png"
      alt="Jaune_rouge_bleu"
    />
    <p class="bg-dark text-light text-center">
     Jaune Rouge Bleu
    </p>
  </div>
</div>
` 

let monet = `<h1 class="m-2">Galerie Monet</h1>
<div class="card__contenu d-flex flex-wrap ">
  <div class="card__tab col-12 col-md-6 col-lg-3 m-md-3">
    <img class="col-12"
      src="./img/Campagne_Montagneuse-1889.jpg"
      alt="Campagne_Montagneuse-1889"
    />
    <p class="bg-dark text-light text-center">
      Campagne montagneuse 1889
    </p>
  </div>
  <div class="card__tab col-12 col-md-6 col-lg-3 m-md-3">
    <img class="col-12"
      src="./img/Impression_soleil_levant-1872.png"
      alt="Impression_soleil_levant-1872"
    />
    <p class="bg-dark text-light text-center">
      Impression soleil levant 1872
    </p>
  </div>
  <div class="card__tab col-12 col-md-6 col-lg-3 m-md-3">
    <img class="col-12"
      src="./img/La_Promenade.png"
      alt="La_Promenade"
    />
    <p class="bg-dark text-light text-center">
      La promenade
    </p>
  </div>
  <div class="card__tab col-12 col-md-6 col-lg-3 m-md-3">
    <img class="col-12"
      src="./img/Le_déjeuner-1873.png"
      alt="Le_déjeuner-1873"
    />
    <p class="bg-dark text-light text-center">
      Le déjeuner - 1873
    </p>
  </div>
  <div class="card__tab col-12 col-md-6 col-lg-3 m-md-3">
    <img class="col-12"
      src="./img/Les_Coquelicots.png"
      alt="Les_Coquelicots"
    />
    <p class="bg-dark text-light text-center">
      Les coquelicots
    </p>
  </div>
  <div class="card__tab col-12 col-md-6 col-lg-3 m-md-3">
    <img class="col-12"
      src="./img/Madame_Monet_et_Enfant-1875.png"
      alt="Madame_Monet_et_Enfant-1875"
    />
    <p class="bg-dark text-light text-center">
      Madame Monet et ses enfants - 1875 
    </p>
  </div>
  <div class="card__tab col-12 col-md-6 col-lg-3 m-md-3">
    <img class="col-12"
      src="./img/Nymphéas-1916.png"
      alt="Nymphéas-1916"
    />
    <p class="bg-dark text-light text-center">
      Nymphéas - 1916
    </p>
  </div>
</div>
`

let vangogh = `
<h1 class="m-2">Galerie Van Gogh</h1>
<div class="card__contenu d-flex flex-wrap ">
  <div class="card__tab col-12 col-md-6 col-lg-3 m-md-3">
    <img class="col-12"
      src="./img/La_Chambre_de_van_gogh-1889-.png"
      alt="La_Chambre_de_van_gogh-1889-"
    />
    <p class="bg-dark text-light text-center">
      La chambre de Van Gogh - 1889
    </p>
  </div>
  <div class="card__tab col-12 col-md-6 col-lg-3 m-md-3">
    <img class="col-12"
      src="./img/La_nuit_étoilée-1889.png"
      alt="La_nuit_étoilée-1889"
    />
    <p class="bg-dark text-light text-center">
      La nuit étoilée - 1889
    </p>
  </div>
  <div class="card__tab col-12 col-md-6 col-lg-3 m-md-3">
    <img class="col-12"
      src="./img/La_Sieste.png"
      alt="La_Sieste"
    />
    <p class="bg-dark text-light text-center">
      La sieste
    </p>
  </div>
  <div class="card__tab col-12 col-md-6 col-lg-3 m-md-3">
    <img class="col-12"
      src="./img/Les_Iris-1889.png"
      alt="Les_Iris-1889"
    />
    <p class="bg-dark text-light text-center">
      Les iris - 1889
    </p>
  </div>
  <div class="card__tab col-12 col-md-6 col-lg-3 m-md-3">
    <img class="col-12"
      src="./img/Terrasse_café.png"
      alt="Terrasse_café"
    />
    <p class="bg-dark text-light text-center">
      Terrasse café
    </p>
  </div>
</div>`
