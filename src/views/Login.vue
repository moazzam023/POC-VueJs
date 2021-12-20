<template>
  <section class="login-section">
    <Header />
    <div class="login">
      <div class="login-header">
        <p>Login</p>
      </div>
      <div class="login-input">
        <input
          class="input-box width-25-per"
          v-model="emailOrPhone"
          placeholder="Email / Phone Number"
        />
        <button class="otp-button btn">GET OTP</button>
      </div>
      <div class="login-buttons">
        <button class="sign-up btn width-25-per">Sign-up</button>
        <button class="to-host btn width-25-per">To Host</button>
      </div>
    </div>
  </section>
</template>

<script>
import Header from "../components/Header.vue";

export default {
  name: "Login",
  components: {
    Header,
  },
  data() {
    return {
      emailOrPhone: "",
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/common.scss";
.login {
  text-align: center;
  .login-header {
    background-color: #1e62a4;
    padding: 10px 25px;
    h3 {
      font-weight: bold;
      font-size: 20px;
      line-height: 14px;
    }
  }

  .login-input {
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .input-box {
      background: #ffffff;
      border: 1px solid #1e62a4;
      box-sizing: border-box;
      border-radius: 10px;
      color: #1e62a4;
      padding: 15px;
      color: #1e62a4;
    }
    .otp-button {
      margin-top: 20px;
    }
  }

  .login-buttons {
    flex-direction: column;
    display: flex;
    margin-top: 150px;
    align-items: center;
    .sign-up {
      margin-bottom: 20px;
    }
    .todo-button {
    }
  }

  .btn {
    padding: 10px 25px;
    background: linear-gradient(
      90deg,
      rgba(30, 98, 164, 0.522) 0%,
      rgba(31, 96, 161, 0.9) 0%,
      rgba(54, 194, 239, 0.9) 53.68%,
      rgba(30, 98, 164, 0.9) 100%
    );
    background-blend-mode: darken;
    border: 1px solid #1e62a4;
    border-radius: 10px;
  }

  .width-25-per {
    width: 25%;
    @include mobile {
      width: 95%;
    }
  }
}
</style>