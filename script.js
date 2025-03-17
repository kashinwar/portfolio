// document.addEventListener("DOMContentLoaded", function () {
//     const buttons = document.querySelectorAll(".profile-card button");

//     buttons.forEach(button => {
//         button.addEventListener("click", function () {
//             const section = this.textContent.toLowerCase();

//             document.querySelectorAll(".tab-pane").forEach(tab => {
//                 tab.classList.remove("show", "active");
//             });

//             const activeTab = document.querySelector(`.${section}`);
//             if (activeTab) {
//                 activeTab.classList.add("show", "active");
//             }
//         });
//     });
// });


document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".btn-sec button");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const section = this.getAttribute("data-section");

            // Hide all sections
            document.querySelectorAll(".tab-pane").forEach(tab => {
                tab.classList.remove("show", "active");
            });

            // Show selected section
            const activeTab = document.querySelector(`#${section}`);
            if (activeTab) {
                activeTab.classList.add("show", "active");
            }

            // Remove active class from all buttons
            buttons.forEach(btn => btn.classList.remove("active"));

            // Add active class to clicked button
            this.classList.add("active");
        });
    });
});