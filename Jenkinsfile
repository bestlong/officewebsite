pipeline {
  agent {
    docker {
      image 'node:7.8'
    }
    
  }
  stages {
    stage('build') {
      steps {
        dir(path: './readbookweb') {
          sh 'hostname'
          sh 'pwd'
          sh 'ls -la'
          sh 'ls -la /'
          sh 'cd readbookweb'
          sh 'pwd'
        }
        
      }
    }
    stage('test') {
      steps {
        dir(path: 'readbookweb') {
          sh 'hostname'
          sh 'pwd'
          sh 'npm run test'
        }
        
      }
    }
  }
}