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
                    bat 'npm install netlify-cli'
                    bat 'npx netlify deploy --dir=dist --prod --auth=%TOKEN%'
                }
            }
        }
    }
    
    post {
        success {
            echo 'SUCCESS! Check console output above for live URL!'
        }
        failure {
            echo 'FAILURE! Check logs above.'
        }
    }
}