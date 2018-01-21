BRANCH="master"
SHA=`git rev-parse --verify HEAD`

if [ "$TRAVIS_PULL_REQUEST" != "false" -o "$TRAVIS_BRANCH" != "$BRANCH" ]; then
    echo "Skipping deploy to production server; The request or commit is not on master"
    exit 0
fi

VERSION=$BRANCH-$SHA
ZIP=$VERSION.zip

openssl aes-256-cbc -K $encrypted_47cc4c169e78_key -iv $encrypted_47cc4c169e78_iv -in CloudCV.json.enc -out CloudCV.json -d
aws configure set default.region us-west-2
# Authenticate against our Docker registry
eval $(aws ecr get-login --no-include-email | sed 's|https://||')

# Build and push the image
docker build -t cloudcv/django -f docker/production/django/Dockerfile .
docker tag cloudcv/django:latest $AWS_ACCOUNT_ID.dkr.ecr.us-west-2.amazonaws.com/cloudcv/django:latest
docker push $AWS_ACCOUNT_ID.dkr.ecr.us-west-2.amazonaws.com/cloudcv/django:latest

docker build -t cloudcv/nodejs -f docker/production/nodejs/Dockerfile .
docker tag cloudcv/nodejs:latest $AWS_ACCOUNT_ID.dkr.ecr.us-west-2.amazonaws.com/cloudcv/nodejs:latest
docker push $AWS_ACCOUNT_ID.dkr.ecr.us-west-2.amazonaws.com/cloudcv/nodejs:latest

cd aws/production

# Replace the <AWS_ACCOUNT_ID> with the real ID
sed -i='' "s/<AWS_ACCOUNT_ID>/$AWS_ACCOUNT_ID/" Dockerrun.aws.json

# Zip up the Dockerrun file and .ebextensions directory with it
zip -r $ZIP Dockerrun.aws.json .ebextensions/ conf.d/

aws s3 cp $ZIP s3://$EB_BUCKET/$ZIP

# Create a new application version with the zipped up Dockerrun file
aws elasticbeanstalk create-application-version --application-name $APPLICATION \
    --version-label $VERSION --source-bundle S3Bucket=$EB_BUCKET,S3Key=$ZIP

# Update the environment to use the new application version
aws elasticbeanstalk update-environment --environment-name $ENVIRONMENT \
      --version-label $VERSION
