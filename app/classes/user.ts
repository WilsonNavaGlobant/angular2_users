export class User {
    name: string;
    gender: string;
    phone: number;
    email: string;
    money: number = 0;
    img: string;

    constructor(user: any) {
        this.name = user.name.first;
        this.gender = user.gender;
        this.phone = user.phone;
        this.email = user.email;
        this.img = user.picture.medium;
    } 
    
    addMoney(money: number): void {
        this.money += this.calculateTaxes(money)
    }
    private calculateTaxes(money: number):number{
        return money - money * 16 / 100;
    }
    
}

