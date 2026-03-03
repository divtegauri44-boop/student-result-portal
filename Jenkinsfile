pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                echo 'Cloning Code from GitHub...'
                checkout scm
            }
        }
        
        stage('Build') {
            steps {
                echo 'Building Project...'
                bat 'dir' 
            }
        }

        stage('Test') {
            steps {
                echo 'Testing index.html...'
                // Windows साठी 'if exist' कमांड
                bat 'if exist index.html (echo "Test Passed") else (echo "Test Failed" && exit 1)'
            }
        }
    }
}
