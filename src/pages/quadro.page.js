const quadroPage = require("./base.page");

const QuadroPage = function() {
  this.seletores = {
    nomeBoard: "span[class='js-board-editing-target board-header-btn-text']",
    botaoMostrarMenu: "a[class='board-header-btn mod-show-menu js-show-sidebar",
    boardMenu: "div[class='board-menu js-fill-board-menu']",
    botaoMais: "a[class='board-menu-navigation-item-link js-open-more']",
    botaoFecharQuadro: "a[class='board-menu-navigation-item-link js-close-board']",
    popUpFecharQuadro: "div[class='pop-over is-shown']",
    botaoPopUpFecharQuadro: "div[class='pop-over is-shown'] input[value='Fechar']",
    msgQuadroFechado: "div[class='big-message quiet closed-board'] h1"
  };


  this.getNomeQuadro = function () {
    browser.waitForVisible(this.seletores.nomeBoard);
    return browser.element(this.seletores.nomeBoard).getText();
  }

  this.getMsgQuadroExcluido = function() {
      browser.waitForEnabled(this.seletores.msgQuadroFechado);
      return browser.element(this.seletores.msgQuadroFechado).getText();
  }

  this.excluirQuadro = function () {
    browser.element(this.botaoMostrarMenu).click();
    browser.waitForVisible(this.boardMenu);
    browser.element(this.botaoMais).click();
    browser.waitForVisible(this.botaoFecharQuadro);
    browser.element(this.botaoFecharQuadro).click();
    browser.waitForVisible(this.popUpFecharQuadro);
    browser.element(this.botaoPopUpFecharQuadro).click();
  }
};

module.exports = new QuadroPage();