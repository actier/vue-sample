<template>
    <div>
        <label> ユーザ名
            <input v-model="userName">
        </label>
        <label> パスワード
            <input v-model="password">
        </label>
        <button @click="login">ログイン</button>
    </div>
</template>

<script>
    export default {
        name: "LoginView",
        data: function () {
            return {
                userName: null,
                password: null
            }
        },
        methods: {
            login() {
                this.$store.dispatch("login", {
                    userName: this.userName,
                    password: this.password
                });
                this.$router.push('/todo');
            }
        }
    }
</script>

<style scoped>
</style>
