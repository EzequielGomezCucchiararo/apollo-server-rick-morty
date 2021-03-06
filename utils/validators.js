module.exports.validateLoginPayload = ({
    username,
    password
}) => {
    const errors = {};

    if (username.trim() === '') {
        errors.username = 'Username can not be empty'
    };

    if (password === '') {
        errors.password = 'Password can not be empty';
    }

    return {
        errors,
        valid: !Object.keys(errors).length
    }
};

module.exports.validateRegisterPayload = ({
    username,
    password,
    confirmPassword,
}) => {
    const errors = {};

    if (username.trim() === '') {
        errors.username = 'Username can not be empty'
    };

    if (password === '') {
        errors.password = 'Password can not be empty';
    } else if (password !== confirmPassword) {
        errors.confirmPassword = 'Passwords must match'
    }

    return {
        errors,
        valid: !Object.keys(errors).length
    }
}