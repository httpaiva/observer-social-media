import ISubject from "../interfaces/isubject";
import IObserver from "../interfaces/iobserver";
import { Post } from "./post";

export default class Notificacao implements ISubject {
  private observers: IObserver[] = [];

  constructor(public readonly post: Post) {}

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
    sub.update(this.post);
  }

  notifyAll(): void {
    this.observers.forEach((sub) => this.notify(sub));
  }
}
