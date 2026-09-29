const btn = document.getElementById('magicBtn');
const box = document.getElementById('box');

	btn.addEventListener('click', () => {
	const newDiv = document.createElement('div');
	newDiv.className = 'magic-div';

    newDiv.innerHTML = `
      <h3>Мяу!</h3>
      <p>Сюда пихай любые теги</p>
      <img src="ссылка_на_мурку.jpg" alt="Мурка">
    `;

    box.appendChild(newDiv);
  });