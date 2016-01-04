#!/bin/sh

# build ES5 modules to lib
rm -rf lib
NODE_ENV=production babel src --out-dir lib
