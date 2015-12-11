#!/bin/sh

# build ES5 modules to lib
rm -rf lib
../.bin/babel src --out-dir lib
