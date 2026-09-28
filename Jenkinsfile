pipeline {
    agent any

    environment {
        BASE_URL = 'https://senthilsmartqahub.blogspot.com'
    }
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

            archiveArtifacts artifacts: 'playwright-report/**',
                     allowEmptyArchive: true

            archiveArtifacts artifacts: 'test-results/**',
                     allowEmptyArchive: true

            junit 'test-results/results.xml'
        }
        success{
            echo 'Pipeline completed successfully'
        }
        failure{
            echo 'Pipeline failed'
        }
    }
}