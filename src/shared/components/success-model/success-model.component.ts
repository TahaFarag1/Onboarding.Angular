import { Component ,ViewEncapsulation,Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';


@Component({
  selector: 'app-success-model',
  templateUrl: './success-model.component.html',
  styleUrls: ['./success-model.component.css'],
  encapsulation: ViewEncapsulation.None ,
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
export class SuccessModelComponent {

  @Input() showSuccesModal: boolean = false;
  showModal = false;

  // openModal() {
  //   this.showModal = true;
  // }

  closeModal() {
    this.showModal = false;
  }
}
