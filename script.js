// Interactive Scatter Plot
const ctx = document.getElementById('scatterPlot').getContext('2d');
const scatterPlot = new Chart(ctx, {
  type: 'scatter',
  data: {
    datasets: [{
      label: 'House Prices vs. Size',
      data: [
        { x: 1200, y: 250000 },
        { x: 1500, y: 300000 },
        { x: 1800, y: 350000 },
        { x: 2000, y: 400000 },
        { x: 2200, y: 450000 },
      ],
      backgroundColor: 'rgba(75, 192, 192, 0.8)',
    }]
  },
  options: {
    scales: {
      x: {
        title: {
          display: true,
          text: 'House Size (sq.ft)'
        }
      },
      y: {
        title: {
          display: true,
          text: 'House Price ($)'
        }
      }
    }
  }
});

// Quiz Functionality
function checkAnswer() {
  const selectedAnswer = document.querySelector('input[name="q1"]:checked').value;
  const feedback = document.getElementById('quiz-feedback');

  if (selectedAnswer === 'B') {
    feedback.textContent = 'Correct! Regression is used for prediction.';
    feedback.style.color = 'green';
  } else {
    feedback.textContent = 'Incorrect. The correct answer is B: Prediction.';
    feedback.style.color = 'red';
  }
}