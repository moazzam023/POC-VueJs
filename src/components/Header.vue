<template>
  <div class="header">
    <a @click="onClickBack()" href="#" class="previous round">&#8249;</a>
    <img
      class="header-logo"
      alt="header-logo"
      src="../assets/images/header-logo.png"
    />
  </div>
</template>

<script>
export default {
  name: "Header",
  methods: {
    onClickBack() {
        this.$router.go(-1)
    },
  },
  mounted() {
    document.addEventListener("backbutton", this.yourCallBackFunction, false);
  },
  beforeDestroy() {
    document.removeEventListener("backbutton", this.yourCallBackFunction);
  },
};
</script>

<style lang="scss" scoped>
.header {
  background-color: #36c2ef;
  padding: 0px 20px;
  display: flex;
  justify-content: space-between;

  a {
    background-color: #53cbf3;
    border-radius: 50%;
    text-decoration: none;
    display: flex;
    align-self: center;
    padding: 8px 16px;
  }
}
</style>