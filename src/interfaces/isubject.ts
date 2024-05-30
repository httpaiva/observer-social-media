import IObserver from "./iobserver";

export default interface ISubject {
  subscribe(inscrito: IObserver): void;
  unsubscribe(inscrito: IObserver): void;
  unsubscribeAll(): void;
  notify(observer: IObserver): void;
  notifyAll(): void;
}
