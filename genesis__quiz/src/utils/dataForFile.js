export const getCsvData = () => {
  const language = localStorage.getItem('language');
  const gender = localStorage.getItem('gender');
  const age = localStorage.getItem('age');
  const hate = localStorage.getItem('hate');
  const emojis = localStorage.getItem('emojis');
  const email = localStorage.getItem('email');

  console.log(age);

  const data = [
    { order: 1, title: 'What is your preferred language?', type: 'single-select', answer: language },
    { order: 2, title: 'What gender do you identify with?', type: 'single-select-image', answer: gender },
    { order: 3, title: 'What is your age?', type: 'single-select', answer: age },
    { order: 4, title: 'What do you hate the most in a book?', type: 'multiple-select', answer: JSON.parse(hate) },
    { order: 5, title: 'What are your favorite topics?', type: 'bubble', answer: JSON.parse(emojis) },
    { order: 6, title: 'Email', type: 'email', answer: email }
  ];

  return data;
} 
