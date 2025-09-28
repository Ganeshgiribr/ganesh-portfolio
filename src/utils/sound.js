// Simple click sound (public domain)
export const clickSoundUrl = "https://cdn.jsdelivr.net/gh/ganeshgiribr/sounds/click.mp3";

export function playClickSound() {
  const audio = new window.Audio(clickSoundUrl);
  audio.volume = 0.2;
  audio.play();
}
