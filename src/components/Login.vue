<template>
   <main>
      <button
            uk-toggle="target: #my-login"
            type="button"
            class="uk-button uk-button-primary"
        >
            Login
        </button>
        <div id="my-login" uk-modal>
         <div class="uk-modal-dialog uk-modal-body">
                <div>
                    <a href="#"><span class="uk-align-right uk-modal-close" uk-icon="close"></span></a>
                </div>
                <h2 class="uk-modal-title uk-padding-small uk-background-primary">Login</h2>
                <div class="uk-padding-medium">
                    <label class="uk-form-label" for="nome">Usuário (email)</label>
                    <input class="uk-input" type="text" name="usuario" id="usuario" placeholder="example@example.com">
                    <label for="senha" class="uk-form-label">Senha</label>
                    <input class="uk-input" type="text" name="senha" id="senha">
                    <button class="uk-button uk-margin uk-align-center uk-background-primary uk-text-secondary uk-box-shadow-hover-large" onclick="">Entrar</button>
                </div>
         </div>
        </div>
   </main>
</template>
<script>
   export default {
      name: "Login"
   }
</script>