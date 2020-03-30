<template>
    <div>
        <b-table head-variant hover :items="items"></b-table>
    </div>
</template>

<script>
import service from '@/service';

export default {
    
    name: 'Countries',

    data: () => ({
        items: []
    }),

    created() {
        // Llama a la función que carga la lista de paises
        this.loadCountries();
    },

    methods: {
        // Cargar paises
            loadCountries() {
            service.get('https://cors-anywhere.herokuapp.com/https://testacciona.azurewebsites.net/api/Countries'
            ).then(response => {
                this.items = response.data.countries;
            }).catch(() => {
                console.warn('Error retrieving projects');
            })
        }
    },
}
</script>