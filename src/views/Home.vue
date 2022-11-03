<template>
    <main class="uk-height-viewport">
        <section class="uk-section uk-background-cover uk-flex uk-flex-center" data-src="/img/fundo-home.jpg" uk-img>
            
                <div class="uk-width-1-2 uk-margin-xlarge-left uk-margin-xlarge-right uk-light uk-text-center ">
                    <h1>Os Melhores Tours!</h1>
                    <p class="uk-text-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nemo eaque enim perferendis recusandae architecto tempora nam! Voluptatibus a doloribus deleniti nesciunt alias sint ipsam beatae, possimus minima laboriosam id.</p>
                    
                </div>
                <div class="uk-border-rounded uk-card uk-card-default uk-card-hover uk-card-body uk-width-1-2 uk-margin-xlarge-right">
                    <h3>Compre o seu ingreso</h3>
                    <label for="data" class="uk-form-label">Selecione a data</label>
                    <input type="date" name="data" id="data" class="uk-border-rounded uk-input">
                    <label for="quantidade" class="uk-form-label">Informe quantos ingressos</label>
                    <input type="number" name="quantidade" id="quantidade" min="0" class="uk-border-rounded uk-input">
                    <label for="ingressos" class="uk-form-label">Selecione o produto</label>
                    <select name="ingressos" id="ingressos" class="uk-border-rounded uk-select">

                        <option default disabled>Selecione...</option>
                        <option>*Back</option>

                    </select>
                </div>
        </section>
        <section class="uk-flex uk-margin-large-top uk-align-center uk-flex-center " >
            
            <div class="uk-position-relative uk-visible-toggle uk-light uk-width-xlarge " tabindex="-1" uk-slideshow>
                
                <ul class="uk-slideshow-items uk-border-rounded">
                    <li v-for="(img, index) in imagens" v-bind:key="index">
                        <img :src="img" alt="teste" uk-cover>
                    </li>
                </ul>

                <a class="uk-position-center-left uk-position-small uk-hidden-hover " href="#" uk-slidenav-previous uk-slideshow-item="previous"></a>
                <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slideshow-item="next"></a>

            </div>
        </section>
        <article class="uk-article uk-align-center uk-text-center uk-padding-large uk-width-1-2@s">
            <h1 class="uk-article-title">O melhor lugar para visitar!</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat consequatur incidunt alias distinctio, quasi quaerat quas at aperiam dolore temporibus dicta, ipsam, iste quia possimus. Aliquid nobis provident non recusandae.</p>
        </article>
    </main>
</template>


<script >
import { createDOMCompilerError } from "@vue/compiler-dom";
    export default {
        data() {
            return{ 
                imagens: [
                    '/img/carrossel1.jpg',
                    '/img/carrossel2.jpg',
                    '/img/carrossel3.jpg',
                    '/img/carrossel4.jpg'
                ]
            }
        }
    }
</script>