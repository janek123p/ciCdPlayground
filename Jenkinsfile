pipeline {
    agent any
    tools {
        nodejs 'yarn'
    }

    stages {
        stage('init') {
            steps {
                script {
                    currentBuild.displayName = "Deploy ${env.GIT_URL.split('/')[3]} (#${BUILD_NUMBER})"
                    currentBuild.description = "CI/CD workshop pipeline: builds, tests and deploys the app to the S3 playground."
                }
            }
        }

        stage('install') {
            steps {
                sh 'yarn'
            }
        }

        stage('build') {
            steps {
                sh 'yarn build'
            }
        }

        stage("test") {
            steps {
                sh 'yarn test'
            }
        }

        stage ("e2e") {
            steps {
                sh 'yarn test:e2e'
            }
        }

        stage('deploy') {
            steps {
                s3Upload consoleLogLevel: 'INFO', 
                  dontSetBuildResultOnFailure: false, 
                  dontWaitForConcurrentBuildCompletion: false, 
                  entries: [[
                      bucket: "cicd-workshop-playground/${env.GIT_URL.split('/')[3]}", 
                      excludedFile: '', 
                      flatten: false, 
                      gzipFiles: false, 
                      keepForever: false, 
                      managedArtifacts: false, 
                      noUploadOnFailure: false, 
                      selectedRegion: 'eu-central-1', 
                      showDirectlyInBrowser: false, 
                      sourceFile: 'public/**/*.*', 
                      storageClass: 'STANDARD', 
                      uploadFromSlave: false, 
                      useServerSideEncryption: false
                    ]], 
                    pluginFailureResultConstraint: 'FAILURE', 
                    profileName: 'role-based-access', 
                    userMetadata: []
            }
        }
    }

    post {
        always {
            junit allowEmptyResults: true, testResults: 'reports/*.xml'
        }
    }
}
