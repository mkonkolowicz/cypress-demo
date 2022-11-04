#!/bin/bash
echo "This script will run three sets of tests at once"

CYPRESS_API_URL="http://localhost:1234/" npx cy2 run --record --key somekey --ci-build-id techbash-demo-$( date '+%F_%H:%M:%S' ) --parallel &
CYPRESS_API_URL="http://localhost:1234/" npx cy2 run --record --key somekey --ci-build-id techbash-demo-$( date '+%F_%H:%M:%S' ) --parallel &
CYPRESS_API_URL="http://localhost:1234/" npx cy2 run --record --key somekey --ci-build-id techbash-demo-$( date '+%F_%H:%M:%S' ) --parallel &

open http://localhost:8080