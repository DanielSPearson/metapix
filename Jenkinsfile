pipeline{
    agent any
    stages {
        stage("Build") {
            steps {
                echo 'Building docker image...'
                sh 'docker build -t metapix'
                echo 'Docker image built successfully'
            }
        }
    }
}