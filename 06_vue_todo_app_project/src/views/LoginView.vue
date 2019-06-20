<template>
    <div>
        <label> ユーザ名
            <input>
        </label>
        <label> パスワード
            <input>
        </label>
        <button @click="login">ログイン</button>
    </div>
</template>

<script>
    export default {
        name: "LoginView",
        methods: {
            login() {
                this.$router.push('/todo');
            }
        }
    }
</script>

<style scoped>
</style>
