#!/bin/bash
echo "This script will run three sets of tests at once"

./runTest.sh & 
./runTest.sh &
./runTest.sh &
./runTest.sh &
./runTest.sh &
./runTest.sh & 
./runTest.sh &
./runTest.sh &
./runTest.sh &
./runTest.sh &

wait 

open http://localhost:8080