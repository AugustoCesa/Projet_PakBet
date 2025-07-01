let apostaSelecionada = "";

  function setAposta(aposta) {
    apostaSelecionada = aposta;
    document.getElementById('resumoAposta').innerText = `Você selecionou: ${aposta}`;
  }

  function confirmarAposta(tipo) {
    if (tipo === 'saldo') {
      alert(`Aposta "${apostaSelecionada}" confirmada com saldo da conta!`);
    } else {
      window.location.href = "/pages/deposito.html";
      return;
    }

    // Fecha o modal após a escolha
    const modal = bootstrap.Modal.getInstance(document.getElementById('modalPagamento'));
    modal.hide();
  }