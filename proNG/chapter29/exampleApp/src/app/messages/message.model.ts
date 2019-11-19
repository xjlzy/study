export class Message {
  constructor(
    private text: string,
    private err: boolean = false,
    private responses?: [string, (string) => void][]) { }
}