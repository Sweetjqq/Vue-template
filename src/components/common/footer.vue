<template>
  <div class="footer">
    <span>System By YZAMC</span>
  </div>
</template>

<script>
  export default {
    data() {
      return {

      }
    },
    methods:{

    }
  }
</script>
<style scoped>
  .footer {
    position: fixed;
    bottom: 0;
    left: 200px;
    box-sizing: border-box;
    width: 100%;
    height:66px;
    line-height: 66px;
    background-color:#f0f3f4;
    box-shadow:2px 0 3px rgba(0,0,0,.5);
    z-index:1000;
    padding:0 32px 0 40px;
    overflow:hidden;
    text-align: center;
    font-size: 16px;
  }
  .footer span{
    font-size: 14px;
    display: inline-block;
    margin-left: -200px;
    color: #666;
    font-family:  "Microsoft YaHei";
  }
</style>
