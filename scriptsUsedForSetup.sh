docker pull cypress/included:5.2.0
brew cask install xquartz

sudo npm install --unsafe-perm=true --allow-root cypress
sudo cypress open

# disregard below
# # OPEN https://fredrikaverpil.github.io/2016/07/31/docker-for-mac-and-gui-applications/
# export IP=$(ifconfig en0 | grep inet | awk '$1=="inet" {print $2}')
# export DISPLAY=host.docker.internal:0
# unset DISPLAY
# export CYPRESS_baseUrl=http://localhost:1234
# xhost +
# xhost + $IP
# docker run -it \
#   --network host \
#   -v ~/.Xauthority:/root/.Xauthority:ro \
#   -e DISPLAY \
#   -v $PWD:/e2e \
#   -w /e2e \
#   --entrypoint '' \
#   cypress/included:5.2.0 npx cypress open --project .
