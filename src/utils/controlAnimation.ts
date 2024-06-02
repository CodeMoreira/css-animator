export function ControlAnimation(
  effect: "play" | "stop" | "pause" | "restart"
) {
  document.getAnimations().forEach((animation) => {
    if (animation.effect instanceof KeyframeEffect) {
      const effects = {
        play() {
          animation.play();
        },
        stop() {
          animation.cancel();
        },
        pause() {
          animation.pause();
        },
        restart() {
          animation.cancel();
          animation.play();
        },
      };

      effects[effect]();
    }
  });
}

export function setAnimationTime(time: number) {
  document.getAnimations().forEach((animation) => {
    if (animation.effect instanceof KeyframeEffect) {
      animation.currentTime = time;
    }
  });
}
