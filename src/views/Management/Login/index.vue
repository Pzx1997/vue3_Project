<template>
  <div class="container">
    <div class="topNav">
      <div class="nav" @click="handleClickAbout">关于我</div>
    </div>

    <el-form
      ref="ruleFormss"
      :model="ruleForm"
      status-icon
      :rules="rules"
      class="formBox"
    >
      <el-form-item prop="userName">
        <el-input
          v-model="ruleForm.userName"
          placeholder="用户名"
          prefix-icon="el-icon-user"
        />
      </el-form-item>

      <el-form-item prop="password">
        <el-input
          v-model="ruleForm.password"
          type="password"
          placeholder="密码"
          prefix-icon="el-icon-lock"
        />
      </el-form-item>

      <div class="helpBox">
        <el-button type="text" class="registerBtn">
          没有账号? 去注册
        </el-button>
        <el-button type="text" class="forgetPwdBtn">忘记密码?</el-button>
      </div>

      <el-form-item class="formItemBox">
        <el-button class="loginBtn" size="medium" @click="submitForm">
          登录
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, unref } from "vue";
import { useRouter } from "vue-router";
import { ElMessage } from "element-plus";

export default defineComponent({
  setup() {
    const ruleFormss = ref();
    const router = useRouter();

    // 定义变量
    const ruleForm = reactive({
      userName: "admin",
      password: "admin",
    });

    const rules = {
      userName: [
        {
          required: true,
          message: "请输入用户名",
          trigger: "change",
        },
      ],
      password: [
        {
          required: true,
          message: "请输入密码",
          trigger: "change",
        },
      ],
    };

    // 提交表单
    const submitForm = async () => {
      const refs = unref(ruleFormss);
      if (!refs) return;
      await refs.validate();
      const { userName, password } = ruleForm;
      console.log(userName, password);
      if (userName === "admin" && password === "admin") {
        router.replace("/welcome");
      } else {
        ElMessage({
          showClose: true,
          message: "用户名或密码不正确！",
          type: "error",
        });
      }
    };

    // 返回个人中心页
    const handleClickAbout = () => {
      router.push("/home");
    };

    return {
      ruleForm,
      rules,
      submitForm,
      ruleFormss,
      handleClickAbout,
    };
  },
});
</script>

<style lang="less" scoped>
.container {
  height: 100vh;
  background: url("/src/assets/bg2.jpg");
  position: relative;

  .topNav {
    display: flex;
    justify-content: flex-end;
    padding: 20px;

    .nav {
      width: 140px;
      color: #ccc;
      font-weight: bold;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 20px;
      box-sizing: border-box;
      font-size: 14px;

      &:hover {
        background-color: transparent;
        border: 1px solid black;
        border-radius: 30px;
        color: white;
        cursor: pointer;
      }
    }
  }

  .formBox {
    width: 600px;
    padding: 100px 140px;
    box-sizing: border-box;
    background-color: rgba(0, 0, 0, 0.411);
    border-radius: 50px;
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translateX(-50%);

    .formItemBox {
      margin-top: 20px;
    }

    .loginBtn {
      width: 100%;
      background-color: #e2805b;
      color: white;
      border: none;

      &:hover {
        background-color: #ff9974;
      }
    }

    .helpBox {
      display: flex;
      justify-content: space-between;

      .registerBtn,
      .forgetPwdBtn {
        color: #e2805b;

        &:hover {
          color: #ff9974;
        }
      }
    }
  }
}
</style>