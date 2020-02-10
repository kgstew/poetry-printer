import gql from 'graphql-tag';
import React from 'react';
import { useQuery } from 'react-apollo';
import styled from 'styled-components';

import AddPoem from './AddPoem';

const Author = styled.strong`
    display: block;
    font-size: 1.5rem;
    font-weight: 700;
`;

const Body = styled.p`
    margin-bottom: 0;
`;

const Poem = styled.div`
    padding: 1rem 0;

    :not(:last-child) {
        border-bottom: 1px solid ${props => props.theme.veryLightGrey};
    }
`;

const Title = styled.strong`
    display: block;
    font-size: 1.5rem;
    font-weight: 700;
`;

const Wrapper = styled.div``;

const query = gql`
    {
        poems {
            author
            body
            id
            title
            userId
        }
    }
`;

const Poems = () => {
    const { data, loading, refetch } = useQuery(query);

    console.log('data', data);

    if (loading) return 'Loading...';

    return (
        <Wrapper>
            <div>
                {data.poems.map(poem => (
                    <Poem key={poem.id}>
                        <Title>{poem.title}</Title>
                        <Author>{poem.author}</Author>
                        <Body>{poem.body}</Body>
                    </Poem>
                ))}
            </div>
            <AddPoem
                onAddPoem={() => {
                    refetch();
                }}
            />
        </Wrapper>
    );
};

export default Poems;
