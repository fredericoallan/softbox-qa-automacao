const basePage = require("./base.page");

const BoardListPage = function() {
  this.seletores = {
    botaoCriarNovoQuadro: ".mod-add",
    modalCriarQuadro: {
      nomeQuadro: ".create-board-form .subtle-input",
      botaoCriarNovoQuadro: "button[type='submit']"

    }
  };

  this.open = function() {
    basePage.open("qa_challenge_softbox/boards")
  };


  this.criarQuadro = function(nome) {
    browser.waitForVisible(this.seletores.botaoCriarNovoQuadro);
    browser.element(this.seletores.botaoCriarNovoQuadro).click();
    browser.waitForVisible(this.seletores.modalCriarQuadro.nomeQuadro);
    browser.element(this.seletores.modalCriarQuadro.nomeQuadro).setValue(nome);
    browser.element(this.seletores.modalCriarQuadro.botaoCriarNovoQuadro).click();
  };

  this.abrirQuadro = function(quadro){
    browser.waitForVisible("div[title='" + quadro + "']");
    browser.element("div[title='" + quadro + "']").click();
    browser.waitForVisible("div[title='" + quadro + "']",false);
  }

  this.validarQuadro = function(quadro){
    return browser.isExisting("div[title='" + quadro + "']");
  }

};

module.exports = new BoardListPage();
