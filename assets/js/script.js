// // Hiển thị hoặc ẩn danh sách ngôn ngữ
// function toggleDropdown() {
//     let dropdown = document.getElementById("language-options");
//     dropdown.classList.toggle("show"); // Sử dụng class thay vì inline style
// }

// // Chọn ngôn ngữ và ẩn danh sách
// function changeLanguage(lang) {
//     document.querySelector(".language-btn").textContent = lang + " ▼";
//     document.getElementById("language-options").classList.remove("show");
// }

// // Đóng dropdown nếu nhấn ra ngoài
// document.addEventListener("click", function (event) {
//     let dropdown = document.getElementById("language-options");
//     let button = document.querySelector(".language-btn");

//     if (!button.contains(event.target) && !dropdown.contains(event.target)) {
//         dropdown.classList.remove("show");
//     }
// });

// //////////
// document.addEventListener("DOMContentLoaded", function () {
//     const icons = document.querySelectorAll(".icon-box");
//     const forms = {
//         guest: document.getElementById("guest-form"),
//         code: document.getElementById("code-form"),
//         email: document.getElementById("email-form"),
//     };
//     const titleElement = document.getElementById("form-title"); // Tiêu đề chính
//     const descElement = document.getElementById("form-description"); // Mô tả

//     const formData = {
//         guest: { title: "Guest", desc: "Enter Room Number and Last Name for Internet access" },
//         code: { title: "Access Code", desc: "Enter the Access Code for Internet access" },
//         email: { title: "Email Login", desc: `Enter email address to receive <br> Verification link for Internet access` },
//     };
//     function handleIconClick(icon, index) {
//         icons.forEach(i => i.classList.remove("active"));
//         icon.classList.add("active");

//         if (index === 0) showForm("guest");
//         else if (index === 1) showForm("code");
//         else if (index === 2) showForm("email");
//     }
//     document.body.addEventListener('click', function(e) {
//         const icon = e.target.closest('.icon-box');
//         if (!icon) return;
        
//         const index = Array.from(icons).indexOf(icon);
//         if (index > -1) handleIconClick(icon, index);
//     });
//     let activeForm = "guest"; // Mặc định là form Guest

//     function showForm(formKey) {
//         Object.values(forms).forEach(form => form.classList.remove("active")); // Ẩn tất cả form
//         forms[formKey].classList.add("active"); // Hiển thị form cần chọn
//         activeForm = formKey;
        
//         // Cập nhật tiêu đề và mô tả
//         titleElement.textContent = formData[formKey].title;
//         descElement.innerHTML = formData[formKey].desc; // Dùng innerHTML để xuống hàng
//     }
    

//     icons.forEach((icon, index) => {
//         icon.addEventListener("click", function () {
//             icons.forEach(i => i.classList.remove("active"));
//             icon.classList.add("active");

//             if (index === 0) showForm("guest");
//             else if (index === 1) showForm("code");
//             else if (index === 2) showForm("email");
//         });
//     });

//     document.getElementById("login-form").addEventListener("submit", function (event) {
//         event.preventDefault(); // Ngăn form gửi đi mặc định

//         let formData = new FormData();
//         let isValid = true;

//         if (activeForm === "guest") {
//             let room = document.getElementById("room").value.trim();
//             let lastName = document.getElementById("last-name").value.trim();
//             if (!room || !lastName) {
//                 isValid = false;
//                 alert("Please enter Room Number and Last Name.");
//             }
//             formData.append("room", room);
//             formData.append("last-name", lastName);
//         } else if (activeForm === "code") {
//             let accessCode = document.getElementById("access-code").value.trim();
//             if (!accessCode) {
//                 isValid = false;
//                 alert("Please enter Access Code.");
//             }
//             formData.append("access-code", accessCode);
//         } else if (activeForm === "email") {
//             let email = document.getElementById("email").value.trim();
//             if (!email || !validateEmail(email)) {
//                 isValid = false;
//                 alert("Please enter a valid Email Address.");
//             }
//             formData.append("email", email);
//         }

//         if (!isValid) return; // Nếu dữ liệu không hợp lệ, không gửi form

//         fetch("process.php", {
//             method: "POST",
//             body: formData,
//         })
//         .then(response => response.text())
//         .then(data => {
//             alert("Response from server: " + data);
//         })
//         .catch(error => {
//             console.error("Error:", error);
//         });
//     });

//     // Hàm kiểm tra email hợp lệ
//     function validateEmail(email) {
//         const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         return re.test(email);
//     }
// });

// // Xử lý toggle menu trên mobile
// function adjustLayout() {
//     const screenWidth = window.innerWidth;
//     const languageDropdown = document.querySelector('.language-dropdown');
    
//     if(screenWidth < 768) {
//         // Thêm xử lý đặc biệt cho mobile
//         languageDropdown.style.position = 'relative';
//     } else {
//         languageDropdown.style.position = 'absolute';
//     }
// }

// // Gọi hàm khi load và resize
// window.addEventListener('load', adjustLayout);
// window.addEventListener('resize', adjustLayout);
// // Xử lý responsive layout
// function updateMobileLayout() {
//     const isMobile = window.innerWidth <= 768;
    
//     // Ẩn các phần desktop
//     document.querySelectorAll('.mobile-hidden').forEach(el => {
//         el.style.display = isMobile ? 'none' : 'block';
//     });
    
//     // Xử lý fixed navigation
//     const formSections = document.querySelectorAll('.form-section');
//     if(isMobile) {
//         document.body.classList.add('mobile-view');
//         formSections.forEach(form => form.style.paddingBottom = '20px');
//     } else {
//         document.body.classList.remove('mobile-view');
//     }
// }

// // Thêm event listeners
// window.addEventListener('resize', updateMobileLayout);
// window.addEventListener('DOMContentLoaded', updateMobileLayout);

// // Xử lý click icon



// // Xử lý thay đổi ảnh khi resize
// function handleImageSwitch() {
//     const pictureElement = document.querySelector('picture');
//     const mobileImage = document.querySelector('source[media="(max-width: 768px)"]');
    
//     if(window.innerWidth <= 768) {
//         // Thêm hiệu ứng khi chuyển sang ảnh mobile
//         pictureElement.classList.add('mobile-image-active');
//     } else {
//         pictureElement.classList.remove('mobile-image-active');
//     }
// }

// window.addEventListener('resize', handleImageSwitch);














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