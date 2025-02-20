import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.css']
})
export class NoticeComponent {
  @Input() notices: any[] = [
    {
      date: '30 APR, 2019',
      title: 'Teaching Materials and Testing Methods',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt perferendis saepe omnis officia! Doloribus quae maiores laboriosam praesentium enim fugiat ipsam laudantium assumenda!',
      link: 'notice-single.html'
    },
    {
      date: '27 APR, 2019',
      title: 'Biltong sirloin sausage brisket porchetta prosciutto',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt perferendis saepe omnis officia! Doloribus quae maiores laboriosam praesentium enim fugiat ipsam laudantium assumenda!',
      link: 'notice-single.html'
    },
    // Add more notice items here
  ];
}