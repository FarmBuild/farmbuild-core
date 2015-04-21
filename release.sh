#!/bin/bash

if [ -z "$1" ]
  then
    echo "You must specify the message for release"
    exit 1
fi
MSG=$1

echo "pushing to master with $MSG"

git add .
git rm -r $(git ls-files --deleted) 
git commit -m "$MSG"
git push origin master

./patch.sh 

npm run dist

git add .
git rm -r $(git ls-files --deleted)
git commit -m "$MSG"
git push origin master

