import Video from "./classes/video";
import Inscrito from "./classes/inscrito";
import Notificacao from "./classes/notificacao";

const video = new Video("1", "Vídeo 1", "thumbnail-1.jpg", "www.video1.com");

const notificacao = new Notificacao(video);

// Inscritos:
const inscrito1 = new Inscrito(1, "Bram Stoker");
const inscrito2 = new Inscrito(2, "Mary Shelley");
const inscrito3 = new Inscrito(3, "Edgar Allan Poe");

notificacao.subscribe(inscrito1);
notificacao.subscribe(inscrito2);
notificacao.subscribe(inscrito3);

console.log("---------- Notificando todos os inscritos: ----------");
notificacao.notifyAll();

console.log("---------- Desinscrevendo Bram Stoker: ----------");
notificacao.unsubscribe(inscrito1);

console.log("---------- Notificando todos os inscritos novamente: ----------");
notificacao.notifyAll();
