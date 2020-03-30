<template>
    <div class="active px-2">
        <b-button variant="primary" href="projects/new">New</b-button>
        <b-table head-variant hover :items="items" :fields="fields"></b-table>
    </div>
</template>

<script>
import service from '@/service';

export default {
    name: 'ProjectsList',

    data: () => ({
        fields:
            [
                { key: 'projectName', sortable: true, label: 'Project Name'},
                { key: 'caseStudy', sortable: true, label: 'Case Study'},
                { key: 'technology', sortable: true, label: 'Technology'},
                { key: 'capexType.capexTypeName', sortable: true, label: 'CAPEX Type'},
                { key: 'country.countryName', sortable: true, label: 'Country'},
                { key: 'nominalPowerMWn', sortable: true, label: 'Nominal Power (MWn)'},
                { key: 'sentDate', sortable: true, label: 'SENT Date'},
                { key: 'user', sortable: true, label: 'User'},
                { key: 'updateDate', sortable: true, label: 'Update Date'},
                { key: 'e_CA_ID', sortable: false, label: 'E&CA ID'}
            ],
        items: [],
    }),

    created() {
        // Llama a la función que carga la lista de proyectos
        this.loadProjects();
    },

    methods: {
        // Cargar proyectos
            loadProjects() {
            service.get('https://cors-anywhere.herokuapp.com/https://testacciona.azurewebsites.net/api/Projects'
            ).then(response => {
                this.items = response.data.projects;
            }).catch(() => {
                console.warn('Error retrieving projects');
            })
        }
    },
}
</script>