#!/bin/bash

# Lista de repositórios e branches
REPOS=(
    "https://github.com/memeco/memeco.github.io main"
    "https://git.cloudflare.com/memeco/memeco-memeco-github-io main"
    "https://github.com/memeco/portfolio main"
)

# Mensagem de commit (padrão é "Update")
COMMIT_MESSAGE="Update"

# Se um argumento for fornecido, use-o como mensagem de commit
if [ -n "$1" ]; then
  COMMIT_MESSAGE="$1"
fi

# Itera sobre cada repositório e branch
for repo in "${REPOS[@]}"; do
    # Separa o URL do branch
    URL=$(echo "$repo" | cut -d' ' -f1)
    BRANCH=$(echo "$repo" | cut -d' ' -f2)

    # Adiciona a origem remota, se não existir
    if ! git remote get-url --quiet $URL &> /dev/null; then
        git remote add $URL $URL
    fi

    # Adiciona todos os arquivos modificados
    git add .

    # Fazer commit com a mensagem especificada
    git commit -m "$COMMIT_MESSAGE"

    # Fazer push para o repositório remoto
    git push $URL $BRANCH

    echo "Deploy para $URL concluído com sucesso!"
done
