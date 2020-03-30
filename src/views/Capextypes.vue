<template>
    <b-table head-variant hover :items="items"></b-table>
</template>

<script>

import service from '@/service';

export default {
    name: 'Capextypes',

    data: () => ({
        items: [
            //{ id: 1, name: 'BRONCE' },
            //{ id: 2, name: 'SILVER' },
            //{ id: 3, name: 'GOLD' },
            //{ id: 4, name: 'PLATINUM' },
            //{ id: 5, name: 'AWARDED' },
            //{ id: 6, name: 'EXECUTED' },
            //{ id: 7, name: 'N.A' },
        ]
    }),

    created() {
        // Llama a la función que carga la lista de capextypes
        this.loadCapexTypes();
    },

    methods: {
        // Cargar capextypes
            loadCapexTypes() {
            service.get('https://cors-anywhere.herokuapp.com/https://testacciona.azurewebsites.net/api/Countries'
            ).then(response => {
                this.items = response.data.projects;
                console.log(this.items);
            }).catch(() => {
                console.warn('Error retrieving projects');
            })
        }
    },
}
</script>