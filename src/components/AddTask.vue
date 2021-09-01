<template>
    <form @submit.prevent="onSubmit" class="add-form">
        <div class="form-control">
            <label>Task</label>
            <input
                type="text"
                v-model="text"
                name="text"
                placeholder="Add Task"
            />
        </div>
        <div class="form-control">
            <label>Day & Time</label>
            <input
                type="text"
                v-model="day"
                name="day"
                placeholder="Add Day & Time"
            />
        </div>
        <div class="form-control form-control-check">
            <label>Set Reminder</label>
            <input type="checkbox" v-model="reminder" name="reminder" />
        </div>
        <p v-color="['red', 'green', 'blue', 'black']">
            {{ title | capitalize | truncateString }}
        </p>
        <p>{{ price | formatPrice }}</p>
        <input type="submit" value="Save Task" class="btn btn-block" />
    </form>
</template>

<script>
import { v4 as uuid } from 'uuid';

export default {
    name: 'AddTask',
    data() {
        return {
            text: '',
            day: '',
            reminder: false,
            title: 'Hi, I should be truncated because I am too loooong!',
            price: '500000000',
        };
    },
    methods: {
        onSubmit() {
            if (!this.text) {
                alert('Please add a task');
                return;
            }

            const newTask = {
                id: uuid(),
                text: this.text,
                day: this.day,
                reminder: this.reminder,
            };

            this.$emit('add-task', newTask);

            this.text = '';
            this.day = '';
            this.reminder = false;
        },
    },
    directives: {
        color: {
            bind(el, binding) {
                console.log('el', el);
                console.log('binding', binding);
            },
            inserted(el, binding) {
                const colors = binding.value;
                console.log('colors', colors);
                let i = 0;
                setInterval(() => {
                    el.style.color = colors[i++];
                    if (i >= colors.length) {
                        return (i = 0);
                    }
                }, 500);
            },
        },
    },
    filters: {
        capitalize(value) {
            if (!value) return '';
            value = value.toString();
            return value.charAt(0).toUpperCase() + value.slice(1);
        },
        truncateString(string, length = 15) {
            return string.length < length
                ? string
                : `${string.slice(0, length - 3)}...`;
        },
        formatPrice(number) {
            return new Intl.NumberFormat('de-DE', {
                style: 'currency',
                currency: 'VND',
            }).format(number);
        },
    },
};
</script>

<style scoped>
.add-form {
    margin-bottom: 40px;
}
.form-control {
    margin: 20px 0;
}
.form-control label {
    display: block;
}
.form-control input {
    width: 100%;
    height: 40px;
    margin: 5px;
    padding: 3px 7px;
    font-size: 17px;
}
.form-control-check {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.form-control-check label {
    flex: 1;
}
.form-control-check input {
    flex: 2;
    height: 20px;
}
</style>
