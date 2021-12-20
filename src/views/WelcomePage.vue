<template>
  <div class="welcome-page">
    <div class="head">
      <img
        class="master-logo"
        alt="Master Logo"
        src="../assets/images/master_logo.png"
      />
      <img
        class="page-ballons"
        alt="welcome page ballons"
        src="../assets/images/welcome_page_balloons.png"
      />
    </div>
    <div class="login-button">
      <button @click="onClickLogin()">Login</button>
    </div>
    <div class="footer">
      <p>Powered By</p>
      <p>Company name</p>
    </div>
  </div>
</template>


<script>
// import router from '../router/index'

export default {
  name: "WelcomePage",
  methods: {
    onClickLogin() {
      this.$router.push('login')
    }
  }
};
</script>


<style scoped lang="scss">
@import "../styles/common.scss";
.head {
  display: flex;
  justify-content: space-between;
  .master-logo {
    padding: 30px 0px 30px 30px;
    width: 25%;
    height: 30%;
    position: relative;
    margin-left: 20px;
    top: 100px;
    @include mobile {
      width: 33%;
      padding: 25px 0px 25px 25px;
    }
  }
  .page-ballons {
    width: 24%;
    @include mobile() {
      width: 55%;
    }
  }
}

.login-button {
  display: flex;
  justify-content: center;
  @include mobile {
    margin-top: 30px;
  }
  button {
    font-size: 25px;
    padding: 10px 30px;
    color: white;
    background: rgb(82, 82, 196);
    border: none;
    border-radius: 11px;
    width: 30%;
    @include mobile {
      width: 95%;
    }
  }
}

.footer {
  text-align: center;
  margin-top: 30px;
  padding: 30px 0px;
  p {
    color: #606D79;
  }
  @include mobile {
    width: 100%;
    position: fixed;
    left: 0px;
    bottom: 0px;
  }
}
</style>