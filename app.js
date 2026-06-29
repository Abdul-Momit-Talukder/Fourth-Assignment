const jobs = [
    { id: 1, company: "Mobile First Corp", position: "React Native Developer", status: null },
    { id: 2, company: "WebFlow Agency", position: "Web Designer", status: null },
];

function renderJobs(filter) {
    const container = document.getElementById('jobs-container');
    container.innerHTML = "";
    
    const filtered = filter === 'All' ? jobs : jobs.filter(j => j.status === filter);
    
    if(filtered.length === 0) {
        container.innerHTML = `<p class="text-center text-gray-500">No jobs available in this category.</p>`;
        return;
    }

    filtered.forEach(job => {
        container.innerHTML += `
            <div class="bg-white p-4 rounded shadow flex justify-between items-center">
                <div>
                    <h3 class="font-bold">${job.company}</h3>
                    <p>${job.position}</p>
                </div>
                <div class="flex gap-2">
                    <button onclick="updateStatus(${job.id}, 'Interview')" class="bg-green-500 text-white px-2 py-1 rounded">Interview</button>
                    <button onclick="updateStatus(${job.id}, 'Rejected')" class="bg-red-500 text-white px-2 py-1 rounded">Rejected</button>
                    <button onclick="deleteJob(${job.id})" class="text-gray-400">🗑️</button>
                </div>
            </div>`;
    });
}

function updateStatus(id, status) {
    const job = jobs.find(j => j.id === id);
    job.status = status;
    updateCounts();
    renderJobs('All');
}

function deleteJob(id) {
    const index = jobs.findIndex(j => j.id === id);
    jobs.splice(index, 1);
    updateCounts();
    renderJobs('All');
}

function updateCounts() {
    document.getElementById('interview-count').innerText = jobs.filter(j => j.status === 'Interview').length;
    document.getElementById('rejected-count').innerText = jobs.filter(j => j.status === 'Rejected').length;
    renderJobs('All');
}

renderJobs('All');