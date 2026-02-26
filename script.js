// Email validation function
function isValidEmail(email) {
    return email.includes("@") && email.includes(".");
}

// LOGIN FUNCTION
const loginBtn = document.getElementById("loginBtn");
if (loginBtn) {
    loginBtn.addEventListener("click", login);
}

function login() {
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;
    const error = document.getElementById("loginError");

    if (!email || !password) {
        error.innerText = "All fields are required";
        return;
    }

    if (!isValidEmail(email)) {
        error.innerText = "Invalid email format";
        return;
    }

    if (password.length < 6) {
        error.innerText = "Password must be at least 6 characters";
        return;
    }

    error.innerText = "";
    alert("Login successful");
}
// FORGET PASSWORD FUNCTION
const forgotLink = document.getElementById("forgotPassword");

if (forgotLink) {
    forgotLink.addEventListener("click", function (e) {
        e.preventDefault();

        const email = document.getElementById("loginEmail").value;

        if (!email) {
            alert("Please enter your email first");
            return;
        }

        if (!isValidEmail(email)) {
            alert("Please enter a valid email");
            return;
        }

        alert("Password reset link sent to " + email);
    });
}


// SIGNUP FUNCTION
const signupBtn = document.getElementById("signupBtn");
if (signupBtn) {
    signupBtn.addEventListener("click", signup);
}

function signup() {
    const name = document.getElementById("signupName").value;
    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPassword").value;
    const confirmPassword = document.getElementById("signupConfirmPassword").value;
    const error = document.getElementById("signupError");

    if (!name || !email || !password || !confirmPassword) {
        error.innerText = "All fields are required";
        return;
    }

    if (!isValidEmail(email)) {
        error.innerText = "Invalid email format";
        return;
    }

    if (password.length < 6) {
        error.innerText = "Password must be at least 6 characters";
        return;
    }

    if (password !== confirmPassword) {
        error.innerText = "Password and Repeat Password do not match";
        return;
    }

    error.innerText = "";
    alert("Signup successful");
}
