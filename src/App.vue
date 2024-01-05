<template>
  <nav class="navbar navbar-light navbar-expand-sm">
    <div class="container">
      <span class="navbar-brand h1 text-white" href="#">
        <img class="d-inline-block align-top" src="../src/assets/logo.png" width="30px" height="30px" />KMBANK
      </span>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav">
          <li class="navbar-item mx-2" v-for="route in routes" :key="route.id">
            <router-link :class="linkActive(route.path.name)" :to="route.path">{{ route.title }}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <router-view/>
</template>

<script>
export default {
  data() {
    return {
      routes: [
        { id: 1, path: { name: 'home' }, title: 'Home' },
        { id: 2, path: { name: 'statistics' }, title: 'Statistics' },
        { id: 4, path: { name: 'register' }, title: 'Signup' },
        { id: 5, path: { name: 'login' }, title: 'Login' },
        { id: 6, path: { name: 'dashboard' }, title: 'Dashboard' },
      ],
      linkClasses: 'btn',
      activeLink: ['btn-outline-light','active'],
      inactiveLink: 'text-light',
    };
  },
  methods: {
    linkActive(name) {
      if (this.$route.name == name) {
        return [this.linkClasses, ...this.activeLink];
      }
      return [this.linkClasses,this.inactiveLink];
    },
  },
}
</script>

<style>
  body {
    padding: 0;
    margin: 0;
    min-height: 100vh;
    background-image: linear-gradient(
        to bottom,
        rgb(255 255 0 / 0%),
        rgb(0 0 0 / 40%)
      ), url("../src/assets/hao-wang-pVq6YhmDPtk-unsplash.jpg");
    scrollbar-width: none;
  }
  input {
    background: linear-gradient(to right, #fff, #9f9);
  }
  label {
    font-weight: bold;
  }
  body::-webkit-scrollbar {
    width: 12px;
  }

  body::-webkit-scrollbar-thumb {
    background-color: #6c757d; /* Bootstrap's secondary color */
    border-radius: 10px;
  }

  body::-webkit-scrollbar-track {
    background-color: #f8f9fa; /* Bootstrap's light color */
    border-radius: 10px;
  }
</style>