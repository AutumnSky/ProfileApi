#!/bin/bash
tar --exclude='node_modules' --exclude='build' -cvf profile-api.tar ./
scp -i /Users/autumn/.ssh/aws_ec2_t2micro.pem profile-api.tar ec2-user@15.164.45.155:~
rm profile-api.tar

ssh -i /Users/autumn/.ssh/aws_ec2_t2micro.pem ec2-user@15.164.45.155 << 'ENDSSH'
pm2 stop profile-api
rm -rf profile-api
mkdir profile-api
tar -xvf profile-api.tar -C profile-api
rm profile-api.tar
cd profile-api
yarn install
yarn start
ENDSSH