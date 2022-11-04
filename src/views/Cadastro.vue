<template>
    <div id="my-id" class="uk-background-default uk-width-3-5 uk-align-center" uk-modal>
            <div>
                <a href="#"><span class="uk-align-right uk-modal-close" uk-icon="close"></span></a>
            </div>
            <h2 class="uk-modal-title uk-padding-small uk-background-primary">Cadastro</h2>
            <div class="uk-padding-medium ">
                <form  @submit.prevent="enviarDados">
                    <label class="uk-form-label" for="fullname">Nome Completo</label>
                    <input class="uk-input uk-border-rounded" type="text" name="fullname" id="fullname">
                    <label for="cpf" class="uk-form-label">CPF</label>
                    <input class="uk-input uk-border-rounded" type="text" name="cpf" id="cpf">
                    <label class="uk-form-label">Sexo</label>
                    <div class="uk-grid-small uk-child-width-auto uk-grid">
                        <label><input value="1" class="uk-radio" type="radio" name="gender" checked> Masculino</label>
                        <label><input value="2" class="uk-radio" type="radio" name="gender"> Feminino</label>
                        <label><input value="3" type="radio" class="uk-radio" name="gender"> Outro</label>
                        <label><input value="4" type="radio" class="uk-radio" name="gender"> Prefiro não dizer</label>
                    </div>
                    <label class="uk-form-label" for="phone">Celular</label>
                    <input type="text" class="uk-input uk-border-rounded" name="phone" id="phone">
                    <label for="email" class="uk-form-label">Email</label>
                    <input type="text" name="email" id="email" class="uk-input uk-border-rounded">
                    <label for="password" class="uk-form-label uk-border-rounded">Senha</label>
                    <input type="text" name="password" id="password" class="uk-input">
                    <label for="repeat_password" class="uk-form-label ">Digite a senha novamente</label>
                    <input type="text" name="repeat_password" id="repeat_password" class="uk-input uk-border-rounded">
                    <button type="submit" class="uk-button uk-margin uk-align-center uk-background-primary uk-text-secondary uk-box-shadow-hover-large uk-border-rounded">Cadastrar</button>
                </form>
            </div>
        </div>
</template>

<script>

    export default {
        name: 'Cadastro',
        methods: {
            enviarDados(e){
                let userInfo = {
                    "email": e.target.elements.email.value,
                    "fullname": e.target.elements.fullname.value,
                    "password": e.target.elements.password.value, 
                    "cpf": e.target.elements.cpf.value,
                    "gender": e.target.elements.gender.value,
                    "phone": e.target.elements.phone.value
                }
                console.log(userInfo)
                fetch('/cadastro', { method: 'POST', body: userInfo })
                .then(
                    response => response.json()
                ).then(
                    data => {
                        console.log(data);
                    }
                )
            }
        }
    }
</script>