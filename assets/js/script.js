

// ========== LANGUAGE DROPDOWN ========== //
function toggleDropdown() {
    const dropdown = document.getElementById("language-options");
    dropdown.classList.toggle("show");
}

function changeLanguage(lang) {
    document.querySelector(".language-btn").textContent = lang + " ▼";
    document.getElementById("language-options").classList.remove("show");
}

document.addEventListener("click", (event) => {
    const dropdown = document.getElementById("language-options");
    const button = document.querySelector(".language-btn");
    
    if (!button.contains(event.target) && !dropdown.contains(event.target)) {
        dropdown.classList.remove("show");
    }
});

// ========== FORM HANDLING ========== //
document.addEventListener("DOMContentLoaded", () => {
    // Khai báo biến
    const icons = document.querySelectorAll(".icon-box");
    const forms = {
        guest: document.getElementById("guest-form"),
        code: document.getElementById("code-form"),
        email: document.getElementById("email-form")
    };
    const titleElement = document.getElementById("form-title");
    const descElement = document.getElementById("form-description");
    
    // Dữ liệu form
    const formConfig = {
        guest: {
            title: "Guest",
            desc: "Enter Room Number and Last Name for Internet access"
        },
        code: {
            title: "Code",
            desc: "Enter the Access Code for Internet access"
        },
        email: {
            title: "Email",
            desc: `Enter email address to receive <br> Verification link for Internet access`
        }
    };

    // Xử lý click icon
    const handleIconClick = (clickedIcon) => {
        // Xóa active tất cả icon
        icons.forEach(icon => icon.classList.remove("active"));
        
        // Thêm active cho icon được click
        clickedIcon.classList.add("active");
        
        // Lấy loại form từ data attribute
        const formType = clickedIcon.dataset.formType;
        
        // Ẩn tất cả form
        Object.values(forms).forEach(form => form.classList.remove("active"));
        
        // Hiển thị form tương ứng
        if (forms[formType]) {
            forms[formType].classList.add("active");
            titleElement.textContent = formConfig[formType].title;
            descElement.innerHTML = formConfig[formType].desc;
        }
    };

    // Event delegation cho cả desktop và mobile
    document.body.addEventListener("click", (e) => {
        const icon = e.target.closest(".icon-box");
        if (icon) handleIconClick(icon);
    });

    // Xử lý submit form
    document.getElementById("login-form").addEventListener("submit", (e) => {
        e.preventDefault();
        document.getElementById("login-form").addEventListener("submit", (e) => {
            e.preventDefault();
        
            let formData = new FormData();
            let isValid = true;
        
            // Xử lý dữ liệu theo form active
            if (activeForm === "guest") {
                let room = document.getElementById("room").value.trim();
                let lastName = document.getElementById("last-name").value.trim();
                if (!room || !lastName) {
                    isValid = false;
                    alert("Please enter Room Number and Last Name.");
                }
                formData.append("room", room);
                formData.append("last-name", lastName);
            } 
            else if (activeForm === "code") {
                let accessCode = document.getElementById("access-code").value.trim();
                if (!accessCode) {
                    isValid = false;
                    alert("Please enter Access Code.");
                }
                formData.append("access-code", accessCode);
            } 
            else if (activeForm === "email") {
                let email = document.getElementById("email").value.trim();
                if (!email || !validateEmail(email)) {
                    isValid = false;
                    alert("Please enter a valid Email Address.");
                }
                formData.append("email", email);
                formData.append("guest-name", guestname);
                formData.append("verification-input", verificationinput);
            }
        
            if (!isValid) return;
        
            // Gửi dữ liệu bằng Fetch API
            fetch("process.php", {
                method: "POST",
                body: formData,
            })
            .then(response => response.text())
            .then(data => {
                alert("Response from server: " + data);
            })
            .catch(error => {
                console.error("Error:", error);
            });
        });
    });
});

// ========== RESPONSIVE HANDLING ========== //
window.addEventListener("resize", () => {
    // Xử lý responsive layout
    if (window.innerWidth <= 768) {
        document.body.classList.add("mobile-view");
    } else {
        document.body.classList.remove("mobile-view");
    }
});