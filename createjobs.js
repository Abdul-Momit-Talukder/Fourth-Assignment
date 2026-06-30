const interviewEmpty = document.getElementById("interviewCard");
const rejectedEmpty = document.getElementById("rejectedCard");
const interviewContainer = document.getElementById("interviewContainer");
const rejectedContainer = document.getElementById("rejectedContainer");

function createJob(job) {
    const card = document.createElement("div");
    card.className = "bg-white p-6 rounded-lg shadow-sm space-y-4";

    card.innerHTML = `
    <div class="flex justify-between items-center">
                    <div class="">
                        <h1 class="text-[#002C5C] text-lg font-semibold">${job.company}</h1>
                        <p class="text-[#64748B]">${job.role}</p>
                    </div>
                    <div class="delete-btn p-2 rounded-full bg-white shadow-sm"><i class="fa-regular fa-trash-can"></i></div>
                </div>
                <p class="text-[#64748B]">${job.location} • ${job.type} • ${job.salary}</p>
                <div class="">
                    <span class="status bg-[#EEF4FF] p-3 text-[#002C5C] rounded-md">NOT APPLIED</span>
                    <p class="mt-4 text-[#323B49]">${job.description}</p>
                </div>
                <div class="space-x-2">
                    <button
                        class="btn-interview border border-[#10B981] px-3 py-2 text-[#10B981] rounded-md font-semibold">INTERVIEW</button>
                    <button
                        class="btn-rejected border border-[#EF4444] px-3 py-2 text-[#EF4444] rounded-md font-semibold">REJECTED</button>
                </div>
    `

    //get status and interview btn and rejected btn
    const status = card.querySelector(".status");
    const btnInterview = card.querySelector(".btn-interview");
    const btnRejected = card.querySelector(".btn-rejected");

    //functon for create and count Interview and rejected part
    btnInterview.addEventListener("click", function () {
        interviewEmpty.classList.add("hidden");
        btnInterview.remove();
        btnRejected.remove();
        status.innerText = "INTERVIEW";
        status.className =
            "status bg-green-100 text-green-700 p-2 rounded-md inline-block";

        const interviewCard = card.cloneNode(true);
        interviewCard.querySelector(".delete-btn").remove();
        interviewContainer.appendChild(interviewCard);
        interviewCount.innerText = interviewContainer.children.length;
    });
    btnRejected.addEventListener("click", function () {
        rejectedEmpty.classList.add("hidden");
        btnInterview.remove();
        btnRejected.remove();
        status.innerText = "REJECTED";
        status.className =
            "status bg-red-100 text-red-700 p-2 rounded-md inline-block";

        const rejectedCard = card.cloneNode(true);
        rejectedCard.querySelector(".delete-btn").remove();
        rejectedContainer.appendChild(rejectedCard);
        rejectedCount.innerText = rejectedContainer.children.length;
    });

    card.querySelector(".delete-btn").addEventListener("click", function () {
        card.remove();
        updateJobCount();
    });

    jobContainer.appendChild(card);
    updateJobCount();
}

for (let i = 0; i < jobs.length; i++) {
    createJob(jobs[i]);
}
