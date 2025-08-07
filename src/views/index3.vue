<template>
    <div class="login-container">
        <div class="login-box">
            <h2 class="title">电网运行管理系统</h2>
            <h3 class="subtitle">密码登录</h3>

            <el-form :model="loginForm" :rules="rules" ref="loginForm">
                <el-form-item prop="username">
                    <el-input
                        v-model="loginForm.username"
                        placeholder="请输入账号"
                        prefix-icon="el-icon-user">
                    </el-input>
                </el-form-item>

                <el-form-item prop="password">
                    <el-input
                        v-model="loginForm.password"
                        type="password"
                        placeholder="请输入登录密码"
                        prefix-icon="el-icon-lock">
                    </el-input>
                </el-form-item>

                <div class="login-type">
                    <span>登录方式</span>
                    <el-link type="primary">切换</el-link>
                </div>

                <el-button type="primary" class="login-btn" @click="handleLogin">下一步</el-button>
            </el-form>

            <div class="contact">
                运维联系方式：18726543456
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "index3",
    data() {
        return {
            loginForm: {
                username: '',
                password: ''
            },
            rules: {
                username: [
                    { required: true, message: '请输入账号', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '请输入密码', trigger: 'blur' }
                ]
            }
        };
    },
    methods: {
        handleLogin() {
            this.$refs.loginForm.validate(valid => {
                if (valid) {
                    // TODO: 实现登录逻辑
                    console.log('登录表单提交', this.loginForm);
                }
            });
        }
    }
};
</script>

<style lang="scss" scoped>
.login-container {
    height: 100vh;
    background: linear-gradient(135deg, #4b96f3 0%, #6f7bec 100%);
    display: flex;
    justify-content: center;
    align-items: center;

    .login-box {
        width: 400px;
        padding: 30px;
        background: #fff;
        border-radius: 8px;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);

        .title {
            text-align: center;
            font-size: 24px;
            color: #333;
            margin-bottom: 20px;
        }

        .subtitle {
            font-size: 18px;
            color: #333;
            margin-bottom: 30px;
        }

        .login-type {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: 15px 0;
            color: #606266;
        }

        .login-btn {
            width: 100%;
            margin-top: 20px;
        }

        .contact {
            text-align: center;
            color: #909399;
            font-size: 14px;
            margin-top: 30px;
        }
    }
}
</style>
