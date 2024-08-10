#!/bin/bash

# Lista de repositórios e branches
REPOS=(
    "origin https://github.com/memeco/memeco.github.io main"
    "cloudflare https://git.cloudflare.com/memeco/memeco-memeco-github-io main"
    "portfolio https://github.com/memeco/portfolio main"
)

# Mensagem de commit (padrão é "Update")
COMMIT_MESSAGE="Update"

# Se um argumento for fornecido, use-o como mensagem de commit
if [ -n "$1" ]; then
  COMMIT_MESSAGE="$1"
fi

# Itera sobre cada repositório e branch
for repo in "${REPOS[@]}"; do
    # Separa o nome do remote, URL e branch
    NAME=$(echo "$repo" | cut -d' ' -f1)
    URL=$(echo "$repo" | cut -d' ' -f2)
    BRANCH=$(echo "$repo" | cut -d' ' -f3)

    # Adiciona a origem remota, se não existir
    if ! git remote | grep -q "$NAME"; then
        git remote add $NAME $URL
    fi

    # Adiciona todos os arquivos modificados
    git add .

    # Verifica se há mudanças para commitar
    if git diff-index --quiet HEAD --; then
        echo "Nenhuma mudança para commitar."
    else
        # Fazer commit com a mensagem especificada
        git commit -m "$COMMIT_MESSAGE"

        # Fazer push para o repositório remoto
        git push $NAME $BRANCH

        echo "Deploy para $URL concluído com sucesso!"
    fi
done
