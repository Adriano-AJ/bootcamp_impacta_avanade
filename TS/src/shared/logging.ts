export type LogEntry = {
    data: Date;
    message: string;
}
export interface Logging {
    toLogEntry(): LogEntry;
}
export function logginMemoryObjects(...objs: Array<Logging>){
    console.log("-----------------------------------")
    const log = objs
        .map(x => x.toLogEntry())
        .map(x => `[${x.data}] ${x.message}`)
        .join()
    console.log(log)
}