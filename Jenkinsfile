pipeline {
    agent any



    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'master', url: 'https://github.com/TuanFaied/dispensary-management-system.git'
            }
        }
        
        stage('Build Spring Boot App') {
            steps {
                script {
                    dir('baackend') {
                        sh 'mvn clean package'
                        sh 'docker build -t spring-boot-app .'
                    }
                }
            }
        }
        
        stage('Build React App') {
            steps {
                script {
                    
                    sh 'docker build -t react-app .'
                    
                }
            }
        }
        
        stage('Deploy with Docker Compose') {
            steps {
                script {
                    sh 'docker-compose -f docker-compose.yml up -d'
                }
            }
        }
    }

    post {
        always {
            // Clean up Docker environment after build
            // sh 'docker-compose down'
        }
        success {
            echo 'Build and deployment successful!'
        }
        failure {
            echo 'Build or deployment failed.'
        }
    }
}


