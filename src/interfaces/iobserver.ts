import { Post } from "../classes/post";

export default interface IObserver {
  update(post: Post): void;
}
