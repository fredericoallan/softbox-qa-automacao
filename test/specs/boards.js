var basePage = require('./../../src/pages/base.page');
var loginPage = require('./../../src/pages/login.page');
var boardListPage = require('./../../src/pages/boardList.page');
var boardPage = require('./../../src/pages/board.page');
var quadroPage = require('./../../src/pages/quadro.page');
var quadro = 'fred';

describe('Boards Trello', function () {
    it("Validando a criação de um novo board", function () {
        loginPage.open();
        loginPage.logar("qachallengesoftbox@email.com", "S0ftbox123");
        expect(basePage.getNomeUsuario()).to.equal('QA_CHALLENGE_SOFTBOX (qa_challenge_softbox)');
        boardListPage.open();
        boardListPage.criarQuadro(quadro);
        expect(boardPage.getNomeQuadro()).to.equal(quadro);
    });

    it("Removendo o board criado acima", function() {
        // 1. Acessar página de lista de boards
        // 2. Clicar no quadro Gerenciamento de projetos 2019
        // 3. No menu do lado direito, clicar em mais, e no botão fechar quadro
        // 4. Confirma fechar o quadro no modal que se abre
        // 5. Confirma mensagem de sucesso que o quadro está fechado
        // 6. Acessar página da lista de quadros novamente e verificar se de fato o quadro foi removido
        boardListPage.open();
        boardListPage.abrirQuadro(quadro);
        expect(quadroPage.getNomeQuadro()).to.equal(quadro);
        quadroPage.excluirQuadro(quadro);
        boardListPage.open();
        expect(boardListPage.validarQuadro(quadro)).to.equal(false);
    });
});
