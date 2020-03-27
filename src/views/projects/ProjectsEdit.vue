<template>
    <b-form @submit="saveProject">
        <b-form-group
            id="projectNameGroup"
            label="Project Name:"
            label-for="projectName"
        >
            <b-form-input
            id="projectName"
            v-model="project.projectName"
            type="text"
            required
            placeholder="Enter project name"
            ></b-form-input>
        </b-form-group>

        <b-form-group id="caseStudyGroup" label="Case Study:" label-for="caseStudy">
            <b-form-input
            id="caseStudy"
            v-model="project.caseStudy"
            required
            placeholder="Enter Case Study"
            ></b-form-input>
        </b-form-group>

        <b-form-group id="technologyGroup" label="Technology" label-for="technology">
            <b-form-select
            id="technology"
            v-model="project.technology"
            :options="Technology"
            required
            >
            <b-form-select-option :value="null" autofocus="true">-</b-form-select-option>
            <b-form-select-option :value="PV">PV</b-form-select-option>
            <b-form-select-option :value="WF">WF</b-form-select-option>
            </b-form-select>
        </b-form-group>

        <b-form-group id="capexTypeIdGroup" label="CapexType" label-for="capexTypeId">
            <b-form-select
            id="capexTypeId"
            v-model="project.capexTypeId"
            :options="Technology"
            required
            >
            <b-form-select-option :value="null" selected>-</b-form-select-option>
            <b-form-select-option :value="BRONCE">BRONCE</b-form-select-option>
            <b-form-select-option :value="SILVER">SILVER</b-form-select-option>
            <b-form-select-option :value="GOLD">GOLD</b-form-select-option>
            <b-form-select-option :value="PLATINUM">SILVER</b-form-select-option>
            <b-form-select-option :value="AWARDED">AWARDED</b-form-select-option>
            <b-form-select-option :value="EXECUTED">EXECUTED</b-form-select-option>
            <b-form-select-option :value="NA">N.A.</b-form-select-option>
            </b-form-select>
        </b-form-group>

        <b-form-group id="countryIdGroup" label="Country" label-for="countryId">
            <b-form-select
            id="countryId"
            v-model="project.countryId"
            :options="Country"
            required
            >
            <b-form-select-option :value="null" selected>-</b-form-select-option>
            <b-form-select-option :value="ES">SPAIN</b-form-select-option>
            <b-form-select-option :value="AT">AUSTRIA</b-form-select-option>
            <b-form-select-option :value="BS">BAHAMAS</b-form-select-option>
            <b-form-select-option :value="CV">CAVO VERDE</b-form-select-option>
            <b-form-select-option :value="CN">CHINA</b-form-select-option>
            <b-form-select-option :value="FR">FRANCE</b-form-select-option>
            <b-form-select-option :value="DE">GERMANY</b-form-select-option>
            </b-form-select>
        </b-form-group>

        <b-form-group id="nominalPowerMWnGroup" label="Nominal Power (MWn):" label-for="nominalPowerMWn">
            <b-form-input
            id="nominalPowerMWn"
            v-model="project.nominalPowerMWn"
            required
            placeholder="Enter Nominal Power MWn"
            ></b-form-input>
        </b-form-group>

        <b-form-group id="sentDateGroup" label="SENT Date" label-for="sentDate">
             <b-form-datepicker id="sentDate" v-model="sentDate" class="mb-2"></b-form-datepicker>
        </b-form-group>

        <b-form-group id="userGroup" label="User:" label-for="user">
            <b-form-input
            id="user"
            v-model="project.user"
            required
            placeholder="Enter User"
            ></b-form-input>
        </b-form-group>

        <b-form-group id="updateDateGroup" label="Update Date" label-for="updateDate">
             <b-form-datepicker id="updateDate" v-model="updateDate" class="mb-2"></b-form-datepicker>
        </b-form-group>

        <b-form-group id="eCaIdGroup" label="E&CA ID:" label-for="eCaId">
            <b-form-input
            id="user"
            v-model="project.eCaId"
            required
            placeholder="Enter E&CA ID"
            ></b-form-input>
        </b-form-group>

        <b-button type="button" variant="light" href="/projects">Cancel</b-button>
        <b-button type="button" variant="primary">Save</b-button>
    </b-form>
</template>

<script>
import service from '@/service';

export default {
    name: 'ProjectsEdit',

    data: () => ({
        project: {},
    }),

    // Variable que registra si cambia el valor a new y devuelve ese valor
    // para que se evaluen en las demás funciones, por ejemplo la de created()
    computed: {
        new() {
            const { id } = this.$route.params;
            return id && id === 'new';
        }
    },

    // Si no es un registro nuevo se carga ese proyecto
    created() {
        if (!this.new) {
            this.loadProject();
        }
    },

    // Utilizaremos un objeto de tipo 'promise'
    // Una promesa es un objeto que puede producir un valor único en algún momento en el futuro:
    // un valor resuelto o una razón por la que no se resuelve (por ejemplo, se produjo un error de red).
    // Una promesa puede estar en uno de los 3 estados posibles: cumplida, rechazada o pendiente.
    // Para usar una promise necesitas poner .then y .catch (Como TRY and CATCH)
    methods: {
        // Carga un proyecto según la id que recibe
        loadProject() {
            const { id } = this.$route.params;

            service.get('url', { id }).then(response => {
                this.project = response.project;
            }).catch(() => {
                console.warn('Error retrieving project with id '+ id);
            })
        },
        // Guarda un proyecto
        saveProject() {
            const method = this.new? 'post' : 'put';

            service[method]('url', this.project).then(response => {
                if (this.new) {
                    this.$router.push('/projects/'+ response.id);
                }
            }).catch(() => {
                console.warn('Error saving project');
            })
        },
        // Borra un proyecto
        deleteProject() {
            service.delete('url').then(() => {
                this.$router.push('/projects');
            }).catch(() => {
                console.warn('Error deleting project');
            })
        }
    }
}
</script>
