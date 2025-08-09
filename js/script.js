const headers = document.querySelectorAll('.accordion-header');

    headers.forEach(header => {
      header.addEventListener('click', () => {
        const item = header.parentElement;
        const isActive = item.classList.contains('active');

        // Close all accordions
        document.querySelectorAll('.accordion-item').forEach(i => {
          i.classList.remove('active');
          i.querySelector('.icon').textContent = '+';
        });

        // Toggle current accordion
        if (!isActive) {
          item.classList.add('active');
          item.querySelector('.icon').textContent = '−';
        }
      });
    });
    document.getElementById("registerForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent form from submitting

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let mobile = document.getElementById("mobile").value.trim();
    let company = document.getElementById("company").value.trim();
    let category = document.getElementById("category").value.trim();
    let description = document.getElementById("description").value.trim();
    let terms = document.getElementById("terms").checked;
    let captcha = document.getElementById("captchaCheck").checked;

    // Name validation
    if (name === "") {
        alert("Please enter your name.");
        return;
    }

    // Email validation
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Mobile number validation (10 digits)
    let mobilePattern = /^[0-9]{10}$/;
    if (!mobile.match(mobilePattern)) {
        alert("Please enter a valid 10-digit mobile number.");
        return;
    }

    // Company name validation
    if (company === "") {
        alert("Please enter your company name.");
        return;
    }

    // Category validation
    if (category === "") {
        alert("Please enter event service category.");
        return;
    }

    // Description validation
    if (description === "") {
        alert("Please enter business description.");
        return;
    }

    // Terms checkbox validation
    if (!terms) {
        alert("You must accept the terms & conditions.");
        return;
    }

    // Captcha validation
    if (!captcha) {
        alert("Please confirm you are not a robot.");
        return;
    }

    alert("Registration successful!");
    });