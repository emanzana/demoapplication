<template>
    <div class="active px-2">
        <b-button variant="primary" href="projects/new">New</b-button>
        <b-table head-variant hover :items="items" :fields="fields" :filter="filter" :filterIncludedFields="filterOn"></b-table><br>
        <b-col lg="5" class="my-1">
        <b-form-group
          label="Filter"
          label-cols-sm="1"
          label-size="sm"
          label-for="filterInput">
          <b-input-group size="sm">
            <b-form-input
              v-model="filter"
              type="search"
              id="filterInput"
              placeholder="Type to Search">
            </b-form-input>
            <b-input-group-append>
              <b-button :disabled="!filter" @click="filter = ''">Clear</b-button>
            </b-input-group-append>
          </b-input-group>
        </b-form-group></b-col><b-col lg="12" class="my-1">
        <b-form-group label="Filter by">
          <b-form-checkbox-group v-model="filterOn" class="mt-1">
            <b-form-checkbox value="projectName">Project Name</b-form-checkbox>
            <b-form-checkbox value="caseStudy">Case Study</b-form-checkbox>
            <b-form-checkbox value="technology">Technology</b-form-checkbox>
            <b-form-checkbox value="capexType">CAPEX Type</b-form-checkbox>
            <b-form-checkbox value="country">Country</b-form-checkbox>
            <b-form-checkbox value="nominalPowerMWn">Nominal Power</b-form-checkbox>
            <b-form-checkbox value="sentDate">Sent Date</b-form-checkbox>
            <b-form-checkbox value="user">User</b-form-checkbox>
            <b-form-checkbox value="updateDate">Update Date</b-form-checkbox>
            <b-form-checkbox value="e_CA_ID">E&CA ID</b-form-checkbox>
          </b-form-checkbox-group>
        </b-form-group>
      </b-col>
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
                { key: 'sentDate', sortable: true, label: 'Sent Date'},
                { key: 'user', sortable: true, label: 'User'},
                { key: 'updateDate', sortable: true, label: 'Update Date'},
                { key: 'e_CA_ID', sortable: false, label: 'E&CA ID'}
            ],
        filter: null,
        filterOn: [],
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
                response.data.projects.forEach(element => {
                    var formatSentDate;
                    var formatUpdateDate;
                    if (element.sentDate > "2000-01-01")
                        formatSentDate = new Date(element.sentDate).toISOString().split('T')[0];
                    else
                        formatSentDate = "-";
                    if (element.updateDate > "2000-01-01")
                        formatUpdateDate = new Date(element.updateDate).toISOString().split('T')[0];
                    else
                        formatUpdateDate= "-";
                    var project = {
                        projectName: element.projectName,
                        caseStudy: element.caseStudy,
                        technology: element.technology,
                        capexType: element.capexType,
                        country: element.country,
                        nominalPowerMWn: element.nominalPowerMWn,
                        sentDate: formatSentDate,
                        user: element.user,
                        updateDate: formatUpdateDate,
                        e_CA_ID: element.e_CA_ID
                    };
                    this.items.push(project);
                });
            }).catch(() => {
                console.warn('Error retrieving projects');
            })
        }
    },
}
</script>