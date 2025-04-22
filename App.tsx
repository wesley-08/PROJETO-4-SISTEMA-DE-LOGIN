import React, { useState } from 'react';
import { Alert, Image, Pressable, SafeAreaView, StyleSheet, Text, TextInput, View,} from 'react-native';

export default function App() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [pagina, setPagina] = useState<'login' | 'usuario' | 'resetar' | 'criar'>('login');

  const [conta, setConta] = useState({
    email: 'admin@admin.com',
    senha: '1234',
    nome: 'wesley',
    nascimento: '03/07/2008',
  });

  const handleLogin = () => {
    if (email === conta.email && senha === conta.senha) {
      alert('Login successful');
      setEmail('');
      setSenha('');
      setPagina('usuario');
    } else {
      alert('Login failed');
    }
  };

  const criarConta = (novoEmail: string, novaSenha: string, nome: string, nascimento: string) => {
    setConta({
      email: novoEmail,
      senha: novaSenha,
      nome,
      nascimento,
    });
    setPagina('login');
    alert('Conta criada com sucesso!');
  };

  if (pagina === 'usuario') {
    return (
      <SafeAreaView style={styles.container}>
        <Image source={{ uri: 'https://i.imgur.com/FN96ykw.png' }} style={styles.userImage} />

        <Text style={styles.userText}>Nome: {conta.nome}</Text>
        <Text style={styles.userText}>Email: {conta.email}</Text>
        <Text style={styles.userText}>Nascimento: {conta.nascimento}</Text>

        <Pressable style={styles.button} onPress={() => setPagina('login')}>
          <Text style={styles.buttonText}>Sair</Text>
        </Pressable>
      </SafeAreaView>
    );
  }

  if (pagina === 'resetar') {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Resetar Senha</Text>
        <Text style={styles.subtitle}>Entre em contato com o suporte para resetar sua senha.</Text>
        <Pressable onPress={() => setPagina('login')}>
          <Text style={styles.link}>Voltar</Text>
        </Pressable>
      </SafeAreaView>
    );
  }

  if (pagina === 'criar') {
    const [novoEmail, setNovoEmail] = useState('');
  const [novaSenha, setNovaSenha] = useState('');
    const [novoNome, setNovoNome] = useState('');
    const [novoNascimento, setNovoNascimento] = useState('');

    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Criar Conta</Text>
        <TextInput
          style={styles.input}
          placeholder="Nome completo"
          value={novoNome}
          onChangeText={setNovoNome}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={novoEmail}
          onChangeText={setNovoEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry
          value={novaSenha}
          onChangeText={setNovaSenha}
        />
        <TextInput
          style={styles.input}
          placeholder="Data de nascimento"
          value={novoNascimento}
          onChangeText={setNovoNascimento}
        />
        <Pressable
          style={styles.button}
          onPress={() => criarConta(novoEmail, novaSenha, novoNome, novoNascimento)}
        >
          <Text style={styles.buttonText}>Criar Conta</Text>
        </Pressable>
        <Pressable onPress={() => setPagina('login')}>
          <Text style={styles.link}>Voltar</Text>
        </Pressable>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Image source={{ uri: 'https://i.imgur.com/FN96ykw.png' }} style={styles.logo} />
      <Text style={styles.title}>Sistema de Login</Text>
      <Text style={styles.subtitle}>Bem vindo(a)! Digite seus dados abaixo.</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite seu email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="********"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />

      <Pressable onPress={() => setPagina('resetar')}>
        <Text style={styles.linkRight}>Esqueci minha senha</Text>
      </Pressable>

      <Pressable style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </Pressable>

      <View style={styles.registerContainer}>
        <Text style={styles.grayText}>Não tem uma conta?</Text>
        <Pressable onPress={() => setPagina('criar')}>
          <Text style={styles.link}> Cadastre-se</Text>
        </Pressable>
      </View>

      <Text style={styles.footer}>Criado por Wesley</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 20,
  },
  userImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  userText: {
    fontSize: 16,
    marginBottom: 5,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 14,
    color: '#777',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
  },
  link: {
    color: '#4162b7',
    fontWeight: 'bold',
    marginTop: 10,
  },
  linkRight: {
    alignSelf: 'flex-end',
    color: '#4162b7',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#4162b7',
    borderRadius: 8,
    padding: 14,
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  registerContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  grayText: {
    color: '#999',
  },
  footer: {
    fontSize: 12,
    color: '#777',
  },
});
