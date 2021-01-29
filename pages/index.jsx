/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { useRouter } from 'next/router';
import Img from 'next/image';
import db from '../db.json';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import QuizContainer from '../src/components/QuizContainer';
import GitHubCorner from '../src/components/GitHubCorner';
import Input from '../src/components/Input';
import Button from '../src/components/Button';

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();
    router.push(`/quiz?name=${name}`);
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
              <Input
                name="username"
                placeholder="Diz ai seu nome"
                onChange={(event) => setName(event.target.value)}
                value={name}
              />
              <Button type="submit" disabled={name.length < 4}>
                <span>Jogar</span>
                <Img className src="/start.png" width={25} height={20} />
              </Button>
            </form>
          </Widget.Content>

        </Widget>
        <Widget>
          <Widget.Content>
            <h1>Quizes da Galera</h1>

            <p>lorem ipsum dolor sit amet...</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/gabrielsouzacampos" />
    </QuizBackground>
  );
}
