pipeline {

    agent any

    stages {

        stage('Checkout') {
            steps {
                echo 'Downloading source code...'
            }
        }

        stage('Verify Files') {
            steps {
                bat 'dir'
            }
        }

        stage('Build') {
            steps {
                echo 'Building Portfolio Project'
            }
        }

        stage('Archive') {
            steps {
                archiveArtifacts artifacts: '*.html'
            }
        }
    }

    post {

        success {
            echo 'Build Successful'
        }

        failure {
            echo 'Build Failed'
        }
    }
}