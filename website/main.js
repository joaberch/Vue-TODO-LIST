const app = Vue.createApp({
    data() {
        return {
            selectedTask: 0,
            Lists: [
                {name: 'Manger', description: 'Manger une pomme', priority: 60, done: true},
                {name: 'Boire', description: 'Boire de l\'eau', priority: 9, done: false},
                {name: 'Respirer', description: '...', priority: 10, done: false},
                {name: 'Cuisiner', description: 'Cuisiner une pomme', priority: 3, done: false},
                {name: 'Regarder', description: '...', priority: 1, done: false},
                {name: 'Manger', description: 'Manger une pomme', priority: 6, done: false},
                {name: 'Boire', description: 'Boire de l\'eau', priority: 9, done: false},
                {name: 'Respirer', description: '...', priority: 10, done: false},
                {name: 'Cuisiner', description: 'Cuisiner une pomme', priority: 3, done: false},
                {name: 'Regarder', description: '...', priority: 1, done: false},
                {name: 'Manger', description: 'Manger une pomme', priority: 6, done: false},
                {name: 'Boire', description: 'Boire de l\'eau', priority: 9, done: false},
                {name: 'Respirer', description: '...', priority: 10, done: false},
                {name: 'Cuisiner', description: 'Cuisiner une pomme', priority: 3, done: false},
                {name: 'Regarder', description: '...', priority: 1, done: false},
                {name: 'Manger', description: 'Manger une pomme', priority: 6, done: false},
                {name: 'Boire', description: 'Boire de l\'eau', priority: 9, done: false},
                {name: 'Respirer', description: '...', priority: 10, done: false},
                {name: 'Cuisiner', description: 'Cuisiner une pomme', priority: 3, done: false},
                {name: 'Regarder', description: '...', priority: 1, done: false},
            ],
        }
    },
    computed: {
        checkDone() {
            return this.Lists[this]
        },
        updateSelectedTask(index) {
            this.selectedTask = index
        },
    },
    methods: {
        taskDone(index) {
            this.Lists[index].done = true
        }
    }
})

const mountedApp = app.mount('#app')