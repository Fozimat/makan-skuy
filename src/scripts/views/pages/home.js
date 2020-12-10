import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantsTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
        <div class="hero">
            <div class="hero__inner" tabindex="0">
                <h1 class="hero__title">Nikmati Hidangan di Restoran Favorit Anda ^_^</h1>
                    <p class="hero__tagline"><i>Dapatkan Diskon yang menarik hingga voucher cashback</i> </p>
            </div>
        </div>
        
        <main>
          <section class="content" id="kontent">
              <div class="latest">
                  <h1 class="latest__label" tabindex="0">Top Restoran</h1>
                  <div class="posts" id="posts">
                    
                  </div>
              </div>
          </section>
        </main>
      `;
  },

  async afterRender() {
    const restaurants = await RestaurantSource.getRestaurant();
    const restaurantsContainer = document.querySelector('#posts');
    // console.log(restaurants);
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantsTemplate(restaurant);
    });
  },
};

export default Home;
