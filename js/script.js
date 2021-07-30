const root = new Vue ({
    el: "#root",
    data: {
        newTask: "",
        tasks: [
            "Mele",
            "Pere",
            "Riso",
            "Pasta",
        ],
    },
    methods: {
        deleteTask(index) {
            this.tasks.splice(index, 1);
        },
        addTask() {
            if (this.newTask.trim()) {
                this.tasks.push(this.newTask);
            }
            this.newTask = "";
        },
    },
});