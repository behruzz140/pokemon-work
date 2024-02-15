let cardWrapper = document.querySelector(".card__wrapper");
for (let i = 0; i < 8; i++) {
  let card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
      
          <img class="pokemon" src="./images/pokemon.png" alt="pokemon" />
          <div class="card__bottom">
            <div class="text__wrapper">
              <h3>Pokemons</h3>
              <p class="wrapper-p">Grass, Poison</p>
              <div class="bottom_text">
                <p>6.9 kg</p>
                <p>99 age</p>
              </div>
            </div>
            <img src="./images/heart.svg" alt="heart" />
          </div>
        
    `;
  cardWrapper.appendChild(card);
}
