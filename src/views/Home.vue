<template>
    <main class="uk-height-viewport">
        <section class="uk-section uk-background-cover uk-flex uk-flex-center" data-src="/img/fundo-home.jpg" uk-img>
            
                <div class="uk-width-1-2 uk-margin-xlarge-left uk-margin-xlarge-right uk-text-center">
                    <h1 class="uk-text-secondary ">Os Melhores Tours!</h1>
                    <p class="uk-text-bold uk-text-secondary ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nemo eaque enim perferendis recusandae architecto tempora nam! Voluptatibus a doloribus deleniti nesciunt alias sint ipsam beatae, possimus minima laboriosam id.</p>
                    
                </div>
                <div class="uk-border-rounded uk-card uk-card-default uk-card-hover uk-card-body uk-width-1-2 uk-margin-xlarge-right">
                    <form @submit.prevent="enviarDados"  >
                        <h3 class="uk-text-secondary">Compre o Seu Ingresso!</h3>
                        <label for="data" class="uk-form-label">Selecione a data</label>
                        <input type="date" name="data" id="data" class="uk-border-rounded uk-input">
                        <label for="quantidade" class="uk-form-label">Informe quantos ingressos</label>
                        <input type="number" name="quantidade" id="quantidade" min="0" class="uk-border-rounded uk-input">
                        <label for="ingressos" class="uk-form-label">Selecione o Tour</label>
                        <select name="ingressos" id="ingressos" class="uk-border-rounded uk-select" >
    
                            <option selected disabled value="0">Selecione...</option>
                            <option v-for="(tour, index) in Tours" :key="index">{{ tour }}</option>
    
                        </select>
                        <label for="tipo" class="uk-form-label">Selecione o tipo de ingresso</label>
                        <select name="tipo" id="tipo" class="uk-border-rounded uk-select">
                            <option selected disabled value="0">Selecione...</option>
                            <option v-for="(tipo, index) in ingresso" :key="index">{{ tipo }}</option>
                        </select>
                        <button type="submit" class="uk-button uk-margin uk-align-center uk-background-secondary uk-text-muted uk-box-shadow-hover-large uk-border-rounded">Adicionar</button>
                    </form>
                </div>
        </section>
        <section class="uk-flex uk-margin-large-top uk-align-center uk-flex-center " >
            
            <div class="uk-position-relative uk-visible-toggle uk-light uk-width-xlarge " tabindex="-1" uk-slideshow>
                
                <ul class="uk-slideshow-items uk-border-rounded">
                    <li v-for="(img, index) in imagens" :key="index">
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
import db from '../db/db.js'

    export default {
        data() {
            return{ 
                imagens: [
                    '/img/carrossel1.jpg',
                    '/img/carrossel2.jpg',
                    '/img/carrossel3.jpg',
                    '/img/carrossel4.jpg'
                ],
                Tours: [
                    'Tour Histórico',
                    'Tour Educacional',
                    'Tour Amanhecer'
                ],
                ingresso: ['Inteiro','Meia-entreda','PCDs'],
                dia: (new Date()).getDate(),
                mes: (new Date()).getMonth() + 1,
                ano: (new Date()).getFullYear(),
                hoje: ""
            }
        },
        mounted() {
            this.getToday()
        },
        methods: {
            async getToday(){
                if(this.dia < 10){
                    this.dia = "0" + this.dia 
                }
                let hoje = this.ano + "-"+ this.mes + "-" + this.dia
                this.hoje = new Date(hoje)
            },
            async enviarDados(e){
                let userInfo = {
                    "data": new Date(e.target.elements.data.value),
                    "qtd": e.target.elements.quantidade.value,
                    "ingresso": e.target.elements.ingressos.value,
                    "tipo": e.target.elements.tipo.value
                }
                userInfo.data.setDate(userInfo.data.getDate() + 1)
                if(userInfo.data.getTime() >= this.hoje.getTime()){
                    console.log("1")
                    if(userInfo.qtd > 0){
                        console.log("2")
                        if(userInfo.ingresso != 0){
                            console.log("3")
                            if(userInfo.tipo != 0){
                                console.log("4")
                                userInfo.data = userInfo.data.toLocaleDateString()
                                console.log(userInfo.data)
                                await db.saveItem(userInfo, 'carrinho')
                                this.$router.push('/checkout')
                                console.log(db.getItem('carrinho'))
                            }else{
                                window.alert("Por Favor, selecione um tipo de ingresso!")
                            }
                        }else{
                            window.alert("Por Favor, selecione um Tour!")
                        }
                    }else{
                        window.alert("Quantidade inválida!")
                    }
                }else{
                    window.alert("Data inválida!")
                }
                 
            }
        }
    }
</script>