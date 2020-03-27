var todo = new Vue({
    el: '#todo',
    data: {
        task: "",
        done: false,
        taskList: [
            {title : 'Todo List', done : true},
            {title : 'Vuex', done : false},
            {title : 'Further understandings of Vue js', done : false},
        ],
        chosenFilter: 'All'
    },
    methods: {
        addToTaskList: function () {
            const task = {
                done: false,
                title: this.task
            }
            this.taskList.push(task);
            this.task = "";
        },
        /* toggling status of the task */
        toggleStatus: function (index) {
            this.taskList[index].done = !this.taskList[index].done;
        },
        /* deleting the task whose delete button is clicked */
        deleteTask: function (index) {
            this.taskList.splice(index, 1);
        }
    },
    computed: {
        filteredTasks : function() {
            /* return task which is Active */
            if (this.chosenFilter === 'Active') {
                return this.taskList.filter(task => !task.done);
            }
            /* return task which is completed */
            else if (this.chosenFilter === 'Completed') {
                return this.taskList.filter(task => task.done);
            }
            /* return every task */
            return this.taskList;
        }
    }
});
