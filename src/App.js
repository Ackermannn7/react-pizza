import React from "react";

import Header from "./components/Header";
import Categories from "./components/Categories";
import Sort from "./components/Sort";

import "./scss/app.scss";



function App() {
  return (
    <div class="wrapper">
      <Header />
      <div class="content">
        <div class="container">
          <div class="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 class="content__title">Все пиццы</h2>
          <div class="content__items">
            <div class="pizza-block-wrapper">
              <div class="pizza-block">
                <a href="/pizza/7">
                  <img
                    class="pizza-block__image"
                    src="https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/d48003cd-902c-420d-9f28-92d9dc5f73b4.jpg"
                    alt="Pizza"
                  />
                  <h4 class="pizza-block__title">Маргарита</h4>
                </a>
                <div class="pizza-block__selector">
                  <ul>
                    <li class="active">тонкое</li>
                    <li class="">традиционное</li>
                  </ul>
                  <ul>
                    <li class="active">26 см.</li>
                    <li class="">30 см.</li>
                    <li class="">40 см.</li>
                  </ul>
                </div>
                <div class="pizza-block__bottom">
                  <div class="pizza-block__price">от 450 ₽</div>
                  <button class="button button--outline button--add">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                        fill="white"
                      ></path>
                    </svg>
                    <span>Добавить</span>
                  </button>
                </div>
              </div>
            </div>
            <div class="pizza-block-wrapper">
              <div class="pizza-block">
                <a href="/pizza/8">
                  <img
                    class="pizza-block__image"
                    src="https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/ec29465e-606b-4a04-a03e-da3940d37e0e.jpg"
                    alt="Pizza"
                  />
                  <h4 class="pizza-block__title">Четыре сезона</h4>
                </a>
                <div class="pizza-block__selector">
                  <ul>
                    <li class="active">тонкое</li>
                    <li class="">традиционное</li>
                  </ul>
                  <ul>
                    <li class="active">26 см.</li>
                    <li class="">30 см.</li>
                    <li class="">40 см.</li>
                  </ul>
                </div>
                <div class="pizza-block__bottom">
                  <div class="pizza-block__price">от 395 ₽</div>
                  <button class="button button--outline button--add">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                        fill="white"
                      ></path>
                    </svg>
                    <span>Добавить</span>
                  </button>
                </div>
              </div>
            </div>
            <div class="pizza-block-wrapper">
              <div class="pizza-block">
                <a href="/pizza/6">
                  <img
                    class="pizza-block__image"
                    src="https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/d2e337e9-e07a-4199-9cc1-501cc44cb8f8.jpg"
                    alt="Pizza"
                  />
                  <h4 class="pizza-block__title">Пепперони</h4>
                </a>
                <div class="pizza-block__selector">
                  <ul>
                    <li class="active">тонкое</li>
                    <li class="">традиционное</li>
                  </ul>
                  <ul>
                    <li class="active">26 см.</li>
                    <li class="">30 см.</li>
                    <li class="">40 см.</li>
                  </ul>
                </div>
                <div class="pizza-block__bottom">
                  <div class="pizza-block__price">от 675 ₽</div>
                  <button class="button button--outline button--add">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                        fill="white"
                      ></path>
                    </svg>
                    <span>Добавить</span>
                  </button>
                </div>
              </div>
            </div>
            <div class="pizza-block-wrapper">
              <div class="pizza-block">
                <a href="/pizza/4">
                  <img
                    class="pizza-block__image"
                    src="https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
                    alt="Pizza"
                  />
                  <h4 class="pizza-block__title">Чизбургер-пицца</h4>
                </a>
                <div class="pizza-block__selector">
                  <ul>
                    <li class="active">тонкое</li>
                    <li class="">традиционное</li>
                  </ul>
                  <ul>
                    <li class="active">26 см.</li>
                    <li class="">30 см.</li>
                    <li class="">40 см.</li>
                  </ul>
                </div>
                <div class="pizza-block__bottom">
                  <div class="pizza-block__price">от 415 ₽</div>
                  <button class="button button--outline button--add">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                        fill="white"
                      ></path>
                    </svg>
                    <span>Добавить</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <ul class="Pagination_root__uwB0O">
            <li class="previous disabled">
              <a
                class=" "
                tabindex="-1"
                role="button"
                aria-disabled="true"
                aria-label="Previous page"
                rel="prev"
              >
                &lt;
              </a>
            </li>
            <li class="selected">
              <a
                rel="canonical"
                role="button"
                tabindex="-1"
                aria-label="Page 1 is your current page"
                aria-current="page"
              >
                1
              </a>
            </li>
            <li>
              <a rel="next" role="button" tabindex="0" aria-label="Page 2">
                2
              </a>
            </li>
            <li>
              <a role="button" tabindex="0" aria-label="Page 3">
                3
              </a>
            </li>
            <li class="next">
              <a
                class=""
                tabindex="0"
                role="button"
                aria-disabled="false"
                aria-label="Next page"
                rel="next"
              >
                &gt;
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
