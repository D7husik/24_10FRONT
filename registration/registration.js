

document.addEventListener('DOMContentLoaded', function() {
    
    const form = document.getElementById('registrationForm');
    const fullName = document.getElementById('fullName');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const program = document.getElementById('program');
    const studyModeInputs = document.querySelectorAll('input[name="studyMode"]');
    const intakeDate = document.getElementById('intakeDate');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');
    const agreeTerms = document.getElementById('agreeTerms');
    const submitBtn = document.getElementById('submitBtn');
    const successAlert = document.getElementById('successAlert');
    const formCard = document.getElementById('formCard');
    const studyModeFeedback = document.getElementById('studyModeFeedback');
    const passwordStrength = document.getElementById('passwordStrength');

    
    const today = new Date().toISOString().split('T')[0];
    intakeDate.setAttribute('min', today);

    
    function validateFullName() {
        const value = fullName.value.trim();
        if (value.length < 2) {
            fullName.classList.remove('is-valid');
            fullName.classList.add('is-invalid');
            return false;
        } else {
            fullName.classList.remove('is-invalid');
            fullName.classList.add('is-valid');
            return true;
        }
    }

   
    function validateEmail() {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email.value)) {
            email.classList.remove('is-valid');
            email.classList.add('is-invalid');
            return false;
        } else {
            email.classList.remove('is-invalid');
            email.classList.add('is-valid');
            return true;
        }
    }

    function validatePhone() {
        const phonePattern = /^[\d\s\+\-\(\)]+$/;
        const value = phone.value.trim();
        if (value.length < 10 || !phonePattern.test(value)) {
            phone.classList.remove('is-valid');
            phone.classList.add('is-invalid');
            return false;
        } else {
            phone.classList.remove('is-invalid');
            phone.classList.add('is-valid');
            return true;
        }
    }

    function validateProgram() {
        if (program.value === '') {
            program.classList.remove('is-valid');
            program.classList.add('is-invalid');
            return false;
        } else {
            program.classList.remove('is-invalid');
            program.classList.add('is-valid');
            return true;
        }
    }

    function validateStudyMode() {
        const isChecked = Array.from(studyModeInputs).some(input => input.checked);
        if (!isChecked) {
            studyModeFeedback.style.display = 'block';
            return false;
        } else {
            studyModeFeedback.style.display = 'none';
            return true;
        }
    }

    function validateIntakeDate() {
        if (intakeDate.value === '') {
            intakeDate.classList.remove('is-valid');
            intakeDate.classList.add('is-invalid');
            return false;
        } else {
            intakeDate.classList.remove('is-invalid');
            intakeDate.classList.add('is-valid');
            return true;
        }
    }

    function validatePassword() {
        const value = password.value;
        const hasUpperCase = /[A-Z]/.test(value);
        const hasLowerCase = /[a-z]/.test(value);
        const hasNumber = /[0-9]/.test(value);
        const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(value);
        const isLengthValid = value.length >= 8;

        let strength = 0;
        if (hasUpperCase) strength++;
        if (hasLowerCase) strength++;
        if (hasNumber) strength++;
        if (hasSpecialChar) strength++;
        if (isLengthValid) strength++;

        passwordStrength.classList.remove('weak', 'medium', 'strong');
        if (strength <= 2) {
            passwordStrength.classList.add('weak');
        } else if (strength <= 4) {
            passwordStrength.classList.add('medium');
        } else {
            passwordStrength.classList.add('strong');
        }

        if (hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar && isLengthValid) {
            password.classList.remove('is-invalid');
            password.classList.add('is-valid');
            return true;
        } else {
            password.classList.remove('is-valid');
            password.classList.add('is-invalid');
            return false;
        }
    }

    function validateConfirmPassword() {
        if (confirmPassword.value !== password.value || confirmPassword.value === '') {
            confirmPassword.classList.remove('is-valid');
            confirmPassword.classList.add('is-invalid');
            return false;
        } else {
            confirmPassword.classList.remove('is-invalid');
            confirmPassword.classList.add('is-valid');
            return true;
        }
    }

    function validateTerms() {
        if (!agreeTerms.checked) {
            agreeTerms.classList.add('is-invalid');
            return false;
        } else {
            agreeTerms.classList.remove('is-invalid');
            return true;
        }
    }

    

    fullName.addEventListener('blur', validateFullName);
    fullName.addEventListener('input', validateFullName);

    email.addEventListener('blur', validateEmail);
    email.addEventListener('input', validateEmail);

    phone.addEventListener('blur', validatePhone);
    phone.addEventListener('input', validatePhone);

    program.addEventListener('change', validateProgram);

    studyModeInputs.forEach(input => {
        input.addEventListener('change', validateStudyMode);
    });

    intakeDate.addEventListener('change', validateIntakeDate);

    password.addEventListener('input', function() {
        validatePassword();
        if (confirmPassword.value !== '') {
            validateConfirmPassword();
        }
    });

    confirmPassword.addEventListener('input', validateConfirmPassword);

    agreeTerms.addEventListener('change', validateTerms);

    
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const isFullNameValid = validateFullName();
        const isEmailValid = validateEmail();
        const isPhoneValid = validatePhone();
        const isProgramValid = validateProgram();
        const isStudyModeValid = validateStudyMode();
        const isIntakeDateValid = validateIntakeDate();
        const isPasswordValid = validatePassword();
        const isConfirmPasswordValid = validateConfirmPassword();
        const isTermsValid = validateTerms();

        const isFormValid = isFullNameValid && isEmailValid && isPhoneValid && 
                           isProgramValid && isStudyModeValid && isIntakeDateValid && 
                           isPasswordValid && isConfirmPasswordValid && isTermsValid;

        if (isFormValid) {
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Submitting...';

            setTimeout(function() {
                successAlert.classList.remove('d-none');
                formCard.style.display = 'none';

                window.scrollTo({ top: 0, behavior: 'smooth' });

                form.reset();
                
                document.querySelectorAll('.is-valid, .is-invalid').forEach(el => {
                    el.classList.remove('is-valid', 'is-invalid');
                });

                passwordStrength.classList.remove('weak', 'medium', 'strong');

                submitBtn.disabled = false;
                submitBtn.innerHTML = 'Submit Application';
            }, 1500);
        } else {
            const firstInvalid = form.querySelector('.is-invalid');
            if (firstInvalid) {
                firstInvalid.scrollIntoView({ behavior: 'smooth', block: 'center' });
                firstInvalid.focus();
            }
        }
    });

  

    form.addEventListener('keypress', function(event) {
        if (event.key === 'Enter' && event.target.type !== 'submit') {
            event.preventDefault();
        }
    });

    phone.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');
        if (value.startsWith('996')) {
            value = '+' + value;
        }
        const cursorPosition = e.target.selectionStart;
        e.target.value = value;
        e.target.setSelectionRange(cursorPosition, cursorPosition);
    });

    const passwordFields = [password, confirmPassword];
    passwordFields.forEach(field => {
        const toggleBtn = document.createElement('button');
        toggleBtn.type = 'button';
        toggleBtn.className = 'btn btn-sm btn-outline-secondary position-absolute end-0 top-50 translate-middle-y me-2';
        toggleBtn.innerHTML = '<i class="fas fa-eye"></i>';
        toggleBtn.setAttribute('aria-label', 'Toggle password visibility');
        
        field.parentElement.style.position = 'relative';
        
        toggleBtn.addEventListener('click', function() {
            if (field.type === 'password') {
                field.type = 'text';
                toggleBtn.innerHTML = '<i class="fas fa-eye-slash"></i>';
            } else {
                field.type = 'password';
                toggleBtn.innerHTML = '<i class="fas fa-eye"></i>';
            }
        });
        
        field.parentElement.appendChild(toggleBtn);
    });

    console.log('Registration form initialized successfully');
});