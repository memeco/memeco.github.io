#!/bin/bash

# Nome do repositório e branch
REPO_URL="https://github.com/memeco/memeco.github.io"
BRANCH="main"

# Mensagem de commit (padrão é "Update")
COMMIT_MESSAGE="Update"

# Se um argumento for fornecido, use-o como mensagem de commit
if [ -n "$1" ]; then
  COMMIT_MESSAGE="$1"
fi

# Adicionar todos os arquivos modificados
git add .

# Fazer commit com a mensagem especificada
git commit -m "$COMMIT_MESSAGE"

# Fazer push para o repositório remoto
git push origin $BRANCH

echo "Deploy concluído com sucesso!"
