import React from 'react';

const Cadastro = () => 
    <div className="cadastro">
        <form className="form-cadastro"> 
            <input type="text" placeholder="Nome..."/>
            <input type="text" placeholder="Categoria..."/>
            <input type="text" placeholder="Descrição..."/>
            <input type="text" placeholder="Imagem..."/>
            

            <button>Cadastrar</button>
            <button>Cancelar</button>
        </form>
    </div>


export default Cadastro;
