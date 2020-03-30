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
        items: [
            //{ id: 1, country_code: 'AF', country_name: 'AFGHANISTAN' },
            //{ id: 2, country_code: 'AX', country_name: 'ALAND ISLANDS' },
            //{ id: 3, country_code: 'AL', country_name: 'ALBANIA' },
            //{ id: 4, country_code: 'DZ', country_name: 'ALGERIA' },
            //{ id: 5, country_code: 'AS', country_name: 'AMERICAN SAMOA' },
        ]
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
                this.items = response.data.projects;
                console.log(this.items);
            }).catch(() => {
                console.warn('Error retrieving projects');
            })
        }
    },
}
</script>