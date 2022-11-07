<template>
    <div class="uk-list uk-text-center uk-margin-large ">
        <h1 class=" uk-margin-medium-bottom">Perfil</h1>
        <form  class="uk-list uk-text-center" @submit.prevent="enviarDados">
            <li><label class="uk-text-secondary uk-form-label" type="text">Nome: </label></li>
            <input name="fullname" id="fullname" type="text" class="uk-input uk-width-1-3 uk-border-rounded" placeholder="Nome">
            <li><label class="uk-text-secondary uk-form-label" type="text">CPF: </label></li>
            <input name="cpf" id="cpf" type="text" class="uk-input uk-width-1-3 uk-border-rounded" placeholder="CPF">
            <li><label class="uk-text-secondary uk-form-label" type="text">Sexo: </label></li>
            <div class="uk-grid-small uk-child-width-auto">
                <label><input value="1" class="uk-radio" type="radio" name="gender"> Masculino</label>
                <label><input value="2" class="uk-radio" type="radio" name="gender"> Feminino</label>
                <label><input value="3" type="radio" class="uk-radio" name="gender"> Outro</label>
                <label><input value="4" type="radio" class="uk-radio" name="gender"> Prefiro não dizer</label>
            </div>
            <li><label class="uk-text-secondary uk-form-label" type="text">Celular: </label></li>
            <input name="phone" id="phone" type="text" class="uk-input uk-width-1-3 uk-border-rounded" placeholder="Celular">
            <li><label class="uk-text-secondary uk-form-label" type="text">Email: </label></li>
            <input name="email" id="email" type="text" class="uk-input uk-width-1-3 uk-border-rounded uk-margin-large-bottom" placeholder="Email">
            <button type="submit" class="uk-button uk-margin uk-align-center uk-background-primary uk-text-secondary uk-box-shadow-hover-large uk-border-rounded">Atualizar</button>
        </form>
    </div>
</template>

<script>
   export default {
        name: 'Perfil',
    }
</script>

