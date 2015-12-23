#!/bin/sh

# build ES5 modules to lib
rm -rf lib
babel src --out-dir lib
