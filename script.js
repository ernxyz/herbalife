document.addEventListener('DOMContentLoaded', () => {
  const now = new Date();
  const timeEl = document.getElementById('time');
  const amOrPmEl = document.getElementById('amOrPm');
  const videoEl = document.getElementById('video');
  const sourceEl = document.getElementById('source');

  const windowWidth = window.innerWidth;

  // Format time with AM/PM
  const formattedTime = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/Guayaquil',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  }).format(now);

  // Split time and AM/PM
  const [timePart, amOrPmPart] = formattedTime.split(' ');

  // Set the time part without AM/PM
  timeEl.innerText = timePart;

  // Set the AM or PM part separately
  amOrPmEl.innerText = amOrPmPart;

  // Video source logic
  let newSrc = '';
  if (windowWidth <= 768) {
    newSrc = './assets/videos/768x320.mp4'; // small screen video
  } else if (windowWidth <= 1920) {
    newSrc = './assets/videos/1920x768.mp4'; // medium screen video
  }

  console.log(newSrc);

  if (sourceEl.src !== newSrc) {
    videoEl.pause();
    sourceEl.src = newSrc;
    videoEl.load();
    videoEl.play();
  }
});
