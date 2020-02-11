import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import React from 'react';
import useForm from 'react-hook-form';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import Textarea from '#root/components/shared/Textarea';
import TextInput from '#root/components/shared/TextInput';

const mutation = gql`
    mutation($author: String!, $body: String!, $title: String!) {
        createPoem(author: $author, body: $body, title: $title) {
            id
        }
    }
`;

const Button = styled.button`
    margin-top: 0.5rem;
`;

const Form = styled.form`
    background-color: ${props => props.theme.whiteSmoke};
    margin-top: 1rem;
    padding: 1rem;
`;

const Label = styled.label`
    display: block;

    :not(:first-child) {
        margin-top: 0.5rem;
    }
`;

const LabelText = styled.strong`
    display: block;
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
`;

const AddPoem = ({ onAddPoem: pushAddPoem }) => {
    const [createPoem] = useMutation(mutation);
    const {
        formState: { isSubmitting },
        handleSubmit,
        register,
        reset
    } = useForm();
    const session = useSelector(state => state.session);

    if (!session) return <p>Login to add poems.</p>;

    const onSubmit = handleSubmit(async ({ author, body, title }) => {
        await createPoem({ variables: { author, body, title } });
        reset();
        pushAddPoem();
    });

    return (
        <Form onSubmit={onSubmit}>
            <Label>
                <LabelText>Author</LabelText>
                <TextInput disabled={isSubmitting} name="author" ref={register} type="text" />
            </Label>
            <Label>
                <LabelText>Title</LabelText>
                <TextInput disabled={isSubmitting} name="title" ref={register} type="text" />
            </Label>
            <Label>
                <LabelText>Body</LabelText>
                <Textarea disabled={isSubmitting} name="body" ref={register} />
            </Label>
            <Button disabled={isSubmitting} type="submit">
                Add Poem
            </Button>
        </Form>
    );
};

export default AddPoem;
