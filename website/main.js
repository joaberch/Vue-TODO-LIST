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
        },
        fillTable(data) {
            const tableBody = document.querySelector('#heritageTable tbody');
        
            // Clear the current table content
            tableBody.innerHTML = '';
        
            // Loop through the JSON data and add each entry to the table
            data.forEach(entry => {
                const row = tableBody.insertRow();
        
                // Add rows with the properties to display
                const propertiesToShow = ['name', 'description', 'priority', 'done'];
                propertiesToShow.forEach(property => {
                    const cell = row.insertCell();
                    cell.textContent = entry[property];
                });
            });
        }
    }
})