/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import db from '../db.json';

import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import GitHubCorner from '../src/components/GitHubCorner';

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();
    router.push(`/quiz?name=${name}`);
  }

  function handleChange(event) {
    setName(event.target.value);
  }

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <form onSubmit={handleSubmit}>
              <input
                placeholder="Diz ai seu nome"
                onChange={handleChange}
              />
              <button type="submit" disabled={name.length < 3}>
                Jogar {name}
              </button>
            </form>
          </Widget.Content>

        </Widget>
        <Widget>
          <Widget.Content>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/gabrielsouzacampos" />
    </QuizBackground>
  );
}
