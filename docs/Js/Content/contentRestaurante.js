var tipocomida = new Vue({
    el: '#tipocomida',
    data: {
        selected: 'Todos',
        options: [
            {text: 'Todos', value:'Todos'}, 
            {text: 'Comida Vegana', value: 'Vegan'}
        ]
    }
});

var titulouni = new Vue({
    el: '.titulouni',
    data: {
        titulouni: 'Bolinhos Lindinhos:'
    }
});

var precouni = new Vue({
    el: '.precouni',
    data: {
        precouni: '$'
    }
});

var imguni = new Vue({
    el: '.imguni',
    data: {
        imguni: ''
    }
});

