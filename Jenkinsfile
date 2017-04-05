pipeline {
  agent {
    docker {
      image 'node:7.8'
    }
    
  }
  stages {
    stage('build') {
      steps {
        dir(path: 'readbookweb') {
          sh 'hostname'
          sh '''pwd
ls -la'''
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