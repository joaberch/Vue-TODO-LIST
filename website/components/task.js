app.component('task-display', {
    template:
        /*html*/
        `<div class="task">
            <table>
                <tr>
                    <td v-for="(x, index) in todoLists">
                        {{ x.name }} - {{ x.priority }}
                        <br>
                        {{ x.description }}
                        <br>
                        <button type="button" @click="taskDone(index)">Done</button>
                    </td>
                </tr>
            </table>
        </div>`,
    data() {
        return {
            selectedTask: 0,
            todoLists: [
                { name: 'Manger', description: 'Manger une pomme', priority: 6},
                { name: 'Boire', description: 'Boire de l\'eau', priority: 9},
                { name: 'Respirer', description: '...', priority: 10},
                { name: 'Cuisiner', description: 'Cuisiner une pomme', priority: 3},
                { name: 'Regarder', description: '...', priority: 1},
                { name: 'Manger', description: 'Manger une pomme', priority: 6},
                { name: 'Boire', description: 'Boire de l\'eau', priority: 9},
                { name: 'Respirer', description: '...', priority: 10},
                { name: 'Cuisiner', description: 'Cuisiner une pomme', priority: 3},
                { name: 'Regarder', description: '...', priority: 1},
                { name: 'Manger', description: 'Manger une pomme', priority: 6},
                { name: 'Boire', description: 'Boire de l\'eau', priority: 9},
                { name: 'Respirer', description: '...', priority: 10},
                { name: 'Cuisiner', description: 'Cuisiner une pomme', priority: 3},
                { name: 'Regarder', description: '...', priority: 1},
                { name: 'Manger', description: 'Manger une pomme', priority: 6},
                { name: 'Boire', description: 'Boire de l\'eau', priority: 9},
                { name: 'Respirer', description: '...', priority: 10},
                { name: 'Cuisiner', description: 'Cuisiner une pomme', priority: 3},
                { name: 'Regarder', description: '...', priority: 1},
            ],
            doneLists: []
        }
    },
    computed: {
        updateSelectedTask(index) {
            this.selectedTask = index
        },
    },
    methods: {
        taskDone(index) {
            this.doneLists.push(this.todoLists[index]);
            this.todoLists.splice(index, 1);
        }
    }
})