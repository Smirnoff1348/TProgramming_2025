export class LoggerService {
    private static logs: string[] = [];

    static log(message: string): void {
        this.logs.push(message);
        console.log(message);
    }

    static getLogs(): string[] {
        return this.logs;
    }

    static clear(): void {
        this.logs = [];
    }
}