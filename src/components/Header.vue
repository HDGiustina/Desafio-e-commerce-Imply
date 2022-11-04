<template class="uk-container">
    <div>
        <div class= "uk-text-center uk-background-secondary">
            <nav class="uk-navbar-container" uk-navbar>
                    <div class="uk-width-1-4 uk-align-left uk-margin-xlarge-left"><img src="/img/parque_das_palmeiras-header.png" alt="Logo do site"></div>
                <div class="uk-navbar-right">
                <ul class="uk-navbar-nav">
                    <li class="uk-parent"><a class="uk-text-secondary uk-text-decoration-none uk-button-text" href="/"><span uk-icon="home"></span> Home</a></li>
                    <li class="uk-parent"><a class="uk-text-secondary uk-text-decoration-none uk-button-text" href="/">Cadastro</a></li>
                    <li>
                        <a class="uk-text-secondary uk-text-decoration-none uk-button-text" href="/"><span uk-icon="user"></span>User</a>
                        <div uk-dropdown="mode:click" class="uk-list">
                            <li><span uk-icon="user"></span><RouterLink to="/perfil" class="uk-text-secondary uk-text-decoration-none uk-button-text">Perfil</RouterLink></li>
                            <li><RouterLink to="/pedidos" class="uk-text-secondary uk-text-decoration-none uk-button-text">Pedidos</RouterLink></li>
                            <li><RouterLink to="/recuperacao" class="uk-text-secondary uk-text-decoration-none uk-button-text">Trocar Senha</RouterLink></li>
                            <li><span uk-icon="sign-out"></span><RouterLink to="/" class="uk-text-secondary uk-text-decoration-none uk-button-text">Sair</RouterLink></li>
                        </div>
                    </li>
                    <li class="uk-parent"><a class="uk-text-secondary uk-text-decoration-none uk-button-text uk-margin-xlarge-right" href="/checkout"><span uk-icon="icon: cart"></span> Carrinho</a></li>
                </ul>
                </div>
            </nav>
        </div>
    </div>
</template>
<script>
export default {
    name: "Header"
}
</script>