<template class="uk-container">
    <div class="uk-background-muted">
        <div class= "uk-text-center">
            <nav class="uk-navbar-container" uk-navbar>
                    <div class="uk-width-1-4 uk-align-left uk-margin-xlarge-left"><img src="/img/parque_das_palmeiras-header.png" alt="Logo do site"></div>
                <div class="uk-navbar-right">
                <ul class="uk-navbar-nav">
                    <li class="uk-parent"><a class="uk-text-large uk-margin-medium-top uk-text-secondary uk-text-decoration-none uk-button-text" href="/"><span uk-icon="home"></span> Home</a></li>
                    <li class="uk-parent uk-button-text">
                        <button class="uk-text-uppercase uk-text-default uk-margin-large-top uk-text-secondary uk-button-default" uk-toggle="target: #my-id">
                            <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M15,4A4,4 0 0,0 11,8A4,4 0 0,0 15,12A4,4 0 0,0 19,8A4,4 0 0,0 15,4M15,5.9C16.16,5.9 17.1,6.84 17.1,8C17.1,9.16 16.16,10.1 15,10.1A2.1,2.1 0 0,1 12.9,8A2.1,2.1 0 0,1 15,5.9M4,7V10H1V12H4V15H6V12H9V10H6V7H4M15,13C12.33,13 7,14.33 7,17V20H23V17C23,14.33 17.67,13 15,13M15,14.9C17.97,14.9 21.1,16.36 21.1,17V18.1H8.9V17C8.9,16.36 12,14.9 15,14.9Z" />
                            </svg>
                            Cadastro
                        </button>
                            <div id="my-id" uk-modal>
                            <div class="uk-border-rounded uk-modal-dialog uk-modal-body">
                                <div>
                                    <a href="#"><span class="uk-align-right uk-modal-close" uk-icon="close"></span></a>
                                </div>
                                <h2 class="uk-border-rounded uk-modal-title uk-background-primary uk-padding-small">Cadastro</h2>
                                <div class="uk-padding-medium">
                                    <button class="uk-button uk-margin uk-align-center uk-background-default uk-text-secondary uk-box-shadow-hover-large uk-border-rounded" uk-toggle="target: #my-log">Já tenho cadastro</button>
                                        <!-- Início modal Login -->
                                        <div id="my-log" uk-modal>
                                            <div class="uk-border-rounded uk-modal-dialog uk-modal-body">
                                                <div>
                                                    <a href="#"><span class="uk-align-right uk-modal-close" uk-icon="close"></span></a>
                                                </div>
                                                <h2 class="uk-border-rounded uk-modal-title uk-padding-small uk-background-primary">Login</h2>
                                                <div class="uk-padding-medium">
                                                    <label class="uk-form-label" for="nome">Usuário (email)</label>
                                                    <input class="uk-input uk-border-rounded" type="text" name="usuario" id="usuario" placeholder="example@example.com">
                                                    <label for="senha" class="uk-form-label">Senha</label>
                                                    <input class="uk-input uk-border-rounded" type="text" name="senha" id="senha">
                                                    <button class="uk-button uk-margin uk-align-center uk-background-primary uk-text-secondary uk-box-shadow-hover-large uk-border-rounded" onclick="">Entrar</button>
                                                    <button class="uk-button uk-margin uk-align-center uk-background-default uk-text-secondary uk-box-shadow-hover-large uk-border-rounded" uk-toggle="target: #my-pass">Esqueci minha senha</button>
                                                        <!-- Início esqueci minha senha -->
                                                        <div id="my-pass" uk-modal>
                                                            <div class="uk-border-rounded uk-modal-dialog uk-modal-body">
                                                                <div>
                                                                    <a href="#"><span class="uk-align-right uk-modal-close" uk-icon="close"></span></a>
                                                                </div>
                                                                <h2 class=" uk-border-rounded uk-modal-title uk-padding-small uk-background-primary">Esqueci minha senha</h2>
                                                                <div class="uk-padding-medium">
                                                                    <label class="uk-form-label" for="nome">Usuário (email)</label>
                                                                    <input class="uk-input uk-border-rounded" type="text" name="usuario" id="usuario" placeholder="example@example.com">
                                                                </div>
                                                                <button type="submit" class="uk-button uk-margin uk-align-center uk-background-primary uk-text-secondary uk-box-shadow-hover-large uk-border-rounded">Enviar</button>
                                                             </div>       
                                                        </div>
                                                    <!-- Fim esqueci minha senha -->
                                                </div>
                                            </div>
                                        </div>
                                        <!-- Fim modal Login -->

                                        <!-- Início modal Cadastro -->
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
                                    <!-- Fim modal Cadastro -->
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