#!/bin/bash
CYPRESS_API_URL="http://localhost:1234/" npx cy2 run --record --key $( date '+%F_%H:%M:%S' ) --ci-build-id techbash-demo-$( date '+%F_%H:%M:%S' ) --parallel