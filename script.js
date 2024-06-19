
const countdownDate = new Date('2024-07-15T00:00:00Z').getTime();


const countdownTimer = setInterval(function() {

  const now = new Date().getTime();

 
  const difference = countdownDate - now;


  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  document.getElementById('days').innerHTML = `<span>${days}</span><span>DAYS</span>`;
  document.getElementById('hours').innerHTML = `<span>${hours}</span><span>HRS</span>`;
  document.getElementById('minutes').innerHTML = `<span>${minutes}</span><span>MINS</span>`;
  document.getElementById('seconds').innerHTML = `<span>${seconds}</span><span>SEC</span>`;

  if (difference < 0) {
    clearInterval(countdownTimer);
    document.querySelector('.countdown').innerHTML = '<p>SALE HAS ENDED</p>';
  }
}, 1000); 
