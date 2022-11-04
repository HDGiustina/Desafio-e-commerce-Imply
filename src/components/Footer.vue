<template>
      <div>
         <div class="uk-container uk-background-muted uk-width-auto">
            <hr>
               <img class="uk-align-right uk-margin-xlarge-right" src="/img/parque_das_palmeiras-header.png " alt="Logo do Parque">
            <ul class="uk-list uk-link-text uk-width-3-4 uk-margin-xlarge-left">
               <li><RouterLink to="/" class="uk-text-secondary uk-text-decoration-none uk-button-text">Home</RouterLink></li>
               <li><RouterLink to="/institucional" class="uk-text-secondary uk-text-decoration-none uk-button-text">Institucional</RouterLink></li>
               <li><RouterLink to="/cookies" class="uk-text-secondary uk-text-decoration-none uk-button-text">Políticas de Cookies</RouterLink></li>
               <li><RouterLink to="/privacidade" class="uk-text-secondary uk-text-decoration-none uk-button-text">Políticas de Privacidade</RouterLink></li>
            </ul>
         </div>
         <div class="uk-container uk-background-secondary uk-width-auto">
            <div class="uk-margin-top">
               <div class="uk-text-center">Copyright &copy;2022, TODOS OS DIREITOS RESERVADOS. Todo o conteúdo do site, todas as fotos, imagens, conjunto imagem, layout, trade dress, aqui veiculados são meramente ilustrativas e de propriedade exclusiva do Grupo da tarde e de seus integrantes. É vedada qualquer reprodução, total ou parcial, de qualquer elemento de identidade, sem expressa autorização. A violação de qualquer direito mencionado implicará na responsabilização cível e criminal nos termos da Lei.</div>
            </div>
               <div class="uk-margin-top">
               <div class="uk-text-center">
                  <p>Powered By</p>
                  <img class="uk-border-rounded" src="/img/imply-logo.jpg" width="150px" height="130px" alt="Logo da Imply">
               </div>
            </div>
         </div>
      </div>
</template>
<script>
   export default {
      name: 'Footer'
   }
</script>