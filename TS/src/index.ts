import {LogEntry, Logging, logginMemoryObjects} from "./shared/logging";
import {Banking, SavingBanking} from "./domain/models/bank"

function main(){
    const account = new Banking(1)
    account.deposit(500)

    console.log(account)
}

main();