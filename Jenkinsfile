void setBuildStatus(String message, String state) {
  step([
      $class: "GitHubCommitStatusSetter",
      reposSource: [$class: "ManuallyEnteredRepositorySource", url: "git@github.com:Eminemvin/node-problem-sets.git"],
      contextSource: [$class: "ManuallyEnteredCommitContextSource", context: "ci/jenkins/build-status"],
      errorHandlers: [[$class: "ChangingBuildStatusErrorHandler", result: "UNSTABLE"]],
      statusResultSource: [ $class: "ConditionalStatusResultSource", results: [[$class: "AnyBuildResult", message: message, state: state]] ]
  ]);
}


pipeline {
    agent {
        docker {
            image 'node:12.14.0-alpine'
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
    post {
        success {
            setBuildStatus("Build succeeded", "SUCCESS");
        }
        failure {
            setBuildStatus("Build failed", "FAILURE");
        }
    }
}