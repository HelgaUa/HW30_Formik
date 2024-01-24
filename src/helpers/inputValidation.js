const validateInput = (values) => {
        const errors = {};
        if (!values.inputTodo) {
            errors.inputTodo = '';
        } else if (values.inputTodo.trim().length < 5) {
            errors.inputTodo = 'Field must contain at least 5 characters';
        }
        return errors;
    };

export default validateInput;