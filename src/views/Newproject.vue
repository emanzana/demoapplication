<template>
    <div>
        <b-navbar-nav>
            <b-nav-item href="/Projects">Back</b-nav-item>
        </b-navbar-nav>

        <b-form>
            <b-form-group label-for="proyectId">
                <b-form-input id="projectId" type="text" v-model="projectId"  required placeholder="Disable"></b-form-input>
            </b-form-group>

            <b-form-group label="Project Name:" label-for="projectName">
                <b-form-input id="projectName" type="text" v-model="projectName" required placeholder="Name of new project"></b-form-input>
            </b-form-group>

            <b-form-group label="Case Study:" label-for="caseStudy">
                <b-form-input id="caseStudy" type="text" v-model="caseStudy" required placeholder="Case Study"></b-form-input>
            </b-form-group>
            
            <b-form-group label="Technology:" label-for="technologyId">
                <b-form-select v-model="technologyId" :options="options"></b-form-select>
            </b-form-group>

            <b-form-group label="CAPEX Type:" label-for="capexTypeId">
                <b-form-select v-model="selected" :options="options"></b-form-select>
            </b-form-group>

            <b-form-group label="Country:" label-for="countryId">
                <b-form-select v-model="selected" :options="options"></b-form-select>
            </b-form-group>

            <b-form-group label="Nominal Power (MWn):" label-for="nominalPower">
                <b-form-input id="nominalPower" v-model="nominalPower" type="text" required placeholder="Nominal Power"></b-form-input>
            </b-form-group>

            <b-form-group label="Sent Date:" label-for="sentDate">
                <b-form-datepicker id="sentDate" v-model="sentDate" class="mb-2"></b-form-datepicker>
            </b-form-group>

            <b-form-group label="User:" label-for="userId">
                <b-form-input id="userId" type="text" v-model="userId" placeholder="User"></b-form-input>
            </b-form-group>

            <b-form-group label="Update Date:" label-for="updateDate">
                <b-form-datepicker id="updateDate" v-model="updateDate" class="mb-2"></b-form-datepicker>
            </b-form-group>

            <b-form-group label="E_CA_ID:" label-for="eCaId">
                <b-form-input id="eCaId" type="text" v-model="eCaId" required placeholder="E_CA_ID"></b-form-input>
            </b-form-group>
        </b-form>
    </div>

</template>

<script>
export default {
    name: 'New Project',

    projectId: undefined,
    projectName: undefined,
    caseStudy: undefined,
    technology: undefined,
    capexTypeId: undefined,
    countryId: undefined,
    nominalPower: undefined,
    sentDateç: undefined,
    userId: undefined,
    updateDate: undefined,
    eCaId: undefined,

}
</script>