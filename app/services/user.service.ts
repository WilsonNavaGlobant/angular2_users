import { Injectable } from '@angular/core';
import { User } from '../classes/user';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {
    constructor(private http: Http) { }
    private  url = `https://randomuser.me/api/?results=5`
    getHeroes(callback: Function): void {
        this.http.get(this.url)
               .toPromise()
               .then(
                    (response)  => {
                        
                        let users: User[] = [];
                        response.json().results.forEach((user: Object) => {
                            users.push(new User(user))
                        })
                        callback(users)
                    }
                )
               .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}