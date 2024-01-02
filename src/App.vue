<template>
  <nav class="navbar navbar-expand-lg bg-dark text-white">
    <div class="container">
      <h3 class="col-3">KMBANK</h3>
      <ul class="navbar-nav col-8">
        <li class="navbar-item mx-2" v-for="route in routes" :key="route.id">
          <router-link class="btn btn-outline-danger" :to="route.path">{{ route.title }}</router-link>
        </li>
      </ul>
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
        { id: 2, path: { name: 'about' }, title: 'About' },
        { id: 3, path: { name: 'contact' }, title: 'Contact' },
        { id: 4, path: { name: 'register' }, title: 'Register' },
        { id: 5, path: { name: 'login' }, title: 'Login' },
      ],
    };
  },
}
</script>

<style>
  body {
    padding: 0;
    margin: 0;
    min-height: 100vh;
    background: linear-gradient(#fff, #89f);
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