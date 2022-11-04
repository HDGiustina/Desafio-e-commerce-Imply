<template>
    <main class="uk-flex uk-margin-large-top uk-align-center  uk-flex-column uk-flex-middle ">
        <h1 class="uk-margin-large-bottom">Recuperação de Senha:</h1>
        <form @submit.prevent="enviarDados">
            <label for="password" class="uk-form-label">Nova Senha</label>
            <input type="text" name="password" id="password" class="uk-input uk-margin-medium-bottom uk-border-rounded">
            <label for="repeat_password" class="uk-form-label">Digite a senha novamente</label>
            <input type="text" name="repeat_password" id="repeat_password" class="uk-input uk-margin-large-bottom uk-border-rounded">
            <button type="submit" class="uk-button uk-margin uk-align-center uk-background-primary uk-text-secondary uk-box-shadow-hover-large uk-border-rounded">Salvar</button>
        </form>
    </main>
</template>

<script>
    export default {
        name: 'Recuperacao',
        methods: {
            enviarDados(e){
                let senha = {
                    "password": e.target.elements.password.value
                }
                console.log(senha) 
            }
        }
    }
</script>