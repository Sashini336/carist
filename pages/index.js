import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Car</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
      <div class="container1">
    <div class="images">
      <div class="image1">
        <img src="https://mobistatic4.focus.bg/mobile/photosmob/354/1/big1/11662725891193354_UI.jpg" alt="BMW M4"/>
        <div class="info">
          <a class="link" href="/m4">BMW M4</a>
           <p class="price">89 200лв</p>
        </div>
      </div>
      <div class="image1">
        <img src="https://mobistatic3.focus.bg/mobile/photosmob/361/1/big1/11672766563582361_7h.jpg" alt="Hyundai"/>
        <div class="info">
          <a class="link" href="/hyndai">Hyundai Elantra 2.0</a>
           <p class="price">39 999лв</p>
      </div>
    </div>
    <div class="image1">
      <img src="https://mobistatic3.focus.bg/mobile/photosmob/227/1/big1/11685691766485227_Tg.jpg" alt="BMW i3 S 120 Ah"/>
      <div class="info">
        <a class="link" href="https://www.mobile.bg/pcgi/mobile.cgi?act=4&adv=11685691766485227">BMW i3 S 120 Ah</a>
         <p class="price">55 999лв</p>
      </div>
    </div>
    <div class="image1">
      <img src="https://mobistatic1.focus.bg/mobile/photosmob/703/1/big1/11687953711836703_bO.jpg"/>
      <div class="info">
       <a class="link" href="/vw">VW New beetle 2.0TSI</a>
        <p class="price">49 999лв</p>
      </div>
    </div>
  </div>
  </div>
      </main>
    </div>
  )
}