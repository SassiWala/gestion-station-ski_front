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
                sh 'npm i -D jest-worker@27.3.1'
                sh 'node --max_old_space_size=2768 node_modules/webpack-cli/bin/cli.js'
                sh 'npm run build'
            }
        }

        // stage('Docker Build') {
        //     steps {
        //            sh "docker build -t wsassi/gestionskifront ."
        //     }
        // }

        // stage('Docker Push') {
        //     steps {
        //         // Push the Docker image to a container registry.
        //         sh "docker login "
        //         sh "docker push wsassi/gestionskifront "
        //     }
        // }
        // stage("Docker run app"){
        //   steps{
        //      sh "docker pull wsassi/gestionskifront:latest"
        //    sh "docker run -d -p 3001:3001 gestionskifront:latest"
        //   }

        // }
    }
}
