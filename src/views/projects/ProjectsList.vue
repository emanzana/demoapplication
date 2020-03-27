<template>
    <div>
        <b-button variant="primary" href="projects/new">New</b-button>
        <b-table head-variant hover :items="items" :fields="fields"></b-table>
        <pre>{{ this.items | json }}</pre>
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
        items: 
            [
                //{ projectId: '1', projectName: 'Proyecto A', caseStudy: '1', tecnology: 'PV', capexTypeId: 'BRONCE', countryId: 'Spain', nominalPower: '50,00', sentDate: '02/03/2020', user: 'user 1', updateDate: '26/03/2020', eCaId: 'PVES_Pr..'},
                //{ projectId: '2', projectName: 'Proyecto B', caseStudy: '2', tecnology: 'WF', capexTypeId: 'SILVER', countryId: 'Spain', nominalPower: '50,00', sentDate: '02/03/2020', user: 'user 2', updateDate: '26/03/2020', eCaId: 'PVES_Pr..'},
                //{ projectId: '3', projectName: 'Proyecto C', caseStudy: '3', tecnology: 'PV', capexTypeId: 'GOLD', countryId: 'Spain', nominalPower: '50,00', sentDate: '02/03/2020', user: 'user 3', updateDate: '26/03/2020', eCaId: 'PVES_Pr..'},
                //{ projectId: '4', projectName: 'Proyecto D', caseStudy: '4', tecnology: 'WF', capexTypeId: 'PLATINUM', countryId: 'Spain', nominalPower: '50,00', sentDate: '02/03/2020', user: 'user 4', updateDate: '26/03/2020', eCaId: 'PVES_Pr..'},
                //{ projectId: '5', projectName: 'Proyecto E', caseStudy: '5', tecnology: 'PV', capexTypeId: 'AWARED', countryId: 'Spain', nominalPower: '50,00', sentDate: '02/03/2020', user: 'user 5', updateDate: '26/03/2020', eCaId: 'PVES_Pr..'},
                //{ projectId: '6', projectName: 'Proyecto F', caseStudy: '6', tecnology: 'WF', capexTypeId: 'EXECUTED', countryId: 'Spain', nominalPower: '50,00', sentDate: '02/03/2020', user: 'user 6', updateDate: '26/03/2020', eCaId: 'PVES_Pr..'},
                //{ projectId: '7', projectName: 'Proyecto G', caseStudy: '7', tecnology: 'WF', capexTypeId: 'N.A', countryId: 'Spain', nominalPower: '50,00', sentDate: '02/03/2020', user: 'user 7', updateDate: '26/03/2020', eCaId: 'PVES_Pr..'}
            ],

    }),

    created() {
        // Llama a la función que carga la lista de proyectos
        this.loadProjects();
    },

    methods: {
        // Cargar proyectos
        loadProjects2() {
            service.get('https://testacciona.azurewebsites.net/api/Projects').then(response => {
                this.items = response.projects;
            }).catch(() => {
                console.warn('Error retrieving projects');
            })
        },

            loadProjects() {
            service.get('https://cors-anywhere.herokuapp.com/https://testacciona.azurewebsites.net/api/Projects'
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