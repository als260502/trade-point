# CADASTRO DE USUÁRIO

**RF**

- O usuário deve poder cadastrar seu nome, email senha;
- O usuário deve poder selecionar se é vendedor ou cliente;
- O usuário deve receber um email com instruções para ativar sua conta;

**RNF**
- Utilizar o Ethereal para testar envios em ambiente de dev;
- Utilizar Amazon SES para envios em produção;
- O envio de email deve acontecer em segundo plano (background job);
- Utilizar BCrypytjs para criptografar a senha do usuário;

**RN**
- O link enviado por email para resetar sua senha, deve expirar em 2h;
- O email informado não pode ja ter sido utilizado;
- A senha deve ter no minimo 6 caracteres;

# LOGIN

**RF**

- O usuário deve poder logar informando sua senha e seu e-mail;
- O usuário deve poder clicar no link de recuperação de senha;
- O usuário deve poder clicar no link de cadastro de cliente

**RNF**

- Utilizar Jsonwebtoken para criar token de autenticação;
- Utilizar Amazon SES para envios em produção;
- Utilizar BCrypytjs para validar a criptografia da senha do usuário;

**RN**

- O e-mail informado precisa ser um ser um e-mail válido;
- Ambos os campos de e-mail e senha dever estar preenchidos;

# RECUPERAÇÃO DE SENHA

**RF**

- O usuário deve poder recuperar sua senha informando seu e-mail;
- O usuário deve receber um e-mail com instrução de recuperação de senha;
- O usuário deve poder resetar sua senha;

**RNF**

- Utilizar o Ethereal para testar envios em ambiente de dev;
- Utilizar Amazon SES para envios em produção;
- O envio de email deve acontecer em segundo plano (background job);

**RN**

- O link enviado por email para resetar sua senha, deve expirar em 2h;
- O usuário precisa confirmar a nova senha ao resetar;

# ATUALIZAÇÃO DE PERFIL

**RF**

- O usuário deve poder atualizar seu nome, email e senha;

**RNF**

**RN**

- O usuário não pode alterar seu e-mail para um email ja utilizado;
- Para atualizar sua senha, o usuário deve informar a senha antiga;
- Para atualizar sua senha, o usuário precisa confirmar a nova senha;

