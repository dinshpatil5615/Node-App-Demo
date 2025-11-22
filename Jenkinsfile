pipeline {
    agent any
    stages {

        stage('Clone Repo') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/dinshpatil5615/Node-App-Demo.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'echo "No tests yet... skipping!"'
            }
        }

        stage('Deploy to App Server') {
            steps {
                sh '''
                scp -r * azureuser@48.222.9.99:/home/azureuser/app
                ssh azureuser@48.222.9.99 "cd /home/azureuser/app && npm install && pm2 restart app || pm2 start app.js --name app"
                '''
            }
        }
    }
}
