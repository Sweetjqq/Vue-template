<template>
  <div class="header" style="min-width:1140px;">
    <el-row :gutter="20" style="color:#000;">
      <el-col :span="6" :offset="14">
        <div class="grid-content bg-purple" style="text-align:  right;line-height:3;color:#32373d;font-weight:700;">您好!&nbsp;<span style="color:#c8161d;">{{username}}</span> [{{departName}}]&nbsp;&nbsp;<span><el-dropdown @command="handleCommand">
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown" id="drop">
          <el-dropdown-item command="loginout">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown></span></div>
      </el-col>
      <el-col :span="3">
        <div class="grid-content bg-purple">
          <div style="height: 20px;color:#2ab2f2"> </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import { mapActions,mapMutations,mapState } from 'vuex'
  export default {
    data() {
      return {
        departName: '',
        token: "",
        Account: "",
        username: '',
        time: ""
      };
    },
    mounted() {
    },
    methods: {
      handleCommand(command) {
        this.$store.dispatch('loginout',command).then(()=>{
          this.$router.push('/')
        })
      }
    }
  };
</script>

<style scoped>
  .header {
    min-width: 1080px;
    box-sizing: border-box;
    width: 100%;
    height: 66px;
    font-size: 14px;
    line-height: 66px;
    background-color: #4778c7;
    box-shadow: 2px 0 3px rgba(0, 0, 0, 0.5);
    z-index: 1000;
    overflow: hidden;
    left: 200px;
  }
  
  .header .logo {
    float: left;
    cursor: pointer;
    font-size: 22px;
  }
  
  .loginOut {
    color: #000;
    width: 200px;
    float: right;
  }
</style>
