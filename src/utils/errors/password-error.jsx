const createPasswordError = (errors) => {
    return (
        errors.password && <p className="error">{errors.password.message}</p>
    );
};

export default createPasswordError;
