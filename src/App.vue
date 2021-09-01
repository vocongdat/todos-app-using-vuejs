<template>
    <div id="app" class="container">
        <Header
            @toggle-add-task="toggleAddTask"
            title="Task Tracker"
            :showAddTask="showAddTask"
        />
        <div v-show="showAddTask">
            <AddTask @add-task="addTask" />
        </div>
        <GoBack />
        <transition name="slide" mode="out-in">
            <router-view />
        </transition>

        <Tasks
            @toggle-reminder="toggleReminder"
            @delete-task="deleteTask"
            :tasks="task"
        />
        <Footer />
        <DemoSlot />
        <p>{{ count }}</p>
        <Count />
    </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Tasks from './components/Tasks.vue';
import AddTask from './components/AddTask.vue';
import GoBack from './components/GoBack.vue';
import Count from './components/Count.vue';
import taskApi from './api/taskApi';
import DemoSlot from './components/SlotDemo.vue';

export default {
    name: 'App',
    components: {
        Header,
        Footer,
        Tasks,
        AddTask,
        GoBack,
        Count,
        DemoSlot,
    },
    data() {
        return {
            task: [],
            showAddTask: false,
        };
    },

    methods: {
        toggleAddTask() {
            this.showAddTask = !this.showAddTask;
        },

        async addTask(newTask) {
            await taskApi.post(newTask);

            this.task = [newTask, ...this.task];
            this.showAddTask = false;
        },

        async deleteTask(id) {
            if (confirm('Are you sure?')) {
                await taskApi.remove(id);
                this.task = this.task.filter((task) => {
                    return task.id !== id;
                });
            }
        },

        async toggleReminder(id) {
            const tasks = this.task;
            const newTask = tasks.map((task) =>
                task.id === id ? { ...task, reminder: !task.reminder } : task
            );
            this.task = newTask;
            const updateTast = newTask.find((task) => task.id === id);
            await taskApi.update(updateTast);
        },
        async fetchTasks() {
            const response = await taskApi.get();
            return response.reverse();
        },
        async updateTasks(data) {
            await taskApi.update(data);
        },
    },

    computed: {
        count() {
            return this.$store.state.count;
        },
    },

    beforeCreate() {
        console.log('beforeCreate', this.task);
    },
    async created() {
        this.task = await this.fetchTasks();
        console.log('created', this.task);
    },
    beforeMount() {
        console.log('beforeMount');
    },
    mounted() {
        console.log('mounted');
    },
    beforeUpdate() {
        console.log('beforeUpdate', this.task);
    },
    updated() {
        console.log('updated', this.task);
    },
    beforeDestroy() {
        console.log('beforeDestroy');
    },
    destroyed() {
        console.log('destroyed');
    },
    watch: {
        task: function () {
            console.log('Watch Task', this.task);
        },
    },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
body {
    font-family: 'Poppins', sans-serif;
}
.container {
    max-width: 500px;
    margin: 30px auto;
    overflow: auto;
    min-height: 300px;
    border: 1px solid steelblue;
    padding: 30px;
    border-radius: 5px;
}
.btn {
    display: inline-block;
    background: #000;
    color: #fff;
    border: none;
    padding: 10px 20px;
    margin: 5px;
    border-radius: 5px;
    cursor: pointer;
    text-decoration: none;
    font-size: 15px;
    font-family: inherit;
}
.btn:focus {
    outline: none;
}
.btn:active {
    transform: scale(0.98);
}
.btn-block {
    display: block;
    width: 100%;
}
.slide-enter-active,
.slide-leave-active {
    transition: all 1s;
}
.slide-enter,
.slide-leave-to {
    opacity: 0;
    transform: translateX(15px);
}
</style>
