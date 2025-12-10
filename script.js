// Pollution form
const pollutionForm = document.getElementById('pollutionForm');
pollutionForm.addEventListener('submit', function(e){
  e.preventDefault();
  alert('Thank you! Your pollution report has been received.');
  pollutionForm.reset();
});

// Clean-up form
const cleanupForm = document.getElementById('cleanupForm');
cleanupForm.addEventListener('submit', function(e){
  e.preventDefault();
  alert('Thanks for signing up! We will contact you about the event.');
  cleanupForm.reset();
});

