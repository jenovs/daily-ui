(function() {
  const cardNumberField = document.getElementById('card-number');
  let cardNumber = '';

  cardNumberField.addEventListener('input', handleInput);

  function handleInput(e) {
    cardNumberField.value = formatCardNumber(e.target.value);
  }

  function formatCardNumber(str) {
    const result = [];

    const numStr = str.replace(/\D/g, '');

    [...numStr].forEach((char, i) => {
      if (i >= 16) return;
      else if (i % 4 === 0 && i > 0) result.push(' ', char);
      else result.push(char);
    });

    return result.join('');
  }
})();
