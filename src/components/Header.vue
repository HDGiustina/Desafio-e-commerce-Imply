<template class="uk-container">
    <div>
        <div class= "uk-text-center uk-background-primary">
            <div class="uk-width-1-4 uk-align-right uk-inlinem uk-margin-top">
                <div><a class="uk-text-secondary uk-text-decoration-none uk-button-text" href="/">Home</a></div>
                <div><a class="uk-text-secondary uk-text-decoration-none uk-button-text" href="/">Cadastro</a></div>
                <div><a class="uk-text-secondary uk-text-decoration-none uk-button-text" href="/">Carrinho</a></div>
                <div class="uk-width-1-4 uk-inline">
                    <a class="uk-text-secondary uk-text-decoration-none" href="/"><span uk-icon="user"></span>User</a>
                    <div uk-dropdown="mode:click" class="uk-list">
                        <li><span uk-icon="user"></span><RouterLink to="/perfil" class="uk-text-secondary uk-text-decoration-none uk-button-text">Perfil</RouterLink></li>
                        <li><RouterLink to="/pedidos" class="uk-text-secondary uk-text-decoration-none uk-button-text">Pedidos</RouterLink></li>
                        <li><RouterLink to="/recuperacao" class="uk-text-secondary uk-text-decoration-none uk-button-text">Trocar Senha</RouterLink></li>
                        <li><span uk-icon="sign-out"></span><RouterLink to="/" class="uk-text-secondary uk-text-decoration-none uk-button-text">Sair</RouterLink></li>
                        
                    </div>
                </div>
            </div>
            <div class="uk-width-1-4"><img src="/img/parque_das_palmeiras.png" alt="Logo do site"></div>
        </div>
    </div>
</template>
<script>
export default {
    name: "Header"
}
</script>