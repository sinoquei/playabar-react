import { Button } from "../../ButtonElements";
import { useState } from "react";
import {
    Modal,
    ModalHeader,
    ModalBody,
    FormGroup,
    Label,
    Col,
    Button
} from 'reactstrap';
import { Formik, Field, Form, } from 'formik';

const JobAppForm = ({ buttonLabel }) => {
    const [jobModalOpen, setJobModalOpen] = useState(false);

    return (
        <>
            <Button onClick={() => setJobModalOpen(true)}>{buttonLabel}</Button>
            <Modal isOpen={jobModalOpen}>
                <ModalHeader toggle={() => setJobModalOpen(false)}>Job Application</ModalHeader>
                <ModalBody>
                    <Formik
                        initialValues={{
                            firstName: '',
                            lastName: '',
                            phoneNumb: '',
                            emai: '',

                        }}
                    >
                        <Form>
                            <FormGroup row>
                                <Col xs='6'>
                                    <Field
                                        name='firstName'
                                        placeholder='First Name'
                                        className='form-control'
                                    />
                                </Col>
                                <Col xs='6'>
                                    <Field
                                        name='lastName'
                                        placeholder='Last Name'
                                        className='form-control'
                                    />
                                </Col>
                            </FormGroup>
                        </Form>
                    </Formik>
                </ModalBody>
            </Modal>
        </>
    )

};

export default JobAppForm;