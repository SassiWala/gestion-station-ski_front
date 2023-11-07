pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'master', url: 'https://github.com/SassiWala/gestion-station-ski_front.git'
            }
        }

        stage('Build') {
            steps {
                sh 'npm install'
                sh 'npm run build'
            }
        }

        stage('Docker Build') {
            steps {
                   sh "docker build -t wsassi/gestionSkiFront ."
            }
        }

        stage('Docker Push') {
            steps {
                // Push the Docker image to a container registry.
                sh "docker login "
                sh "docker push wsassi/gestionSkiFront "
            }
        }
        stage("Docker run app"){
           sh "docker pull wsassi/gestionSkiFront:latest"
           sh "docker run -d -p 3001:3001 gestionSkiFront:latest"

        }
    }
}
