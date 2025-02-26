const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");

menuBtn.addEventListener("click", () => {
  sideMenu.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  sideMenu.style.display = "none";
});

themeToggler.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme-variabels");
  themeToggler.firstElementChild.classList.toggle("active");
  themeToggler.lastElementChild.classList.toggle("active");
});

Orders.forEach((order) => {
  const tr = document.createElement("tr");
  const trContent = `

                <td>${order.carBrand}</td>
                <td>${order.carNumber}</td>
                <td>${order.paymentStatus}</td>
                <td class="${
                  order.parkingStatus === "Declined"
                    ? "danger"
                    : order.parkingStatus === "Pending"
                    ? "warning"
                    : "success"
                }">${order.parkingStatus}</td>
                <td class="primary">Details</td>
             
    `;
  tr.innerHTML = trContent;
  document.querySelector("table tbody").appendChild(tr);
});

const dateInput = document.getElementById('todayDate');

const today = new Date().toISOString().split('T')[0];

dateInput.value = today;