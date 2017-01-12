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
  @Input() showMessage: Function;

  @Output() countChange = new EventEmitter();
  @Output() showModalChange = new EventEmitter();
  @Output() titleChange = new EventEmitter();
   
  changeTitle(newValue) {
    this.title = newValue;
    this.titleChange.emit(this.title);
  }
  onCloseModal(){
    this.count++;
    this.showModal = false
    this.countChange.emit(this.count);
    this.showModalChange.emit(this.showModal);
  }
}