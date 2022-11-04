<template class="uk-container">
    <div>
        <div class= "uk-text-center">
            <nav class="uk-navbar-container" uk-navbar>
                    <div class="uk-width-1-4 uk-align-left uk-margin-xlarge-left"><img src="/img/parque_das_palmeiras-header.png" alt="Logo do site"></div>
                <div class="uk-navbar-right">
                <ul class="uk-navbar-nav">
                    <li class="uk-parent"><a class="uk-text-large uk-margin-medium-top uk-text-secondary uk-text-decoration-none uk-button-text" href="/"><span uk-icon="home"></span> Home</a></li>
                    <li class="uk-parent uk-button-text">
                        <button class="uk-text-uppercase uk-text-default uk-margin-large-top uk-text-secondary uk-button-default" uk-toggle="target: #my-id">Cadastro</button>
                            <div id="my-id" uk-modal>
                            <div class="uk-modal-dialog uk-modal-body">
                                <button class="uk-modal-close uk-align-right"><span uk-icon="close"></span></button>
                                <h2 class="uk-modal-title uk-background-primary uk-padding-small">Cadastro</h2>
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
                        </div>
                    </li>
                    <li>
                        <a class="uk-margin-medium-top uk-text-secondary uk-text-decoration-none uk-button-text" href="/"><span uk-icon="user"></span>User</a>
                        <div uk-dropdown="mode:click" class="uk-list">
                            <li><span uk-icon="user"></span><RouterLink to="/perfil" class="uk-text-secondary uk-text-decoration-none uk-button-text">Perfil</RouterLink></li>
                            <li><RouterLink to="/pedidos" class="uk-text-secondary uk-text-decoration-none uk-button-text">Pedidos</RouterLink></li>
                            <li><RouterLink to="/recuperacao" class="uk-text-secondary uk-text-decoration-none uk-button-text">Trocar Senha</RouterLink></li>
                            <li><span uk-icon="sign-out"></span><RouterLink to="/" class="uk-text-secondary uk-text-decoration-none uk-button-text">Sair</RouterLink></li>
                        </div>
                    </li>
                    <li class="uk-parent"><a class="uk-margin-medium-top uk-text-secondary uk-text-decoration-none uk-button-text uk-margin-xlarge-right" href="/checkout"><span uk-icon="cart"></span> Carrinho</a></li>
                </ul>
                </div>
            </nav>
        </div>
    </div>
</template>
<script>
export default {
    name: "Header",
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