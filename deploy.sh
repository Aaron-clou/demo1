#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
yarn run docs:build

# 进入生成的文件夹
cd ./dist


git init
git add -A
git commit -m "123"
git push -f https://github.com/Aaron-clou/demo1 master:gh-pages # 推送到github gh-pages分支

cd - # 退回开始所在目录
rm -rf ./dist
