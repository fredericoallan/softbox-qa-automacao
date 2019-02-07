const QuadroPage = function() {
  this.seletores = {
    nomeBoard: "span[class='js-board-editing-target board-header-btn-text']",
    botaoMostrarMenu: "a[class='board-header-btn mod-show-menu js-show-sidebar']",
    boardMenu: "div[class='board-menu js-fill-board-menu']",
    botaoMais: "a[class='board-menu-navigation-item-link js-open-more']",
    botaoFecharQuadro: "a[class='board-menu-navigation-item-link js-close-board']",
    popUpFecharQuadro: "div[class='pop-over is-shown']",
    botaoPopUpFecharQuadro: "div[class='pop-over is-shown'] input[value='Fechar']",
    botaoPopUpExcluirQuadro: "div[class='pop-over is-shown'] input[value='Excluir']",
    msgQuadroFechado: "div[class='big-message quiet closed-board'] h1",
    msgQuadroExcluido: "div[class='big-message quiet'] h1",
    botaoExcluirPermanente: "p[class='delete-container'] a[class='quiet js-delete']"
  };


  this.getNomeQuadro = function () {
    browser.waitForVisible(this.seletores.nomeBoard);
    return browser.element(this.seletores.nomeBoard).getText();
  }

  this.getMsgQuadroFechado = function() {
      browser.waitForEnabled(this.seletores.msgQuadroFechado);
      return browser.element(this.seletores.msgQuadroFechado).getText();
  }

  this.getMsgQuadroExcluido = function() {
    browser.waitForEnabled(this.seletores.msgQuadroExcluido);
    return browser.element(this.seletores.msgQuadroExcluido).getText();
}

  this.excluirQuadro = function (quadro) {
    //browser.element(this.seletores.botaoMostrarMenu).click();
    browser.waitForVisible(this.seletores.boardMenu);
    browser.element(this.seletores.botaoMais).click();
    browser.waitForVisible(this.seletores.botaoFecharQuadro);
    browser.element(this.seletores.botaoFecharQuadro).click();
    browser.waitForVisible(this.seletores.popUpFecharQuadro);
    browser.element(this.seletores.botaoPopUpFecharQuadro).click();
    expect(this.getMsgQuadroFechado()).to.equal(quadro + " está fechado.");
    browser.element(this.seletores.botaoExcluirPermanente).click();
    browser.waitForVisible(this.seletores.popUpFecharQuadro);
    browser.element(this.seletores.botaoPopUpExcluirQuadro).click();
    expect(this.getMsgQuadroExcluido()).to.equal("Quadro não encontrado.");
  }
};

module.exports = new QuadroPage();