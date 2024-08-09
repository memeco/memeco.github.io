#!/bin/bash

# Nome do repositório e branch
REPO_URL="https://github.com/memeco/memeco.github.io"
BRANCH="main"

# Mensagem de commit
COMMIT_MESSAGE="Update"

# Adicionar todos os arquivos modificados
git add .

# Fazer commit com a mensagem especificada
git commit -m "$COMMIT_MESSAGE"

# Fazer push para o GitHub Pages
git push origin $BRANCH

# Fazer push para o Cloudflare Pages
git push cloudflare $BRANCH

echo "Deploy concluído com sucesso!"
