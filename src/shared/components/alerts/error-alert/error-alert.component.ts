import { Component ,OnInit, Input} from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-error-alert',
  templateUrl: './error-alert.component.html',
  styleUrls: ['./error-alert.component.css'],
  animations: [
    trigger('slideAnimation', [
      state('in', style({ transform: 'translateX(0)' })),
      transition('void => *', [
        style({ transform: 'translateX(100%)' }),
        animate(500)
      ]),
      transition('* => void', [
        animate(500, style({ transform: 'translateX(100%)' }))
      ])
    ])
  ]
})

export class ErrorAlertComponent {

  @Input() message: string ="لقد حدث خطأ ما"; // Input property to pass the alert message from the parent component
  showAlert: boolean = true;



  constructor() { }

  ngOnInit(): void {
    this.closeAlertAfterDelay();
  }


  closeAlert() {
    this.showAlert = false;
  }

  closeAlertAfterDelay(): void {
    setTimeout(() => {
      // Close the alert by emitting an event or using any other desired logic
      // For simplicity, let's log a message to the console
      console.log('Alert closed after 5000 milliseconds');
      this.showAlert = false;
    }, 5000); // Adjust the time in milliseconds as needed
  }

}
