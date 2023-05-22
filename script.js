// Função para realizar uma requisição GET
function getUsers() {
  fetch('/api/users')
    .then(response => response.json())
    .then(data => console.log('Lista de usuários:', data))
    .catch(error => console.error('Erro ao obter a lista de usuários:', error));
}

// Função para realizar uma requisição POST para criar um novo usuário
function createUser() {
  var userData = {
    nome: 'John Doe',
    email: 'johndoe@example.com'
  };

  fetch('/api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userData)
  })
    .then(response => response.json())
    .then(data => console.log('Novo usuário criado:', data))
    .catch(error => console.error('Erro ao criar um novo usuário:', error));
}

// Função para realizar uma requisição GET dos detalhes de um usuário específico
function getUserDetails(userId) {
  fetch(`/api/users/${userId}`)
    .then(response => response.json())
    .then(data => console.log('Detalhes do usuário:', data))
    .catch(error => console.error('Erro ao obter os detalhes do usuário:', error));
}

// Função para realizar uma requisição PUT para atualizar os dados de um usuário específico
function updateUser(userId) {
  var updatedUserData = {
    nome: 'Jane Doe'
  };

  fetch(`/api/users/${userId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(updatedUserData)
  })
    .then(response => response.json())
    .then(data => console.log('Usuário atualizado:', data))
    .catch(error => console.error('Erro ao atualizar o usuário:', error));
}

// Função para realizar uma requisição DELETE para excluir um usuário específico
function deleteUser(userId) {
  fetch(`/api/users/${userId}`, {
    method: 'DELETE'
  })
    .then(response => response.json())
    .then(data => console.log('Usuário excluído:', data))
    .catch(error => console.error('Erro ao excluir o usuário:', error));
}

// Executar as tarefas em sequência
getUsers(); // Obter a lista de usuários

createUser(); // Criar um novo usuário

// Aguardar um tempo para garantir que o novo usuário seja criado antes de obter seus detalhes
setTimeout(() => {
  getUserDetails(userId); // Obter os detalhes do usuário recém-criado

  // Aguardar um tempo para garantir que os detalhes do usuário sejam obtidos antes de atualizá-lo
  setTimeout(() => {
    updateUser(userId); // Atualizar o nome do usuário

    // Aguardar um tempo para garantir que o usuário seja atualizado antes de obter seus detalhes novamente
    setTimeout(() => {
      getUserDetails(userId); // Obter os detalhes atualizados do usuário

      // Aguardar um tempo para garantir que os detalhes atualizados do usuário sejam obtidos antes de excluí-lo
      setTimeout(() => {
        deleteUser(userId); // Excluir o usuário

        // Aguardar um tempo para garantir que o usuário seja excluído antes de obter a lista atualizada de usuários
        setTimeout(() => {
          getUsers(); // Obter a lista de usuários atualizada após
