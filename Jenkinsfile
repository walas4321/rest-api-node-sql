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
                    echo "echo 'Hola mundoOOOO'"
                }
            }
        }
    }

    post {
        always {
            echo "echo 'fase alwaysSSSSSS'"
        }
        success {
            echo "echo 'fase successSSSS'"
        }
        failure {
            echo "echo 'fase failureEEEE'"
        }
    }

}