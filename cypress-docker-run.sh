docker run --rm -v $PWD:/root/e2e \
    --workdir=/root/e2e \
    --entrypoint="" \
    $(./cypress-docker-env.sh | awk '{ print "-e " $0 }' | xargs) \
    cypress/included:5.2.0 \
    /bin/bash -c \
    'cypress run --browser chrome'