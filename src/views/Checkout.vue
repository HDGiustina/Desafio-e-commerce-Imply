<template>
    <div class="uk-container uk-margin-xlarge uk-column-1-2@m">
        <section>
            <h1 class="uk-text-center">Produtos no Carrinho</h1>
            <h2 class="uk-card uk-card-default uk-card-body uk-text-center" v-if="this.carrinho == ''">Não há produtos no carrinho</h2>
            <ul class="uk-list uk-list-striped uk-column uk-overflow-auto" >
                <li v-for="pedidos in carrinho" :key="pedidos.id">
                    <p>{{ pedidos.ingresso }} - Tipo: {{ pedidos.tipo }}</p>
                    <p>R$ , 00</p> <!-- pegar do banco -->
                    <p>Quantidade: {{ pedidos.qtd }}</p>
                    <p>Data: {{ pedidos.data }}</p>
                </li>
            </ul>
        </section>
        <section>
            <h1 class="uk-text-center">Resumo do Pedido</h1>
            <div class="uk-card uk-card-default uk-card-body uk-width-1-2@m uk-margin-xlarge-left">
                <p>Itens: {{ itens }}</p>
                <p>Total:</p>
                <hr>
                <button class="uk-button uk-margin uk-align-center uk-background-primary uk-text-secondary uk-box-shadow-hover-large uk-border-rounded">Finalizar Compra</button>
            </div>
        </section>
    </div>
</template>

<script>
import db from '../db/db.js'

    export default {
        name: 'Checkout',
        data(){
            return{
                carrinho: [],
                itens: null
            }
        },
        mounted() {
            this.getCarrinho()
        },
        methods:{
            async getCarrinho(){
                console.log(this.carrinho)
                const carrinho = await db.getItem('carrinho')
                this.carrinho = carrinho
                console.log(this.carrinho)
                this.getItens()
                // this.itens = this.carrinho.length
            },
            async getItens(){
                let quantidade = 0
                if(this.carrinho != null){
                    this.carrinho.forEach(item => {
                        quantidade += parseInt(item.qtd)
                    })
                    console.log(quantidade)
                }
                this.itens = quantidade
            }
        }
    }
</script>
