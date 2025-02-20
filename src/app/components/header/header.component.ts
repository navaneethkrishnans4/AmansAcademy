import { Component, AfterViewInit, OnInit, ElementRef, Renderer2, ViewChild, HostListener } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'] // Corrected to styleUrls
})


export class HeaderComponent implements OnInit, AfterViewInit {
  @ViewChild('preloader', { static: true }) preloader!: ElementRef;
  @ViewChild('topHeader', { static: true }) topHeader!: ElementRef;
  @ViewChild('navigation', { static: true }) navigation!: ElementRef;
  isMobileMenuOpen: boolean = false;
  isLoading: boolean = true;
  isHeaderHidden: boolean = false;
  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    // Hide preloader after loading
    setTimeout(() => {
      this.isLoading = false;
    }, 700);
    
  }

  ngAfterViewInit() {
    // Initialize hero slider
    this.initializeHeroSlider();
  }


  toggleDropdown(event: Event) {
    event.preventDefault();
    const target = event.target as HTMLElement;
    const dropdownMenu = target.nextElementSibling as HTMLElement;
    
    if (dropdownMenu) {
      const isOpen = dropdownMenu.style.display === 'block';
      this.renderer.setStyle(dropdownMenu, 'display', isOpen ? 'none' : 'block');
    }
  }

  initializeHeroSlider() {
    // Custom logic to implement a slider without jQuery (e.g., using Swiper.js)
  }
}


