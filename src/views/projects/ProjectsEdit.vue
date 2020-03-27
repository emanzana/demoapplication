<template>
  <form @submit="sendData">
    <b-form-group id="projectNameGroup" label="Project Name:" label-for="projectName">
      <b-form-input
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
      <b-form-select id="technology" v-model="project.technology" :options="Technology" required>
        <b-form-select-option :value="null" autofocus="true">-</b-form-select-option>
        <b-form-select-option :value="PV">PV</b-form-select-option>
        <b-form-select-option :value="WF">WF</b-form-select-option>
      </b-form-select>
    </b-form-group>

    <b-form-group id="capexTypeIdGroup" label="CapexType" label-for="capexTypeId">
      <b-form-select id="capexTypeId" v-model="project.capexTypeId" :options="Technology" required>
        <b-form-select-option :value="null" selected>-</b-form-select-option>
        <b-form-select-option :value="1">BRONCE</b-form-select-option>
        <b-form-select-option :value="2">SILVER</b-form-select-option>
        <b-form-select-option :value="3">GOLD</b-form-select-option>
        <b-form-select-option :value="4">SILVER</b-form-select-option>
        <b-form-select-option :value="5">AWARDED</b-form-select-option>
        <b-form-select-option :value="6">EXECUTED</b-form-select-option>
        <b-form-select-option :value="7">N.A.</b-form-select-option>
      </b-form-select>
    </b-form-group>

    <b-form-group id="countryIdGroup" label="Country" label-for="countryId">
      <b-form-select id="countryId" v-model="project.countryId" :options="Country">
        <b-form-select-option :value="null" selected>-</b-form-select-option>
        <b-form-select-option :value="1">SPAIN</b-form-select-option>
        <b-form-select-option :value="2">AUSTRIA</b-form-select-option>
        <b-form-select-option :value="3">BAHAMAS</b-form-select-option>
        <b-form-select-option :value="4">CAVO VERDE</b-form-select-option>
        <b-form-select-option :value="5">CHINA</b-form-select-option>
        <b-form-select-option :value="6">FRANCE</b-form-select-option>
        <b-form-select-option :value="7">GERMANY</b-form-select-option>
      </b-form-select>
    </b-form-group>

    <b-form-group
      id="nominalPowerMWnGroup"
      label="Nominal Power (MWn):"
      label-for="nominalPowerMWn"
    >
      <b-form-input
        id="nominalPowerMWn"
        v-model="project.nominalPowerMWn"
        required
        placeholder="Enter Nominal Power MWn"
        type="number"
      ></b-form-input>
    </b-form-group>

    <b-form-group id="sentDateGroup" label="SENT Date" label-for="sentDate">
      <b-form-datepicker id="sentDate" v-model="project.sentDate" class="mb-2"></b-form-datepicker>
    </b-form-group>

    <b-form-group id="userGroup" label="User:" label-for="user">
      <b-form-input id="user" v-model="project.user" required placeholder="Enter User"></b-form-input>
    </b-form-group>

    <b-form-group id="updateDateGroup" label="Update Date" label-for="updateDate">
      <b-form-datepicker id="updateDate" v-model="project.updateDate" class="mb-2"></b-form-datepicker>
    </b-form-group>

    <b-form-group id="eCaIdGroup" label="E&CA ID:" label-for="eCaId">
      <b-form-input id="user" v-model="project.e_CA_ID" required placeholder="Enter E&CA ID"></b-form-input>
    </b-form-group>

    <b-button type="button" variant="light" href="/projects">Cancel</b-button>
    <b-button type="button" v-on:click="sendData()" variant="primary">Save</b-button>
  </form>
</template>

<script>
import axios from "axios";

export default {
  name: "ProjectsNew",

  data: () => ({
    project: {
      projectName: "",
      caseStudy: "2",
      technology: "PV",
      capexTypeId: 1,
      countryId: 1,
      nominalPowerMWn: 0,
      sentDate: "2020-03-27T09:43:13.176Z",
      user: "pepe",
      updateDate: "2020-03-27T09:43:13.176Z",
      e_CA_ID: "pdfe"
    },

    urlCreate:"https://cors-anywhere.herokuapp.com/https://testacciona.azurewebsites.net/api/Projects"
  }),

  // Utilizaremos un objeto de tipo 'promise'
  // Una promesa es un objeto que puede producir un valor único en algún momento en el futuro:
  // un valor resuelto o una razón por la que no se resuelve (por ejemplo, se produjo un error de red).
  // Una promesa puede estar en uno de los 3 estados posibles: cumplida, rechazada o pendiente.
  // Para usar una promise necesitas poner .then y .catch (Como TRY and CATCH)
  methods: {
    // Guarda un proyecto

    sendData() {
      axios({
        method: "POST",
        url: this.urlCreate,
        data: this.project,
        headers: { "Content-Type": "application/json-patch+json" }
      }).then(
        result => {
          this.response = result.data;
        },
        error => {
          console.error(error);
        }
      );
    }
  }
};
</script>
