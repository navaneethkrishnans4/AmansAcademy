import { AfterViewInit, Component } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
// export class SliderComponent implements AfterViewInit {
//   backgroundImage: string = 'assets/images/banner/banner-1.jpg';
//   ngAfterViewInit() {
//     // Initialize Swiper slider
//     console.log('Initializing Swiper');
//   const swiper = new Swiper('.swiper-container', {
//     loop: true,
//     autoplay: {
//       delay: 2000,
//       disableOnInteraction: false
//     },
//     pagination: {
//       el: '.swiper-pagination',
//       clickable: true
//     },
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev'
//     }
//   });
//   console.log('Swiper initialized', swiper);
// }

// }


export class SliderComponent implements AfterViewInit {
  backgroundImage: string = 'assets/images/banner/banner-1.jpg';

  // Slick slider configuration
  sliderConfig = {
    slidesToShow: 1, // Number of slides to show at a time
    slidesToScroll: 1, // Number of slides to scroll
    autoplay: true, // Enable autoplay
    autoplaySpeed: 4000, // Autoplay speed in milliseconds
    arrows: true, // Show navigation arrows
    dots: true, // Show pagination dots
    infinite: true, // Enable infinite looping
  };

  ngAfterViewInit() {
    console.log('Slider initialized');
  }
}
