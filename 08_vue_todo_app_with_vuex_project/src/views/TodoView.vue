<template>
    <div>
        <p>ログイン：{{ loginUserName }}, {{ loginTime }}</p>
        <input v-model="inputText">
        <button @click="registerTask">タスク登録</button>
        <p>TODO List</p>
        <ol>
            <li v-for="task in taskList" :key="task">
                <input type="checkbox">
                <span>{{ task }}</span>
            </li>
        </ol>
    </div>
</template>

<script>
    export default {
        name: "TodoView",
        data: function () {
            return {
                inputText: null,
                taskList: [
                    "牛乳を買う"
                ]
            }
        },
        computed: {
            loginUserName() {
                return this.$store.getters.loginUserName;
            },
            loginTime() {
                return this.$store.getters.loginTime;
            }
        },
        methods: {
            registerTask() {
                this.taskList.push(this.inputText);
                this.inputText = null;
            }
        }
    }
</script>

<style scoped>
</style>
