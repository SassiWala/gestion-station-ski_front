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
            }
        }

        stage('Docker Build') {
            steps {
                   sh "docker build -t wsassi/gestionskifront ."
            }
        }

        stage('Docker Push') {
            steps {
                // Push the Docker image to a container registry.
                sh "docker login "
                sh "docker push wsassi/gestionskifront "
            }
        }
        stage("Docker run app"){
          steps{
             sh "docker pull wsassi/gestionskifront:latest"
           sh "docker run -d -p 3001:3001 gestionskifront:latest"
          }

        }
    }
}
