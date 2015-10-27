#!/usr/bin/env bash
if [ ! -h .node_modules ]; then
    ln -s /usr/src/.node_modules .node_modules
    echo '[fluxer] Link node modules'
fi

gulp watch