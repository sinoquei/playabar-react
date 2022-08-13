import { Button } from "../../ButtonElements";
import { BtnWrap } from "../InfoElements";
import { useState } from "react";
import {
    Modal,
    ModalHeader,
    ModalBody,
    FormGroup,
    Col,
} from 'reactstrap';
import { Formik, Field, Form, } from 'formik';

const JobAppForm = ({ buttonLabel }) => {
    const [jobModalOpen, setJobModalOpen] = useState(false);

    return (
        <>
            <Button onClick={() => setJobModalOpen(true)}>Apply Here</Button>
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
                            <FormGroup row>
                                <Col xs='6'>
                                    <Field
                                        name='phoneNum'
                                        placeholder='Phone'
                                        className='form-control'
                                    />
                                </Col>
                                <Col xs='6'>
                                    <Field
                                        name='email'
                                        placeholder='Email'
                                        type='email'
                                        className='form-control'
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                               <BtnWrap>
                                    <Button>Submit</Button>
                                </BtnWrap>
                            </FormGroup>
                        </Form>
                    </Formik>
                </ModalBody>
            </Modal>
        </>
    )

};

export default JobAppForm;