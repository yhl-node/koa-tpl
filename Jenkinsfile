pipeline {
  agent {
    label 'docker'
  }

  environment {
    NODE_PORT = 3200
  }

  stages {
    stage('Build') {
      steps {
        sh 'printenv'
        echo 'Building..'
        sh 'yarn'
      }
    }
    stage('Test') {
      steps {
        sh 'yarn lint'
        echo 'Testing..'
        sh 'yarn test'
      }
    }
    stage('Deploy') {
      when { branch 'master' }
      steps {
        script {
          def name = 'koa-tpl'
          def registry = 'https://registry.cn-shenzhen.aliyuncs.com'
          def namespace = 'yhl'
          echo "Deploying to ${name} in ${registry}"
          docker.withRegistry(registry) {
            def image = docker.build("${namespace}/${name}:${env.BUILD_ID}")
            image.inside {
              sh 'yarn --prod=false'
              sh 'yarn test'
            }
            image.push()
            image.push('latest')
          }
        }
      }
    }
  }

  post {
    always {
      echo 'One way or another, I have finished'
      deleteDir() /* clean up our workspace */
    }
    success {
      echo 'I succeeeded!'
    }
    unstable {
      echo 'I am unstable :/'
    }
    failure {
      echo 'I failed :('
      mail to: 'team@example.com',
          subject: "Failed Pipeline: ${currentBuild.fullDisplayName}",
          body: "Something is wrong with ${env.BUILD_URL}"
    }
    changed {
      echo 'Things were different before...'
    }
  }
}
