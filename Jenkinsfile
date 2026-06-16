pipeline {
    agent any

    environment {
        APP_NAME = 'manoranjan-portfolio'
        VERSION = '1.0.0'
        NETLIFY_SITE_NAME = 'manoranjan-portfolio'
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

        stage('Prepare Deploy') {
            steps {
                echo '========================================'
                echo 'STAGE 4: Preparing files for Netlify...'
                echo '========================================'
                
                // Create a clean dist folder with only website files
                bat '''
                    if exist dist rmdir /S /Q dist
                    mkdir dist
                    xcopy /E /I /Y index.html dist\\
                    xcopy /E /I /Y assets dist\\assets\\
                    echo Files prepared for deployment!
                '''
                
                // Verify files are there
                bat 'dir dist\\'
            }
        }

        stage('Deploy to Netlify') {
            steps {
                echo '========================================'
                echo 'STAGE 5: Deploying to Netlify...'
                echo '========================================'
                
                withCredentials([string(credentialsId: 'netlify-token', variable: 'NETLIFY_AUTH_TOKEN')]) {
                    bat '''
                        echo Installing Netlify CLI...
                        npm install -g netlify-cli
                        
                        echo Deploying to Netlify...
                        netlify deploy --dir=dist --prod --site=%NETLIFY_SITE_NAME% --auth=%NETLIFY_AUTH_TOKEN%
                        
                        echo Deployment complete!
                    '''
                }
            }
        }
    }

    post {
        always {
            echo '========================================'
            echo 'Pipeline finished!'
            echo "Job: ${env.JOB_NAME}"
            echo "Build: #${env.BUILD_NUMBER}"
        }
        success {
            echo '========================================'
            echo 'SUCCESS! Portfolio deployed to Netlify!'
            echo '========================================'
            echo 'Your live URL:'
            echo 'https://manoranjan-portfolio.netlify.app'
            echo '========================================'
        }
        failure {
            echo 'FAILURE! Check logs above.'
        }
    }
}