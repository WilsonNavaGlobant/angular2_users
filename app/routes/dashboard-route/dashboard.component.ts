import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { OnInit } from '@angular/core';
import { User } from '../../classes/user';
@Component({
    selector: 'my-dashboard',
    moduleId: module.id,
    templateUrl: 'dashboard.component.html',
    styleUrls: ['dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    users: User[];
    title = 'THIS IS  A MODAL';
    showModal: boolean = true;
    count: number = 0;
    constructor(private userService: UserService) { }
    ngOnInit(): void {
        this.userService.getHeroes((users: User[]) => {
            this.users = users;
        })
    }

    onShowModal(){
        console.log("onShowModal")
        this.showModal = true;
        this.title = 'WILSON TITLE';
    }
}
