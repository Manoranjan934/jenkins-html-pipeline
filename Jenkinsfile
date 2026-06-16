pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        
        stage('Build') {
            steps {
                bat 'echo Build OK'
            }
        }
        
        stage('Test') {
            steps {
                bat 'echo Test OK'
            }
        }
        
        stage('Prepare') {
            steps {
                bat '''
                    if exist dist rmdir /S /Q dist
                    mkdir dist
                    copy index.html dist\\
                    xcopy /E /I /Y assets dist\\assets\\
                '''
            }
        }
        
        stage('Deploy') {
            steps {
                withCredentials([string(credentialsId: 'netlify-token', variable: 'TOKEN')]) {
                    bat 'echo TOKEN IS SET'
                    bat 'npm install -g netlify-cli'
                    bat 'netlify deploy --dir=dist --prod --auth=%TOKEN%'
                }
            }
        }
    }
}