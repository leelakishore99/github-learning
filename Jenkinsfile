pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                bat 'echo Checking out source code'
            }
        }

        stage('Test') {
            steps {
                bat 'echo Running automated test'
            }
        }

        stage('Report') {
            steps {
                bat 'echo Generating the test report'
            }
        }
    }
}