import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../classes/user';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'user-detail-modal',
  moduleId: module.id,
  templateUrl: 'user-detail-modal.component.html',
  styleUrls: ['user-detail-modal.component.css']
})

export class UserDetailModalComponent {
  @Input() showModal: boolean;
  @Input() title: string;
  @Input() count: number;

  @Output() countChange = new EventEmitter();
  @Output() showModalChange = new EventEmitter();
   
  
  onCloseModal(){
    this.count++;
    this.showModal = false
    this.countChange.emit(this.count);
    this.showModalChange.emit(this.showModal);
  }
}