<template>
  <div class="container">
    <div class="row justify-content-md-center">
      <div class="col-12 col-md-auto">
        <form>
          <center><h6>Registro de Usuario</h6></center>
          <div class="form-group">
            <input type="email" v-model="email" class="form-control" id="email" placeholder="Correo electronico">
          </div>
          <div class="form-group">
            <input type="password" v-model="password" class="form-control" id="password" placeholder="Contraseña">
          </div>
          <div class="form-group">
            <button class="btn btn-success" @click="register">Registrar</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  import AutheticationService from '@/services/AuthenticationService';

  export default {
    data() {
      return {
        email: '',
        password: '',
      };
    },
    methods: {
      async register() {
        const response = await AutheticationService.register({
          email: this.email,
          password: this.password,
        });
      },
    },
  };

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
