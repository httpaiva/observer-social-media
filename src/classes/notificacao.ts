import ISubject from "../interfaces/isubject";
import IObserver from "../interfaces/iobserver";
import Video from "./video";

export default class Notificacao implements ISubject {
  private observers: IObserver[] = [];

  constructor(public readonly video: Video) {}

  subscribe(inscrito: IObserver): void {
    this.observers.push(inscrito);
  }

  unsubscribe(inscrito: IObserver): void {
    const index = this.observers.indexOf(inscrito);
    if (index >= 0) {
      this.observers.splice(index, 1);
    }
  }

  unsubscribeAll() {
    this.observers = [];
  }

  notify(sub: IObserver): void {
    sub.update(this.video);
  }

  notifyAll(): void {
    this.observers.forEach((sub) => this.notify(sub));
  }
}
