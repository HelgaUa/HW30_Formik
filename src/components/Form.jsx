import React from 'react';
import { useFormik, Form as FormikForm } from 'formik';
import { v4 as uuidv4 } from 'uuid';
import { Button } from './Button.jsx';
import validateInput from "../helpers/inputValidation.js";

export function TodoForm(props) {
    const { disabled, handleUpdateItem } = props;
    const formik = useFormik({
        initialValues: {
            inputTodo: '',
        },
        validationSchema: validateInput,
        onSubmit: (values, resetForm) => {
            const todoItem = {
                id: uuidv4(),
                checked: false,
                text: values.inputTodo,
            };
            const todos = localStorage.getItem('todos');
            const newItems = todos === null ? [todoItem] : [...JSON.parse(todos), todoItem];
            localStorage.setItem('todos', JSON.stringify(newItems));
            handleUpdateItem(newItems);
            resetForm();
        },
    })

    return (
        <FormikForm onSubmit={formik.handleSubmit}>
            <div className='w-100'>
                <input
                    {...formik.getFieldProps('inputTodo')}
                    className="form-control"
                    type="text"
                />
                {formik.touched.inputTodo && formik.errors.inputTodo && (
                    <div style={{ color: 'red', marginTop: '5px'}}>
                        {formik.errors.inputTodo}
                    </div>
                )}
            </div>
            <Button
                className="btn-outline-success my-3"
                type="submit"
                disabled={disabled || formik.isValidating || formik.isSubmitting}
            >
                <span>Send</span>
            </Button>
        </FormikForm>
    );
}
