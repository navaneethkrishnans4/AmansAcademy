import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-page-title',
  templateUrl: './page-title.component.html',
  styleUrl: './page-title.component.css'
})
export class PageTitleComponent {
  @Input() pageLink!: string;
  @Input() pageTitle!: string;
  @Input() singlePageTitle!: string;
  @Input() nested!: string;
  @Input() description!: string;
}
