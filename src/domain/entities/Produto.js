class Produto {
  constructor({ id, nome, descricao, preco, ativo = true }) {
    this.id = id;
    this.nome = nome;
    this.descricao = descricao;
    this.preco = preco;
    this.ativo = ativo;
  }

  atualizarPreco(novoPreco) {
    this.preco = novoPreco;
  }

  ativar() {
    this.ativo = true;
  }

  desativar() {
    this.ativo = false;
  }
}
