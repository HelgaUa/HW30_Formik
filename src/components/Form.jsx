import React from 'react';
import { useFormik, Form, FormikProvider, Field } from 'formik';
import { v4 as uuidv4 } from 'uuid';
import { Button } from './Button.jsx';
import validateInput from "../helpers/inputValidation.js";

export function TodoForm(props) {
    const { disabled, handleUpdateItem } = props;

    const formik = useFormik({
        initialValues: {
            inputTodo: '',
        },
        validateOnChange: true,
        validate: (values) => validateInput(values),
        onSubmit: (values, formikHelpers) => {
            const todoItem = {
                id: uuidv4(),
                checked: false,
                text: values.inputTodo,
            };
            const todos = localStorage.getItem('todos');
            const newItems = todos === null ? [todoItem] : [...JSON.parse(todos), todoItem];
            localStorage.setItem('todos', JSON.stringify(newItems));
            handleUpdateItem(newItems);
            formikHelpers.resetForm();
        },
    })

    return (
        <FormikProvider value={formik}>
            <Form>
                <div className='w-100'>
                    <Field
                        className="form-control"
                        name='inputTodo'
                        placeholder="Add the task"
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
                    disabled={disabled || !formik.isValid || formik.isSubmitting}
                >
                    <span>Send</span>
                </Button>
            </Form>
        </FormikProvider>
    );
}
