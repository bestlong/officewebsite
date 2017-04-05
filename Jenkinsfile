pipeline {
  agent {
    docker {
      image 'node'
      args '7.8'
    }
    
  }
  stages {
    stage('build') {
      steps {
        dir(path: 'readbookweb') {
          sh 'npm install'
        }
        
      }
    }
    stage('test') {
      steps {
        sh 'npm run test'
      }
    }
  }
}