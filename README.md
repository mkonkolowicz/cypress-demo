# cypress-demo

How do we improve reliability, visibility and speed?

1. Reliability: Cypress makes running and debugging tests easier (5 mins)
* npx cypress run

2. Speed & Visibility (10 mins)
* rerun above tests with parallelization turned on
* docker-compose -f ./docker-compose.minio.yml up 
* (terminal 1) CYPRESS_API_URL="http://localhost:1234/" npx cy2 run --record --key somekey --ci-build-id hello-cypress-6 --parallel
* (terminal 2) CYPRESS_API_URL="http://localhost:1234/" npx cy2 run --record --key somekey --ci-build-id hello-cypress-6 --parallel
* (terminal 3) CYPRESS_API_URL="http://localhost:1234/" npx cy2 run --record --key somekey --ci-build-id hello-cypress-6 --parallel
