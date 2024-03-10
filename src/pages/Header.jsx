import React from 'react'
import RECHERCHER from "../assets/RECHERCHER.png";  
import kORE from "../assets/kORE.png";  
import PARAMETRE from "../assets/PARAMETRE.png";  
import "../styles/Header.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import  Musicien from "../assets/Musicien.png"
function Header() {
  return (
    <div>
    <div className="container">
    <div className="right1"><img src={RECHERCHER} /></div>
    <div className="center1"><img src={kORE} /></div>
    <div className="left"><img src={PARAMETRE} /></div>
    </div>
    
    <div className="stories">
    <Swiper
      
      freeMode={true}
      grabCursor={true}
      className="container mt-5 myswiper"
      breakpoints={{
        0:{
          slidesPerView:2,
          spaceBetween:10,
        },
        480:{
          slidesPerView:3,
          spaceBetween:10,
        },
        700:{
          slidesPerView:5,
          spaceBetween:10,
        }
      }}
      >

      <SwiperSlide>

      <div className="Story">
      
      <img src={Musicien} />
      </div>
      </SwiperSlide>
      <SwiperSlide>

      <div className="Story">
      
      <img src={Musicien} />
      </div>
      </SwiperSlide><SwiperSlide>

      <div className="Story">
      
      <img src={Musicien} />
      </div>
      </SwiperSlide><SwiperSlide>

      <div className="Story">
      
      <img src={Musicien} />
      </div>
      </SwiperSlide><SwiperSlide>

      <div className="Story">
      
      <img src={Musicien} />
      </div>
      </SwiperSlide><SwiperSlide>

      <div className="Story">
      
      <img src={Musicien} />
      </div>
      </SwiperSlide>
        </Swiper>
    </div>
    </div>

  ); 
}

export default Header;
