<template>
  <div id="loading" class="loading">
    <div style="text-align: center">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <h2>{{loaddingMsg}}</h2>
    </div>

  </div>
</template>
<script>
  export default {
    components:{},
    props:['loaddingMsg'],
    data(){
      return{

      }
    },
    methods: {

    }
  }
</script>

<style scoped>
  #loading{
    width: 100%;
    height: 100%;
    position: fixed;
    top:0;
    left: 0;
    background: rgba(0,0,0,0.6);
    z-index: 10000000000000000000000000000000000000000000000000;
    display: -webkit-box;  /* 老版本语法: Safari, iOS, Android browser, older WebKit browsers. */
    display: -moz-box;     /* 老版本语法: Firefox (buggy) */
    display: -ms-flexbox;  /* 混合版本语法: IE 10 */
    display: -webkit-flex; /* 新版本语法: Chrome 21+ */
    display: flex;         /* 新版本语法: Opera 12.1, Firefox 22+ */
    justify-content: center;
    -webkit-justify-content: center;
    align-items: center;
    -webkit-align-items: center;
  }
  .loading h2{
    color: #409eff;
    margin-top:15px;
    font-size: 14px;
    font-family: "Microsoft YaHei";
  }
  .loading span {
    display: inline-block;
    vertical-align: middle;
    width: .6em;
    height: .6em;
    margin: .19em;
    background: #007DB6;
    border-radius: .6em;
    -webkit-animation: loading 1s infinite alternate;
    animation: loading 1s infinite alternate;
  }
  .loading span:nth-of-type(2) {
    background: #008FB2;
    -webkit-animation-delay: 0.2s;
    animation-delay: 0.2s;
  }
  .loading span:nth-of-type(3) {
    background: #009B9E;
    -webkit-animation-delay: 0.4s;
    animation-delay: 0.4s;
  }
  .loading span:nth-of-type(4) {
    background: #00A77D;
    -webkit-animation-delay: 0.6s;
    animation-delay: 0.6s;
  }
  .loading span:nth-of-type(5) {
    background: #00B247;
    -webkit-animation-delay: 0.8s;
    animation-delay: 0.8s;
  }
  .loading span:nth-of-type(6) {
    background: #5AB027;
    -webkit-animation-delay: 1.0s;
    animation-delay: 1.0s;
  }
  .loading span:nth-of-type(7) {
    background: #A0B61E;
    -webkit-animation-delay: 1.2s;
    animation-delay: 1.2s;
  }
  @-webkit-keyframes loading {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes loading {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
</style>
