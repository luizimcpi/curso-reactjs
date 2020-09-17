export default class Categorias {
    constructor(){
        this.categorias = [];
        this._inscritos = []; //_ representa privado apenas uma convencao
    }

    inscrever(func){
        this._inscritos.push(func);
    }

    desinscrever(func){
        this._inscritos = this._inscritos.filter(f => f !== func)
    }

    notificar(){
        this._inscritos.forEach(func => {
            func(this.categorias);
        });
    }

    adicionarCategoria(novaCategoria){
        this.categorias.push(novaCategoria);
        this.notificar();
    }
}