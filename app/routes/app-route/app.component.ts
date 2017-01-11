import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    moduleId: module.id,
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']
})
export class AppComponent {
    imageUrl: string = 'http://previews.123rf.com/images/isselee/isselee0906/isselee090600242/5085296-white-chihuahua-puppy-wearing-a-pink-collar-6-months-old-in-front-of-a-white-background-Stock-Photo.jpg';
    title: string = 'Tour of Heroes';
}
