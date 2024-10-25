import React from 'react';
import {Box} from '../../../components/Box/Box';
import {Text} from '../../../components/Text/Text';
import {Icon} from '../../../components/Icon/Icon';
import {TextInput} from '../../../components/TextInput/TextInput';
import {Button} from '../../../components/Button/Button';
import {Screen} from '../../../components/Screen/Screen';

export function LoginScreen() {
  return (
    <Screen>
      <Text marginBottom="s8" preset="headingLarge">
        Olá
      </Text>
      <Text preset="paragraphLarge" mb="s40">
        Digite seu e-mail e senha para entrar
      </Text>
      <TextInput
        boxProps={{mb: 's20'}}
        RightComponent={<Icon name="eyeOn" color="gray2" size={24} />}
        errorMessage="Mensagem de erro"
        label="E-mail"
        placeholder="Digite seu E-mail"
      />
      <Box>
        <TextInput
          boxProps={{mb: 's10'}}
          label="Senha"
          placeholder="Digite sua senha"
        />
      </Box>
      <Text preset="paragraphSmall" color="primary" bold>
        Esqueci minha senha
      </Text>

      <Button mt="s48" title="Entrar" />
      <Button preset="outline" mt="s12" title="Criar uma conta" />
    </Screen>
  );
}
