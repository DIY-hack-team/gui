#!/usr/bin/env bash
curDir="$( cd "$( dirname "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"
. ${curDir}/.env

npm run build

rm -rf build
mkdir build
sudo tar cfz build/gui.tar.gz etc dist
sudo chown $(id -un):$(id -gn) build/gui.tar.gz
ssh ${DEPLOY_USER}@${DEPLOY_HOST} "rm -rf /opt/gui; mkdir /opt/gui"
scp -r ${curDir}/build/gui.tar.gz ${DEPLOY_USER}@${DEPLOY_HOST}:/opt/gui/gui.tar.gz
ssh ${DEPLOY_USER}@${DEPLOY_HOST} "cd /opt/gui && tar xf gui.tar.gz && sudo chown root:root /opt/gui/etc.nginx-selfsigned.key && sudo chmod 600 /opt/gui/etc.nginx-selfsigned.key && sudo service nginx restart"
