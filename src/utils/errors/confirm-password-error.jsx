const createConfirmPasswordError = (errors) => {
    return (
        errors.confirmPassword && (
            <p className="error">{errors.confirmPassword.message}</p>
        )
    );
};

export default createConfirmPasswordError;
