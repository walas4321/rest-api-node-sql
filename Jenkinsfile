// pipeline {
//     agent any
//     stages {
//         stage('Hello') {
//             steps {
//                 echo 'Hello Wallas alberto aaaa'
//                 //sh "echo 'hola mundo'"
//             }
//         }
//     }
// }


pipeline {
    agent any
    stages {
        stage("paso 1"){
            steps {
                script {
                    sh "echo 'Hola mundo'"
                }
            }
        }
    }

    post {
        always {
            sh "echo 'fase always'"
        }
        success {
            sh "echo 'fase success'"
        }
        failure {
            sh "echo 'fase failure'"
        }
    }

}