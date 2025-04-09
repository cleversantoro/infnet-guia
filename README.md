# Overview

Essa é uma aplicação para gerenciar seus estudos no Infnet


## Getting Started

### Docker

A aplicação está configura para rodar com Docker e Docker Compose. Se você não possui o docker engine instalado, siga o tutorial de instalação na [documentação oficial](https://docs.docker.com/get-started/get-docker/).

Após instalar o docker engine:
```
# Rode esse comando se pretende rodar a aplicação em production mode
docker-compose up

# Rode esse comando se pretende rodar a aplicação em development mode
# Nesse modo o desenvolvedor tem acesso a hotreload feature
docker-compose up -f docker-compose.development.yaml
```

### CICD
Para CICD, o projeto faz uso do GitHub Actions, e para cada nova versão pasta apenas trocar o valor da mesma no package.json. A Action irá automaticamente pegar esse valor e atribuir a tag da imagem que for gerada.
Será necessário definir dois secrets, nas configurações do seu projeto no GitHub, com os valores necessários para acessar o seu docker hub: `DOCKER_USERNAME` & `DOCKER_PASSWORD`.


### Kubernetes
#### Minikube
Será necessario a instalação do minikube, siga as [instruções da documentação oficial](https://minikube.sigs.k8s.io/docs/start/?arch=%2Flinux%2Fx86-64%2Fstable%2Fbinary+download) para seu sistema operacional.

#### Kubectl
Será necessario a instalação do kubectl, siga as [instruções da documentação oficial](https://kubernetes.io/docs/tasks/tools/#kubectl) para seu sistema operacional.

#### Deploy Local
Siga os comandos a seguir para iniciar o minikube e fazer o deploy da aplicação no mesmo.

```
# Iniciar o minikube
minikube start


# Criar e subir sua imagem no Docker Hub
docker tag infnet-guia-app [usuarioDockerHub]/infnet-guia-app:latest
docker push [usuarioDockerHub]/infnet-guia-app:latest

# Levantar Deployment
kubectl apply -f guia-app.yaml

# Verificar Deployment
kubectl get deployments
kubectl get pods
kubectl describe deployment infnet-guia-app
minicube tunnel - se estiver usando minikube com docker 

# Redirecionar a porta do service no minikupe para localhost:3000
kubectl port-forward svc/guia-app-service 3000:3000
```

Acesse a aplicação em http://localhost:3000

##### ⚠️ **Atenção:** Se preferir ver um Dashboard, abra uma nova janela do terminal e rode o comando a seguir 
```
minikube dashboard
```