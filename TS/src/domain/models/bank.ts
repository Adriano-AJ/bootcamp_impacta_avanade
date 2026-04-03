export class Banking{
    accNumber: number
    funds: number

    constructor(accNumber: number, iFunds?: number){
        this.accNumber = accNumber;
        this.funds = iFunds ?? 0
    }

    deposit(value: number){
        this.funds += value;
    }

    withdraw(value: number): boolean{
        throw console.error("Not implemeted...");
    }

    toString(){
        return `account: [${this.accNumber}] | ${this.funds}`;
    }
}

export class SavingBanking extends Banking{
    withdraw(value: number): boolean {
        if(this.funds < value){
            console.log("Insuficient funds...");
            return false
        }
        this.funds -= value 
        return true
    }
}
