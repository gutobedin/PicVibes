import React from 'react';
import {Screen} from '../../../components/Screen/Screen';
import {Text} from '../../../components/Text/Text';
import {TextInput} from '../../../components/TextInput/TextInput';
import {Box} from '../../../components/Box/Box';
import {Button} from '../../../components/Button/Button';
import {PasswordInput} from '../../../components/PasswordInput/PasswordInput';

export function SignUpScreen() {
  function submitForm() {
    console.log('Form submitted');
  }
  return (
    <Screen canGoBack scrollable>
      <Text mb="s32" preset="headingLarge">
        Criar uma conta
      </Text>
      <Box gap="s20">
        <TextInput label="Seu username" placeholder="@" />
        <TextInput
          label="Nome completo"
          placeholder="Digite seu nome completo"
        />
        <TextInput label="E-mail" placeholder="Digite seu e-mail" />
        <PasswordInput
          label="Senha"
          placeholder="Digite sua senha"
          boxProps={{mb: 's48'}}
        />
      </Box>
      <Button title="Criar conta" onPress={submitForm} />
    </Screen>
  );
}
