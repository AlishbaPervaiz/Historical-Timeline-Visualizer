// Function to toggle the visibility of the FAQ answers
function toggleAnswer(answerId) {
  var answer = document.getElementById(answerId);
  if (answer.style.display === 'none' || answer.style.display === '') {
      answer.style.display = 'block';
  } else {
      answer.style.display = 'none';
  }
}
