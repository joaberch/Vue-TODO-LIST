const app = Vue.createApp({
    data() {
        return {
            selectedTask: 0,
        }
    },
    computed: {
        updateSelectedTask(index) {
            this.selectedTask = index
        },
    },
    methods: {
        taskDone(index) {
            this.doneLists[index].done = true
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