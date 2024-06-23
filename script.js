function checkInput() {
  const input = document.getElementById('textAnswer').value;
  if (input.toLowerCase().replace(/\s/g, '').replace(/-/g, '').replace(/é/g, 'e') === 'basiliquedusacrecoeur') {
      window.location.href = 'success.html';
  } else {
      alert('Essaie encore !');
  }
}
