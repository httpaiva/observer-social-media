import IObserver from "../interfaces/iobserver";

import { Post } from "./post";

export default class Inscrito implements IObserver {
  constructor(public readonly id: number, public readonly nome: string) {}

  update(post: Post): void {
    console.log(
      `O inscrito ${this.nome} foi notificado sobre o post ${post.conteudo}`
    );
  }
}
