pipeline {
    agent any

    parameters {
        choice(
            name: 'TEST_ENV',
            choices: ['qa', 'staging'],
            description: 'Select the environment'
        )
    }

    stages {

        stage('Environment check') {
            steps {
                bat 'node --version'
                bat 'npm --version'
            }
        }

        stage('Install dependencies') {
            steps {
                bat 'npm ci'
            }
        }

        stage('Install browser') {
            steps {
                bat 'npx playwright install chromium'
            }
        }

        stage('Test') {
            steps {

                bat 'echo Running tests against: %TEST_ENV%'

                withCredentials([
                    usernamePassword(
                        credentialsId: 'playwright-login',
                        usernameVariable: 'TEST_USERNAME',
                        passwordVariable: 'TEST_PASSWORD'
                    )
                ]) {
                    bat 'npx playwright test tests/tryingArea.spec.ts'
                }
            }
        }
    }

    post {
        always {
            echo 'Pipeline execution completed'

            archiveArtifacts artifacts: 'playwright-report/**',
                             allowEmptyArchive: true

            archiveArtifacts artifacts: 'test-results/**',
                             allowEmptyArchive: true

            junit 'test-results/results.xml'
        }

        success {
            echo 'Pipeline completed successfully'
        }

        failure {
            echo 'Pipeline failed'
        }
    }
}