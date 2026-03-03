pipeline {
    agent any

    stages {

        stage('Clone Code') {
            steps {
                checkout scm
            }
        }

        stage('Build') {
            steps {
                sh 'ls -la'
            }
        }

        stage('Test') {
            steps {
                sh 'if [ -f index.html ]; then echo "Test Passed"; else exit 1; fi'
            }
        }

        stage('Deploy') {
            steps {
                sh 'mkdir -p /var/www/html/student-portal'
                sh 'cp -r * /var/www/html/student-portal/'
            }
        }
    }
}
