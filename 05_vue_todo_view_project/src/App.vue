<template>
    <div id="app">
        <h1>TODOアプリ</h1>
        <TodoView></TodoView>
    </div>
</template>

<script>
    import TodoView from './views/TodoView.vue'

    export default {
        name: 'app',
        components: {
            TodoView
        }
    }
</script>

<style>
</style>
