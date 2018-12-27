echo "start build ...";

# abort on errors
set -e;

npm run build ;
git add . ;
git commit -a - m 'pre publish';

echo "start npm version $1 ..."; # major、minor、patch

order_list=(major、minor、patch);

echo "${order_list[@]}" | grep -wq $1 &&  npm version $1 || echo "No";
