// sélectionne tous les éléments de la classe "star" et les stocke dans une variable stars. 
const stars = document.querySelectorAll(".star");
// une boucle forEach est utilisée pour parcourir chaque étoile dans la collection stars et attacher trois écouteurs d'événements à chacune d'entre elles.
// L'écouteur "click" est déclenché lorsqu'une étoile est cliquée. Il appelle la fonction resetStars() pour supprimer toute mise en surbrillance précédente,
// setRating(index + 1) pour mettre en surbrillance toutes les étoiles jusqu'à l'index actuel.
stars.forEach((star, index) => {
  star.addEventListener("click", () => {
    resetStars();
    setRating(index + 1);
  });
//  "mouseover" est déclenché lorsque le pointeur de la souris survole une étoile.
// puis appelle highlightStars(index) pour mettre en surbrillance toutes les étoiles jusqu'à l'index actuel.

  star.addEventListener("mouseover", () => {
    resetStars();
    highlightStars(index);
  });


// L'écouteur "mouseout" est déclenché lorsque le pointeur de la souris quitte une étoile. 
// setRating(selectedRating) pour mettre en surbrillance les étoiles jusqu'au niveau d'évaluation sélectionné.
  star.addEventListener("mouseout", () => {
    resetStars();
    setRating(selectedRating);
  });
});

let selectedRating = 0;
// La fonction highlightStars(index) est définie pour mettre en surbrillance toutes les étoiles jusqu'à l'index spécifié en ajoutant la classe CSS "active" à ces étoiles.
function highlightStars(index) {
  for (let i = 0; i <= index; i++) {
    stars[i].classList.add("active");
  }
}
// La fonction resetStars() est définie pour supprimer la classe CSS "active" de toutes les étoiles, les réinitialisant ainsi à leur état initial.
function resetStars() {
  stars.forEach((star) => {
    star.classList.remove("active");
  });
}
// La fonction setRating(rating) est définie pour définir l'évaluation sélectionnée sur le niveau spécifié. Elle met en surbrillance les étoiles jusqu'à l'index correspondant en appelant highlightStars(rating - 1) et met à jour la valeur de selectedRating.
function setRating(rating) {
  selectedRating = rating;
  highlightStars(rating - 1);
}
// une balise <select>) représentant l'évaluation par étoiles. Lorsque la valeur de cet élément change, l'écouteur d'événements est déclenché et la fonction de rappel reçoit l'événement. 
const starRating = document.querySelector(".star-rating");

starRating.addEventListener("change", (event) => {
  const rating = event.target.value;
  console.log("Selected rating: " + rating);
});

 










