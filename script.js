let total = 0;
let urgentCount = 0;

function addTask() {

    const subject = document.getElementById("subject").value;
    const deadline = document.getElementById("deadline").value;
    const priority = document.getElementById("priority").value;

    if (!subject || !deadline) {
        alert("Please fill all fields!");
        return;
    }

    const today = new Date();
    const deadlineDate = new Date(deadline);
    const daysLeft = Math.ceil((deadlineDate - today) / (1000 * 60 * 60 * 24));

    let statusText = "";
    let priorityClass = priority.toLowerCase();

    if (daysLeft <= 3) {
        statusText = `🔥 Urgent - ${daysLeft} day(s) left`;
        urgentCount++;
    } else {
        statusText = `⏳ ${daysLeft} day(s) remaining`;
    }

    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task-card", priorityClass);

    taskDiv.innerHTML = `
        <h4>${subject}</h4>
        <p>Deadline: ${deadline}</p>
        <p><strong>${statusText}</strong></p>
    `;

    document.getElementById("taskContainer").appendChild(taskDiv);

    total++;

    document.getElementById("totalTasks").innerText = total;
    document.getElementById("urgentTasks").innerText = urgentCount;

    document.getElementById("subject").value = "";
    document.getElementById("deadline").value = "";
}
