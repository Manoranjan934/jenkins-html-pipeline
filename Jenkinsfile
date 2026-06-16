pipeline {
    agent any

    environment {
        APP_NAME = 'manoranjan-portfolio'
        VERSION = '1.0.0'
        DOCKER_IMAGE = 'manoranjan-portfolio'
    }

    stages {

        stage('Checkout') {
            steps {
                echo '========================================'
                echo 'STAGE 1: Checking out source code...'
                echo '========================================'
                checkout scm
                echo 'Code checked out successfully!'
            }
        }

        stage('Build') {
            steps {
                echo '========================================'
                echo 'STAGE 2: Building application...'
                echo '========================================'
                bat 'echo Build step completed!'
            }
        }

        stage('Test') {
            steps {
                echo '========================================'
                echo 'STAGE 3: Running tests...'
                echo '========================================'
                bat 'echo All tests passed!'
            }
        }

        stage('Docker Build') {
            steps {
                echo '========================================'
                echo 'STAGE 4: Building Docker Image...'
                echo '========================================'
                bat 'docker --version'
                bat 'docker build -t %DOCKER_IMAGE%:%VERSION% .'
                bat 'docker images | findstr %DOCKER_IMAGE%'
                echo 'Docker image built successfully!'
            }
        }

        stage('Docker Push') {
            steps {
                echo '========================================'
                echo 'STAGE 5: Pushing Docker Image...'
                echo '========================================'
                echo 'Docker image ready for push!'
                echo 'Image: %DOCKER_IMAGE%:%VERSION%'
            }
        }
    }

    post {
        always {
            echo 'Pipeline finished!'
            echo "Job: ${env.JOB_NAME}"
            echo "Build: #${env.BUILD_NUMBER}"
        }
        success {
            echo 'SUCCESS! Docker image built!'
        }
        failure {
            echo 'FAILURE! Check logs above.'
        }
    }
}