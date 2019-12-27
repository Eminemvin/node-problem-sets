pipeline {
    agent {
        docker {
            image 'node:6-alpine'
        }
    }
    environment {
        CI = 'true'
    }
    stages {
        stage('Build'){
            steps {
                sh 'npm install'
            }
        }
        stage('Test'){
            steps {
                sh 'npm test'
            }
            post {
                always {
                    step([$class: 'CoberturaPublisher', coberturaReportFile: 'coverage/cobertura-coverage.xml'])
                }
            }
        }
    }
}