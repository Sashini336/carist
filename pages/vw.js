import Head from "next/head";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

export default function CarVw(props) {
  const images = [
    "https://mobistatic1.focus.bg/mobile/photosmob/703/1/big1/11687953711836703_bO.jpg",
    "https://mobistatic1.focus.bg/mobile/photosmob/703/1/big1/11687953711836703_4l.jpg",
    "https://mobistatic1.focus.bg/mobile/photosmob/703/1/big1/11687953711836703_Ha.jpg",
    "https://mobistatic1.focus.bg/mobile/photosmob/703/1/big1/11687953711836703_Yz.jpg",
    "https://mobistatic1.focus.bg/mobile/photosmob/703/1/big1/11687953711836703_xf.jpg",
  ];
  const data = {
    title: "VW New Beetle 2.0TSI Final Edition",
    price: "49 999лв",
    date: "октомври 2019г",
    engine: "Бензинов",
    horsepower: "220кс",
    trans: "Автоматична",
    eco: "Евро 6",
    millage: "16000 км",
    color: "Бежов",
    moreInfo: `Съдействие за
    регистрация в КАТ, както и изкупуване на всякакви автомобили.
    Автомобилът е регистриран. Платени документи. В безупречно
    техническо и визуално състояние. Всички екстри за модела.Възможен бартер и лизинг.`,
  };
  return (
    <div>
      <Head>
        <title>Car</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <a id="home" class="link" href="/">
          Home
        </a>
        <div class="container">
          <h3 class="title">{data.title}</h3>
          <div className="carousel-container">
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              className="external-buttons"
              spaceBetween={24}
              slidesPerView={1}
              navigation
              updateOnWindowResize
              observer
              observerParents
              initialSlide={1}
              loop
            >
              {images.map((image, index) => (
                <SwiperSlide key={index}>
                  <img
                    height="200"
                    width="300"
                    alt="img"
                    className="image"
                    src={image}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <div class="desc">
              <p id="name">{data.title}</p>
              <p id="price">{data.price}</p>
              <ul class="specs">
                <li>
                  Дата на производство : <p id="year">{data.date}</p>
                </li>
                <li>
                  Тип двигател: <p id="engine">{data.engine}</p>
                </li>
                <li>
                  Мощност: <p id="horsepower">{data.horsepower}</p>
                </li>
                <li>
                  Евростандарт: <p id="eco">{data.eco}</p>
                </li>
                <li>
                  Скоростна кути: <p id="trans">{data.trans}</p>
                </li>
                <li>
                  Пробег: <p id="millage">{data.millage}</p>
                </li>
                <li>
                  Цвят: <p id="color">{data.color}</p>
                </li>
              </ul>
              <div class="more-info">Допълнителна Информация:</div>
              <p class="the-info">{data.moreInfo}</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
