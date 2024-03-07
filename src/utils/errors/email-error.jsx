const createEmailError = (errors) => {
    return errors.email && <p className="error">{errors.email.message}</p>;
};

export default createEmailError;
