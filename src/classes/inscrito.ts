import IObserver from "../interfaces/iobserver";

import Video from "./video";

export default class Inscrito implements IObserver {
  constructor(public readonly id: number, public readonly nome: string) {}

  update(video: Video): void {
    console.log(
      `O inscrito ${this.nome} foi notificado sobre o vídeo ${video.titulo}`
    );
  }
}
