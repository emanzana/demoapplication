<template>
  <b-navbar toggleable="lg" type="dark" variant="dark" >
    <b-navbar-brand href="/">Acciona</b-navbar-brand>
 
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
 
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="/projects">Projects</b-nav-item>
        <b-nav-item href="/countries">Countries</b-nav-item>
        <b-nav-item href="/capextypes">Capextypes</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>
 
<script>
export default {
    name: 'AppHeader'
}
</script>
<style scoped>
 .navbar.navbar-dark.bg-dark{
    background-color: #ff0000!important;
 }
</style>