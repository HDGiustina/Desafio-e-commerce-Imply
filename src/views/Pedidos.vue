<template >
    <main class="uk-text-center">
        <h1>Pedidos</h1>
        <h3>Aqui está seu histórico de pedidos:</h3>
    </main>
    <div>
        <ul  class="uk-list uk-text-center">
            <li v-for="pedido in pedidos" :key="pedido.id" class="uk-card uk-card-default uk-card-body uk-width-1-2@m">
                <h1 class="uk-text-default">{{ pedido.tour }}</h1>
                <p class="uk-text-small">Tipo: {{ pedido.type }}</p>
                <p class="uk-text-small">Preço: R$ {{ pedido.pryce }}, 00</p>
                <!-- <span class="uk-label">Finalizado</span> -->
            </li>
        </ul>
    </div>
</template>

<script>
 export default {
    name: "Pedidos",
    data(){
        return{
            pedidos:[
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