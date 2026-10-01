pipeline {
    agent any

    parameters {
        choice(
            name: 'TEST_ENV',
            choices: ['qa', 'staging'],
            description: 'Select the environment'
        )
        choice(
        name: 'BROWSER',
        choices: ['chromium', 'firefox', 'webkit'],
        description: 'Select the browser'
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
                bat 'npx playwright install %BROWSER%'
            }
        }

        stage('Parallel Tests') {
        parallel {

        stage('Trying Area Tests') {
            steps {
                withCredentials([
                    usernamePassword(
                        credentialsId: 'playwright-login',
                        usernameVariable: 'TEST_USERNAME',
                        passwordVariable: 'TEST_PASSWORD'
                    )
                ]) {
                    bat 'echo Starting Trying Area tests'
                    bat 'npx playwright test tests/tryingArea.spec.ts --project=%BROWSER% --workers=1'
                }
            }
        }

        stage('OrangeHRM Tests') {
            steps {
                bat 'echo Starting OrangeHRM tests'
                bat 'npx playwright test tests/pomOrangeHRMLogin.spec.ts --project=%BROWSER% --workers=1'
            }
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