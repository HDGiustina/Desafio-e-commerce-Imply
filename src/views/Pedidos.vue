<template >
    <main class="uk-text-center">
        <h1>Pedidos</h1>
        <h3 >Aqui está seu historico de pedidos:</h3>
    </main>
    <div>
        <div class="uk-list uk-margin-xlarge-left uk-margin-xlarge-right uk-text-center">
            <div>
                <h4><strong>Tour Historico</strong></h4>
                <p>id=1 <br> type=1 <br> pryce=18 <br> <strong>Status: PENDENTE</strong></p>
            </div>
            <div>
                <h4><strong>Tour Educacional</strong></h4>
                <p> Status: Finalizado</p>
                <p>Tipo: Inteiro</p>
                <p>Quantidade: 1</p>
                <p>Preço: R$ 12,00</p>
            </div>
            <div>
                <h4><strong>Tour Amanhecer</strong></h4>
                <p>id=7 <br> type=1 <br> pryce=16 <br> <strong>Status: Concluido</strong></p>
            </div>
        </div>
        <!-- <ul class="uk-slideshow-items">
            <div v-for="(pedido in Pedidos)" v-bind:key="pedido.id">
                <p>{{pedido.id}}</p>
                <p>{{pedido.tour}}</p> 
                <p>{{pedido.tipo}}</p>
                <p>{{pedido.preco}}</p>
            </div>
        </ul> -->
    </div>
</template>

<script>
 export default {
    name: "Pedidos",
    // data(){
    //     return{
    //         pedidos:[
    //                 {id = 1, 'Tour Historico', type = 1, pryce = 18},
    //                 {id = 2, 'Tour Historico', type = 2, pryce = 9},
    //                 {id = 3, 'Tour Historico', type = 3, pryce = 9},
    //                 {id = 4, 'Tour Educacional', type = 1, pryce = 12},
    //                 {id = 5, 'Tour Educacional', type = 2, pryce = 6}
            
    //         ]
    //     }
    // }
}
</script>