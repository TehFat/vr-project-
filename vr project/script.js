AFRAME.registerComponent('tv-audio-trigger', {
    tick: function () {
      const camera = document.querySelector('[camera]').object3D;
      const tvAudio = document.querySelector('#tvAudio');
      const tvPos = tvAudio.object3D.position;
      const camPos = camera.position;
      const distance = camPos.distanceTo(tvPos);

      if (distance < 2.5 && !this.played) {
        tvAudio.components.sound.playSound();
        this.played = true;
      } else if (distance >= 2.5 && this.played) {
        tvAudio.components.sound.stopSound();
        this.played = false;
      }
    }
  });