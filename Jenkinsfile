pipeline {
    agent any

    stages {
	    stage('Environment check'){
            steps{
                bat 'node --version'
                bat 'npm --version'
            }
		}
        stage('Install dependencies'){
            steps{
                bat 'npm ci'
            }
        }
        stage('Install browser'){
            steps{
                bat 'npx playwright install chromium'
            }
        }
        stage('Test'){
            steps{
                bat 'npx playwright test tests/tryingArea.spec.ts'
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