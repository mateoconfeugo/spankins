spankins
========

# spankins

A Clojure web application designed to help you:
1) Automation/Orchestration that can be checked into souce control
2) DSL that translates directly into a function that encapsulates a workflow of CSP (communicating sequential processes)
3) Run dev-ops tasks fast

Project Contains:
* Working Demo
* Documentation of the code in the literate style
* Pallet deployment
* Publish artifact to repo
* Test framework
* Source Control Strategy

## Usage

Devops:

### Launch the application in a docker container
lein pallet up -P docker
### Push the application jar/uberjar to a private s3 bucket
lein deploy private
### Launch the application to prd/stg/qa aws/rs/docker
lein pallet up prd/stg/qa -P aws/rs/docker

##  Development

### Continuous run the test suite
lein autoexpect
### Run the clojurescript compiler in develoment
lein cljsbuild auto
### Run the test suite
lein test
### Create the documentation
lein marg

## License

Copyright © Matthew Burns 2014

Distributed under the Eclipse Public License, the same as Clojure.
