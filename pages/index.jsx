import Head from 'next/head'
import { Form } from "@unform/web";

import { Footer } from 'components/Footer';
import { Button } from 'components/Button';
import { Input } from 'components/Input';
import { FormWrapper } from 'styles/helpers';

export default function Home() {
  function handleSubmit(data) {
    console.log(data);
  }

  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600&display=swap"/>
        <title>Blog</title>
      </Head>
      <main>
        <Form onSubmit={handleSubmit} noValidate>
          <FormWrapper>
            <Input label="Email" name="email" variant="outlined" type="email" />
          </FormWrapper>
          <FormWrapper>
            <Input label="Password" name="password" variant="outlined" type="password" />
          </FormWrapper>
          <FormWrapper>
            <Button type="submit" variant="contained" color="primary">Sign in</Button>
          </FormWrapper>
        </Form>
        <p>
          Dont have any account?
          <Button variant="contained" color="secondary">Sign up</Button>
        </p>
      </main>
      <Footer />
    </div>
  )
}
