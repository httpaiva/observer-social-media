import { Post } from "./classes/post";
import Inscrito from "./classes/inscrito";
import Notificacao from "./classes/notificacao";

const post = new Post("1", "Comentario polemico", "www.orkut.com/1");

const notificacao = new Notificacao(post);

// Inscritos:
const inscrito1 = new Inscrito(1, "Bram Stoker");
const inscrito2 = new Inscrito(2, "Mary Shelley");
const inscrito3 = new Inscrito(3, "Edgar Allan Poe");

notificacao.subscribe(inscrito1);
notificacao.subscribe(inscrito2);
notificacao.subscribe(inscrito3);

console.log("\n---------- Notificando todos os inscritos: ----------");
notificacao.notifyAll();

console.log("\n---------- Desinscrevendo Bram Stoker: ----------");
notificacao.unsubscribe(inscrito1);

console.log(
  "\n---------- Notificando todos os inscritos novamente: ----------"
);
notificacao.notifyAll();
