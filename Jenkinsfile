pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                echo 'Source downloaded'
            }
        }

        stage('Verify') {
            steps {
                sh 'ls -la'
            }
        }

        stage('Docker Build') {
            steps {
                sh '''
                rsync -av --delete ./ root@192.168.115.133:/var/lib/docker/volumes/apachevol/_data
                '''
            }
        }

        stage('verify deployment') {
            steps {
                sh '''
                curl -f http://192.168.115.133:8080
                '''
            }
        }

    }
}