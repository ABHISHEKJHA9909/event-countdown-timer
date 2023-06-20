let count = 1;
function create() {
    let datetime = document.getElementById("datetime").value;
    let subject = document.getElementById("subject").value;


    if (datetime == "" || subject == "") {
        alert("Please Enter the date and time ")
    }
    else {
        let container = document.getElementById("countdown_container");
        let date1 = new Date(datetime);
        let date2 = new Date();

        if (date1 - date2 <= 0) {
            alert("Enter a valid date and time");
            return;
        }

        let parent = document.createElement("div");
        let par_id = `countdown-${count++}`;
        parent.id = par_id;

        let sub = document.createElement("span");
        sub.innerHTML = ` ${subject} `;

        let element = document.createElement("span");

        parent.appendChild(sub);
        parent.appendChild(element);

        container.appendChild(parent);
        element.innerHTML = `${Math.floor((date1 - date2) / (1000 * 60 * 60))}:${Math.floor((date1 - date2) / (1000 * 60)) % 60}:${Math.floor((date1 - date2) / (1000) % 60)}`;
        let interval_ID = setInterval(() => {
            date2 = new Date();

            if (date1 - date2 <= 0) {
                clearInterval(interval_ID);
                alert(`${subject} Completed !!!`)
                container.removeChild(parent);
                return;
            }
            element.innerHTML = `${Math.floor((date1 - date2) / (1000 * 60 * 60))}:${Math.floor((date1 - date2) / (1000 * 60)) % 60}:${Math.floor((date1 - date2) / (1000) % 60)}`;
        }, 1000);
    }
}