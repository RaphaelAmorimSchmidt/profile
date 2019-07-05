const carregar = () => {
  const msg = window.document.getElementById('msg');
  const hora = new Date().getHours();
  let apresentacao = '';
  if (hora >= 0 && hora < 12) {
    apresentacao = "Bom dia";
  } else if (hora >= 12 && hora < 18) {
    apresentacao = "Boa Tarde";
  } else {
    apresentacao = "Boa Noite";
  }

  msg.innerHTML = `${apresentacao}, sou Raphael Amorim Schmidt!`;
};
