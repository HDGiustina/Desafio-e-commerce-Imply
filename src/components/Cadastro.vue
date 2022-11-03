<template>
    <div>
        <button
            uk-toggle="target: #my-id"
            type="button"
            class="uk-button uk-button-primary"
        >
            Cadastrar
        </button>
        <div id="my-id" uk-modal>
            <div class="uk-modal-dialog uk-modal-body">
                <div>
                    <a href="#"><span class="uk-align-right uk-modal-close" uk-icon="close"></span></a>
                </div>
                <h2 class="uk-modal-title uk-padding-small uk-background-primary">Cadastro</h2>
                <div class="uk-padding-medium">
                    <form>
                        <label class="uk-form-label" for="nome">Nome Completo</label>
                        <input class="uk-input" type="text" name="nome" id="nome">
                        <label for="cpf" class="uk-form-label">CPF</label>
                        <input class="uk-input" type="text" name="cpf" id="cpf">
                        <label class="uk-form-label">Sexo</label>
                        <div class="uk-grid-small uk-child-width-auto uk-grid">
                            <label><input class="uk-radio" type="radio" name="sexo" checked> Masculino</label>
                            <label><input class="uk-radio" type="radio" name="sexo"> Feminino</label>
                            <label><input type="radio" class="uk-radio" name="sexo"> Outro</label>
                        </div>
                        <label class="uk-form-label" for="celular">Celular</label>
                        <input type="text" class="uk-input" name="celular" id="celular">
                        <label for="email" class="uk-form-label">Email</label>
                        <input type="text" name="email" id="email" class="uk-input">
                        <label for="senha" class="uk-form-label">Senha</label>
                        <input type="text" name="senha" id="senha" class="uk-input">
                        <label for="repeat_senha" class="uk-form-label">Digite a senha novamente</label>
                        <input type="text" name="repeat_senha" id="repeat_senha" class="uk-input">
                        <button class="uk-button uk-margin uk-align-center uk-background-primary uk-text-secondary uk-box-shadow-hover-large" v-on:click="enviarDados()">Cadastrar</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'Cadastro',
        methods: {
            enviarDados(){
                //fazer um fecth
            }
        }
    }
</script>