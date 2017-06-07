#!/bin/bash

echo 'Building image'
docker build -t 7robertodantas/meformei-backend .

echo 'Pushing image to Dockerhub'
docker push 7robertodantas/meformei-backend

EOF