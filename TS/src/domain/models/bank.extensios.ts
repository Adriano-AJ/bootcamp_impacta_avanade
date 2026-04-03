import { Banking } from "./bank";
import { Logging, LogEntry } from "../../shared/logging";

type BankAccountConstructor<T> = new (...args: any[]) => T;

function withOverdraft<C extends BankAccountConstructor<Banking>>(Class: C) {
    return class extends Class {
        constructor(...args: any[]) {
            super(...args);
        }

        withdraw(value: number): boolean {
            // Supondo que 'funds' exista na classe base BankAccount
            (this as any).funds -= value; 
            return true;
        }
    };
}

function withLogging<C extends BankAccountConstructor<Banking>>(Class: C) {
    return class extends Class implements Logging {
        constructor(...args: any[]) {
            super(...args);
        }

        toLogEntry(): LogEntry {
            return {
                data: new Date(Date.now()), 
                message: this.toString()
            };
        }
    };
}