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
    post{
        always{
            echo 'Pipeline execution completed'
        }
        success{
            echo 'Pipeline completed successfully'
        }
        failure{
            echo 'Pipeline failed'
        }
    }
}