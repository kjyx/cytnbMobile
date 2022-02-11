<template>
<div>
  <h3>联系我们</h3>
  <div class="message-form-box">
    <div class="wp">
      <form role="form" id="form-box" name="form1">
        <div class="form-group input-box">
          <label for="name">联系人员:</label>
          <input type="text" class="form-control" name="userName" v-model="userForm.msgName">
        </div>
        <div class="form-group input-box">
          <label for="name">电子邮箱:</label>
          <input type="text" class="form-control" name="userEmail" v-model="userForm.msgPhone">
        </div>
        <div class="form-group input-box">
          <label for="name">联系电话:</label>
          <input type="text" class="form-control" name="userPhone" v-model="userForm.msgContext">
        </div>
        <div class="form-group input-box">
          <label for="name">业务类型:</label>
          <input type="text" class="form-control" name="userType" v-model="userForm.msgStatus">
        </div>
        <div class="form-group">
          <label for="name" style="float: left;">留言内容:</label>
          <textarea name="userMes"></textarea>
        </div>
        <input type="button" value="提交内容" id="form-submit" @click="getinfo()"/>
      </form>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "messageme",
  data() {
    return{
      userForm:{
        msgName: "",
        msgPhone:"",
        msgContext: "",
        msgCreateDate: new Date(),
        msgStatus: ""
      }
    }
  }
}
</script>

<style scoped lang="less">
h3 {
  font-size: 40px;
  text-align: center;
  margin-bottom: 30px;
}
#form-box {
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  label {
    margin-left: 20px;
    margin-right: 20px;
  }
  #form-submit {
    width: 150px;
    margin: 0 auto;
  }
}
</style>