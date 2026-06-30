
const jobsCard = document.getElementById("cardContainer");
const interviewCard = document.getElementById("interviewCard");
const rejectedCard = document.getElementById("rejectedCard");


// show section 

document.getElementById("allBtn").addEventListener("click", function () {
    jobsCard.classList.remove("hidden");
    interviewCard.classList.add("hidden");
    rejectedCard.classList.add("hidden");
});

document.getElementById("interviewBtn").addEventListener("click", function () {
    if(interviewContainer.children.length === 0){
        interviewCard.classList.remove("hidden");
    }
    else{
        interviewContainer.classList.remove("hidden");
    }
    rejectedContainer.classList.add("hidden");
    jobsCard.classList.add("hidden");
    rejectedCard.classList.add("hidden");
});

document.getElementById("rejectedBtn").addEventListener("click", function () {
    if(rejectedContainer.children.length === 0){
        rejectedCard.classList.remove("hidden");
    }
    else{
        rejectedContainer.classList.remove("hidden");
    }
    interviewContainer.classList.add("hidden");
    jobsCard.classList.add("hidden");
    interviewCard.classList.add("hidden");
    
});
