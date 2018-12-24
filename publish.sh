#!/usr/bin/env sh

# abort on errors
set -e

echo "start build ...";

npm run build ;
git add . ;
git commit -a - m 'pre publish';

echo "start npm version $1 ..."; # major、minor、patch

order_list=(major、minor、patch);

echo "${order_list[@]}" | grep -wq $1 &&  npm version $1 || echo "No";
