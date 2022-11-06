<template>
    <div class="uk-container uk-margin-xlarge uk-column-1-2@m">
        <section>
            <h1 class="uk-text-center">Produtos no Carrinho</h1>
            <ul class="uk-list uk-list-striped uk-column uk-overflow-auto" >
                <li v-for="pedidos in carrinho" :key="pedidos.id">
                    <p>{{ pedidos.tour }} - TIpo: {{ pedidos.type }}</p>
                    <p>R$ {{ pedidos.pryce }}, 00</p>
                </li>
            </ul>
        </section>
        <section>
            <h1 class="uk-text-center">Resumo do Pedido</h1>
            <div class="uk-card uk-card-default uk-card-body uk-width-1-2@m uk-margin-xlarge-left">
                <p>Itens: </p>
                <p>Total:</p>
                <hr>
                <button class="uk-button uk-margin uk-align-center uk-background-primary uk-text-secondary uk-box-shadow-hover-large uk-border-rounded">Finalizar Compra</button>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        name: 'Checkout',
        data(){
            return{
                carrinho:[
                {id: 1, tour: 'Tour Historico', type: 1, pryce: 18},
                {id: 2, tour: 'Tour Historico', type: 2, pryce: 9},
                {id: 3, tour: 'Tour Historico', type: 3, pryce: 9},
                {id: 4, tour: 'Tour Educacional', type: 1, pryce: 12},
                {id: 5, tour: 'Tour Educacional', type: 2, pryce: 6}
                ]
            }
        }
    }
</script>
