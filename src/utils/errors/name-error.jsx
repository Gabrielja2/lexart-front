const createNameError = (errors) => {
    return (
        errors.username && <p className="error">{errors.username.message}</p>
    );
};

export default createNameError;
