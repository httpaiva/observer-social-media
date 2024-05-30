import Video from "../classes/video";

export default interface IObserver {
  update(video: Video): void;
}
