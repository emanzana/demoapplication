<template>
    <b-table head-variant hover :items="items"></b-table>
</template>

<script>

import service from '@/service';

export default {
    name: 'CapexTypes',

    data: () => ({
        items: []
    }),

    created() {
        // Llama a la función que carga la lista de capextypes
        this.loadCapexTypes();
    },

    methods: {
        // Cargar capextypes
            loadCapexTypes() {
            service.get('https://cors-anywhere.herokuapp.com/https://testacciona.azurewebsites.net/api/CapexTypes'
            ).then(response => {
                this.items = response.data.capexTypes;
            }).catch(() => {
                console.warn('Error retrieving projects');
            })
        }
    },
}
</script>