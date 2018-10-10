<template>
 <el-form v-model="ruleForm" status-icon   label-width="100px" class="demo-ruleForm">
  <el-form-item label="密码" prop="pass">
    <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item label="确认密码" prop="checkPass">
    <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item label="年龄" prop="age">
    <el-input v-model.number="ruleForm.age"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
  </el-form-item>
</el-form>
</template>
<script>
 import { mapActions,mapMutations,mapState } from 'vuex'
  export default {
    data() {
      return {
        ruleForm: {
          pass: '',
          checkPass: '',
          age: ''
        }
      };
    },
    methods: { 
      ...mapActions({
        login: 'login'
      }),
      submitForm() {
          if (true) {
            this.$store.dispatch('login',{...this.ruleForm}).then(()=>{
              this.$router.push('/page')
            })
          } else {
            console.log('请正确输入')
          }
      }
    }
  }
</script>