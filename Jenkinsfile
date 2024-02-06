pipeline{
    agent any
    stages {
        stage('Cloning Git') {
            steps{
                echo 'Cloning the repo...'
                git([url: 'https://github.com/DanielSPearson/metapix.git', branch: 'master', credentialsId: 'github_access'])
                echo 'Repo cloned successfully'
            }
        }
        stage("Build") {
            steps {
                echo 'Building docker image...'
                script {
                    dockerImage = docker.build(metapix)
                }
                echo 'Docker image built successfully'
            }
        }
    }
}