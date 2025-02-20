import { Component,Input,ElementRef, ViewChild, AfterViewInit, HostListener, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {
  @ViewChild('topHeader', { static: false }) topHeader!: ElementRef;
  @ViewChild('navigation', { static: false }) navigation!: ElementRef;

  @Input() about: string = '';
  @Input() activePage: string = '';
  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    if (!this.topHeader || !this.navigation) {
      console.error('Elements not found: #topHeader or #navigation');
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (!this.topHeader || !this.navigation) return;

    const headerOffset = window.scrollY;
    const height = this.topHeader.nativeElement.offsetHeight;

    if (headerOffset > 10) {
      this.renderer.addClass(this.topHeader.nativeElement, 'hide');
      this.renderer.addClass(this.navigation.nativeElement, 'nav-bg');
      this.renderer.setStyle(this.navigation.nativeElement, 'margin-top', `-${height}px`);
    } else {
      this.renderer.removeClass(this.topHeader.nativeElement, 'hide');
      this.renderer.removeClass(this.navigation.nativeElement, 'nav-bg');
      this.renderer.setStyle(this.navigation.nativeElement, 'margin-top', '0px');
    }
  }
}
