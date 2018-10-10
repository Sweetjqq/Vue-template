<template>
  <div class="tac">
    <div style="height:66px;">
      <img src="../../assets/login/logo.png" alt="">
    </div>
    <el-row style="
    width: 200px;background-color:#32373d;
">
      <!-- <el-menu default-active="2" class="el-menu-vertical-demo"
        background-color="#32373d" text-color="627587">
        <el-submenu index="11" v-if="auth11">
          <template slot="title">
            <span>我的空间</span>
          </template>
          <el-submenu index="111" v-if="auth111">
            <template slot="title">
              <img style="padding-right:6px;" src="../../assets/login/lodo.png" alt="">信用债空间</template>
            <router-link to="StrategyList">
              <el-menu-item index="1112" v-if="auth1112">我的策略</el-menu-item>
            </router-link>
          </el-submenu>
        </el-submenu>
        <el-submenu index="21" v-if="auth21">
          <template slot="title">策略管理</template>
          <router-link to="allStrategyList">
            <el-menu-item index="211">信用债策略</el-menu-item>
          </router-link>
        </el-submenu>
        <el-submenu index="31" v-if="auth31">
          <template slot="title">权限分配</template>
          <router-link to="account">
            <el-menu-item index="311" v-if="auth311">用户管理</el-menu-item>
          </router-link>
          <router-link to="role">
            <el-menu-item index="312" v-if="auth312">角色管理</el-menu-item>
          </router-link>
        </el-submenu>
        <el-submenu index="41" v-if="auth41">
          <template slot="title">会员管理</template>
          <router-link to="Salesmanagement">
            <el-menu-item index="411" v-if="auth411">销售管理</el-menu-item>
          </router-link>
          <router-link to="Membermanagement">
            <el-menu-item index="412" v-if="auth412">会员管理</el-menu-item>
          </router-link>
        </el-submenu>
        <el-submenu index="51" v-if="auth51">
          <template slot="title">素材管理</template>
          <router-link to="SoundManagement">
            <el-menu-item index="511" v-if="auth511">语音管理</el-menu-item>
          </router-link>
          <router-link to="ImageManagement">
            <el-menu-item index="512" v-if="auth512">图片管理</el-menu-item>
          </router-link>
        </el-submenu>
        <el-submenu index="61" v-if="auth61">
          <template slot="title">售后管理</template>
          <router-link to="ProductConfig">
            <el-menu-item index="611" v-if="auth611">产品配置</el-menu-item>
          </router-link>
          <router-link to="ChartList">
            <el-menu-item index="612" v-if="auth612">图文列表</el-menu-item>
          </router-link>
        </el-submenu>
      </el-menu> -->

    <el-menu :default-active="activeMenu" class="g-side" router >
      <template v-for="(route, index) in menus">
        <template v-if="route.children">
          <el-submenu :key="index" :index="route.name">
            <template slot="title">
              {{route.meta.name || route.name}}</template>
            <el-menu-item v-for="(cRoute, cIndex) in route.children" :key="cIndex" :index="cRoute.name" :route="cRoute"><i class="ion menuIcon" v-html="cRoute.meta.icon"></i>{{cRoute.meta.name || cRoute.name}}</el-menu-item>
          </el-submenu>
        </template>
        <template v-else>
          <el-menu-item :route="route" :index="route.name" :key="'nav'+index">{{route.meta.name || route.name}}</el-menu-item>
        </template>
      </template>
    </el-menu>


    </el-row>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        menus: []
        // auth: [],
        // arr:[],
        // auth11: false,
        // auth111: false,
        // auth1112: false,
        // auth21: false,
        // auth31: false,
        // auth311: false,
        // auth312: false,
        // auth41: false,
        // auth411: false,
        // auth412: false,
        // auth51: false,
        // auth511: false,
        // auth512: false,
        // auth61: false,
        // auth611: false,
        // auth612: false
      };
    },
    computed:{
      activeMenu: function(){
        return this.$route.name
      },
    }
  }
</script>
<style scoped>
  .el-submenu__title:focus,
  .el-submenu__title:hover,
  .el-submenu__title,
  .el-submenu,
  .el-menu,
  .el-menu-item:hover,
  .el-submenu__title:hover,
  .el-menu-item-group,
  .is-opened,
  .el-menu-item {
    background-color: #32373d;
  }

  .tac {
    display: block;
    position: absolute;
    width: 200px;
    left: 0;
    top: 0px;
    bottom: 0;
    color: #697a8e;
    font-weight: 700;
  }

  .el-menu {
    border: 0px;
  }

  .sidebar>ul {
    height: 100%;
  }

  .el-menu-item,
  .el-submenu__title {
    font-size: 14px;
  }

  .material-icons {
    font-size: 12px;
  }

</style>
