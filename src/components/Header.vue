<template class="uk-container">
    <div class="uk-background-muted">
        <div class= "uk-text-center">
            <nav class="uk-navbar-container" uk-navbar>
                    <div class="uk-width-1-4 uk-align-left uk-margin-xlarge-left"><img src="/img/parque_das_palmeiras-header.png" alt="Logo do site"></div>
                <div class="uk-navbar-right">
                <ul class="uk-navbar-nav">
                    <li class="uk-parent"><a class="uk-text-large uk-margin-medium-top uk-text-secondary uk-text-decoration-none uk-button-text" href="/">
                        <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M12 5.69L17 10.19V18H15V12H9V18H7V10.19L12 5.69M12 3L2 12H5V20H11V14H13V20H19V12H22" />
                        </svg> Home</a></li>
                    <li class="uk-parent uk-button-text">
                        <a class="uk-text-large uk-margin-medium-top uk-text-secondary uk-text-decoration-none uk-button-text" uk-toggle="target: #my-id">
                            <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M15,4A4,4 0 0,0 11,8A4,4 0 0,0 15,12A4,4 0 0,0 19,8A4,4 0 0,0 15,4M15,5.9C16.16,5.9 17.1,6.84 17.1,8C17.1,9.16 16.16,10.1 15,10.1A2.1,2.1 0 0,1 12.9,8A2.1,2.1 0 0,1 15,5.9M4,7V10H1V12H4V15H6V12H9V10H6V7H4M15,13C12.33,13 7,14.33 7,17V20H23V17C23,14.33 17.67,13 15,13M15,14.9C17.97,14.9 21.1,16.36 21.1,17V18.1H8.9V17C8.9,16.36 12,14.9 15,14.9Z" />
                            </svg>
                            Cadastro
                        </a>
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
                                        <label class="uk-form-label" for="fullname">Nome Completo:*</label>
                                        <input class="uk-input uk-border-rounded" type="text" name="fullname" id="fullname">
                                        <label for="cpf" class="uk-form-label">CPF*</label>
                                        <input class="uk-input uk-border-rounded" type="text" name="cpf" id="cpf">
                                        <label class="uk-form-label">Sexo*</label>
                                        <div class="uk-grid-small uk-child-width-auto uk-grid">
                                            <label><input value="1" class="uk-radio" type="radio" name="gender" checked> Masculino</label>
                                            <label><input value="2" class="uk-radio" type="radio" name="gender"> Feminino</label>
                                            <label><input value="3" type="radio" class="uk-radio" name="gender"> Outro</label>
                                            <label><input value="4" type="radio" class="uk-radio" name="gender"> Prefiro não dizer</label>
                                        </div>
                                        <label class="uk-form-label" for="phone">Celular*</label>
                                        <input type="text" class="uk-input uk-border-rounded" name="phone" id="phone">
                                        <label for="email" class="uk-form-label">Email*</label>
                                        <input type="text" name="email" id="email" class="uk-input uk-border-rounded">
                                        <label for="password" class="uk-form-label uk-border-rounded">Senha*</label>
                                        <input type="text" name="password" id="password" class="uk-input">
                                        <label for="repeat_password" class="uk-form-label ">Digite a senha novamente*</label>
                                        <input type="text" name="repeat_password" id="repeat_password" class="uk-input uk-border-rounded">
                                        <button type="submit" class="uk-button uk-margin uk-align-center uk-background-primary uk-text-secondary uk-box-shadow-hover-large uk-border-rounded">Cadastrar</button>
                                        <h6>* Dados obrigatórios</h6>
                                    </form>
                                    <!-- Fim modal Cadastro -->
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <a class="uk-margin-medium-top uk-text-secondary uk-text-decoration-none uk-button-text" href="/">
                            <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,6A2,2 0 0,0 10,8A2,2 0 0,0 12,10A2,2 0 0,0 14,8A2,2 0 0,0 12,6M12,13C14.67,13 20,14.33 20,17V20H4V17C4,14.33 9.33,13 12,13M12,14.9C9.03,14.9 5.9,16.36 5.9,17V18.1H18.1V17C18.1,16.36 14.97,14.9 12,14.9Z" />
                            </svg>
                         User</a>
                        <div uk-dropdown="mode:click" class="uk-list uk-text-left uk-border-rounded">
                            <li>
                                <svg class="uk-text-secondary" style="width:24px;height:24px" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,6A2,2 0 0,0 10,8A2,2 0 0,0 12,10A2,2 0 0,0 14,8A2,2 0 0,0 12,6M12,13C14.67,13 20,14.33 20,17V20H4V17C4,14.33 9.33,13 12,13M12,14.9C9.03,14.9 5.9,16.36 5.9,17V18.1H18.1V17C18.1,16.36 14.97,14.9 12,14.9Z" />
                                </svg>
                                <RouterLink to="/perfil" class="uk-text-secondary uk-text-decoration-none uk-button-text">
                             Perfil </RouterLink></li>
                            <li>
                                <svg class="uk-text-secondary" style="width:24px;height:24px" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M19,3H14.82C14.25,1.44 12.53,0.64 11,1.2C10.14,1.5 9.5,2.16 9.18,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M12,3A1,1 0 0,1 13,4A1,1 0 0,1 12,5A1,1 0 0,1 11,4A1,1 0 0,1 12,3M7,7H17V5H19V19H5V5H7V7M17,11H7V9H17V11M15,15H7V13H15V15Z" />
                                </svg>
                                <RouterLink to="/pedidos" class="uk-text-secondary uk-text-decoration-none uk-button-text">
                            Pedidos </RouterLink></li>
                            <li>
                                <svg class="uk-text-secondary" style="width:24px;height:24px" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M12.63,2C18.16,2 22.64,6.5 22.64,12C22.64,17.5 18.16,22 12.63,22C9.12,22 6.05,20.18 4.26,17.43L5.84,16.18C7.25,18.47 9.76,20 12.64,20A8,8 0 0,0 20.64,12A8,8 0 0,0 12.64,4C8.56,4 5.2,7.06 4.71,11H7.47L3.73,14.73L0,11H2.69C3.19,5.95 7.45,2 12.63,2M15.59,10.24C16.09,10.25 16.5,10.65 16.5,11.16V15.77C16.5,16.27 16.09,16.69 15.58,16.69H10.05C9.54,16.69 9.13,16.27 9.13,15.77V11.16C9.13,10.65 9.54,10.25 10.04,10.24V9.23C10.04,7.7 11.29,6.46 12.81,6.46C14.34,6.46 15.59,7.7 15.59,9.23V10.24M12.81,7.86C12.06,7.86 11.44,8.47 11.44,9.23V10.24H14.19V9.23C14.19,8.47 13.57,7.86 12.81,7.86Z" />
                                </svg>
                                <RouterLink to="/recuperacao" class="uk-text-secondary uk-text-decoration-none uk-button-text">
                             Trocar Senha </RouterLink></li>
                            <li>
                                <svg class="uk-text-secondary" style="width:24px;height:24px" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M19,3H5C3.89,3 3,3.89 3,5V9H5V5H19V19H5V15H3V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M10.08,15.58L11.5,17L16.5,12L11.5,7L10.08,8.41L12.67,11H3V13H12.67L10.08,15.58Z" />
                                </svg>
                                <RouterLink to="/" class="uk-text-secondary uk-text-decoration-none uk-button-text">
                             Sair </RouterLink></li>
                        </div>
                    </li>
                    <li class="uk-parent"><a class="uk-margin-medium-top uk-text-secondary uk-text-decoration-none uk-button-text uk-margin-xlarge-right" href="/checkout">
                        <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M17,18A2,2 0 0,1 19,20A2,2 0 0,1 17,22C15.89,22 15,21.1 15,20C15,18.89 15.89,18 17,18M1,2H4.27L5.21,4H20A1,1 0 0,1 21,5C21,5.17 20.95,5.34 20.88,5.5L17.3,11.97C16.96,12.58 16.3,13 15.55,13H8.1L7.2,14.63L7.17,14.75A0.25,0.25 0 0,0 7.42,15H19V17H7C5.89,17 5,16.1 5,15C5,14.65 5.09,14.32 5.24,14.04L6.6,11.59L3,4H1V2M7,18A2,2 0 0,1 9,20A2,2 0 0,1 7,22C5.89,22 5,21.1 5,20C5,18.89 5.89,18 7,18M16,11L18.78,6H6.14L8.5,11H16Z" />
                        </svg>
                     Carrinho</a></li>
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