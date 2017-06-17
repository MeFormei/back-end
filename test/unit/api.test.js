var assert = require('assert');



describe('Rotas da API', function() {

    describe('GET /api/v1/turmas', function() {
        it(`should return empty list when there is no 'turmas' in database`, function() {
            assert.ok(true);
        });
    });
  
    describe('GET /api/v1/turmas/1', function() {
        it(`should return not found.`, function() {
            assert.ok(true);
        });
    });

    describe('GET /api/v1/turmas/1/alunos', function() {
        it(`should return not found.`, function() {
            assert.ok(true);
        });
    });

    describe('GET /api/v1/turmas/1/alunos/2', function() {
        it(`should return not found.`, function() {
            assert.ok(true);
        });
    });

});