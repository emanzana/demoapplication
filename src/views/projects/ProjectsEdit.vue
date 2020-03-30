<template>
<div class="active px-2">
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

    <!-- </b-form-group>

       <b-form-group  id="capexTypeIdGroup" label="CapexType" label-for="capexTypeId">
        <b-form-select id="capexTypeId" v-model="items" :options="CapexTypes" required>
        <b-form-select-option :value="null" autofocus="true">-</b-form-select-option>
        <b-form-select-option v-for="item in items" v-bind:key="item.id" :value="item.id">{{item.capexTypeName}}</b-form-select-option>
        
     <b-form-select
          v-for="item in items"
          v-bind:key="item.id"
          :value="item.capexTypeName"
        >{{item}}</b-form-select>
        <b-form-select-option :value="item.id">{{item.capexTypeName}}</b-form-select-option >

    </b-form-group>-->
    <b-form-group id="CapexTyes" label="CapexType" label-for="capexTypeName">
      <select v-model="capexType" class="form-control">
        <option disabled value selected="selected">Please select one</option>
        <option
          v-for="capexType in capexTypes"
          :key="capexType.id"
          v-bind:value="capexType.id"
        >{{capexType.capexTypeName}}</option>
      </select>
    </b-form-group>

    <!-- <div v-for="item in capexTypes" v-bind:key="item.id">{{item.capexTypeName}}</div>
    {{this.capexTypes}}-->
    
   <b-form-group id="Countries" label="Countries" label-for="countryName">
      <select v-model="items" class="form-control">
        <option disabled value selected="selected">Please select one</option>
        <option
          v-for="country in countries"
          :key="country.id"
          v-bind:value="country.id"
        >{{country.countryName}}</option>
      </select>
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
  </div>
</template>

<script>
import axios from "axios";
import service from "@/service";

export default {
  name: "ProjectsNew",

  created() {
    this.cargarCapex();
    this.cargarCountries();
  },

  data: () => ({
    capexTypes: [
      {
        capexTypes: {
          capexTypeName: ""
        }
      }
    ],
    countries: [
      {
        countries: {
          countryName: "",
          countryCode: ""
        }
      }
    ],
    Technology: {},

    project: {
      projectName: "",
      caseStudy: "0",
      technology: "PV",
      capexTypeId: 1,
      countryId: 1,
      nominalPowerMWn: 0,
      sentDate: "",
      user: "",
      updateDate: "",
      e_CA_ID: "PDTE"
    },

    urlCreate:
      "https://cors-anywhere.herokuapp.com/https://testacciona.azurewebsites.net/api/Projects"
  }),

  // Utilizaremos un objeto de tipo 'promise'
  // Una promesa es un objeto que puede producir un valor único en algún momento en el futuro:
  // un valor resuelto o una razón por la que no se resuelve (por ejemplo, se produjo un error de red).
  // Una promesa puede estar en uno de los 3 estados posibles: cumplida, rechazada o pendiente.
  // Para usar una promise necesitas poner .then y .catch (Como TRY and CATCH)
  methods: {
    cargarCapex() {
      service
        .get(
          "https://cors-anywhere.herokuapp.com/https://testacciona.azurewebsites.net/api/CapexTypes"
        )
        .then(response => {
          this.capexTypes = response.data.capexTypes;
          console.log(this.capexTypes);
        })
        .catch(() => {
          console.warn("Error retrieving projects");
        });
    },
    cargarCountries() {
      service
        .get(
          "https://cors-anywhere.herokuapp.com/https://testacciona.azurewebsites.net/api/Countries"
        )
        .then(response => {
          this.countries = response.data.countries;
          console.log(this.countries);
        })
        .catch(() => {
          console.warn("Error retrieving projects");
        });
    },
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
