import { Component, Input } from '@angular/core';
import { User } from '../../classes/user';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'user-detail-modal',
  moduleId: module.id,
  templateUrl: 'user-detail-modal.component.html',
  styleUrls: ['user-detail-modal.component.css']
})

export class UserDetailModalComponent {
 
  @Input() title: string;

}