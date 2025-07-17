<template>
    <div class="register_box">
        <div class="register_box_form">
            <h2 class="register_box_form_title">登录</h2>
            <el-form
                :model="form"
                label-width="100px"
                style="max-width: 100%"
                :rules="rules"
                ref="ruleFormRef"
            >
                <el-form-item label="邮箱" required prop="username">
                    <el-input v-model="form.username" placeholder="请输入用户名"></el-input>
                </el-form-item>
                <el-form-item label="密码" required prop="password">
                    <el-input v-model="form.password" placeholder="请输入密码"></el-input>
                </el-form-item>
                <el-form-item>
                    <div class="register_box_form_action">
                        <div class="register_box_form_action_item" @click="onLogin()">已有账户,立即登录</div>
                    </div>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" style="width: 200px;">立即注册</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script setup>
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();
const form = reactive({
    username: '',
    password: ''
});
const rules = reactive({
  username: [
    { required: true, message: 'Please input username', trigger: 'blur' },
  ],
  password: [
    { required: true, message: 'Please input password', trigger: 'blur' },
  ],
})
const ruleFormRef = ref();

const onLogin = () => {
    router.replace('/login')
}
</script>
<style lang="scss" scoped>
@import url('./index.scss');
</style>