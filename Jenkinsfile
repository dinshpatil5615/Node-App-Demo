pipeline {
    agent any

    environment {
        IMAGE = "dineshpatil0908/docker-ci-cd"
        TARGET_USER = "azureuser"
        TARGET_HOST = "20.123.41.70"
    }

    stages {

        stage("Checkout") {
            steps {
                git branch: 'main',
                    url: 'https://github.com/dinshpatil5615/Node-App-Demo.git'
            }
        }

        stage("Build Docker Image") {
            steps {
                sh """
                    docker build -t ${IMAGE}:latest .
                """
            }
        }

        stage("DockerHub Login") {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub', usernameVariable: 'DOCKERHUB_USER', passwordVariable: 'DOCKERHUB_PSW')]) {
                    sh '''
                        echo $DOCKERHUB_PSW | docker login -u $DOCKERHUB_USER --password-stdin
                    '''
                }
            }
        }

        stage("Push Image") {
            steps {
                sh "docker push ${IMAGE}:latest"
            }
        }

        stage("Deploy to Target") {
            steps {
                sh """
                    ssh -o StrictHostKeyChecking=no ${TARGET_USER}@${TARGET_HOST} '
                        docker pull ${IMAGE}:latest;
                        docker rm -f node-cicd-app || true;
                        docker run -d --name node-cicd-app -p 3000:3000 ${IMAGE}:latest;
                    '
                """
            }
        }
    }
}
