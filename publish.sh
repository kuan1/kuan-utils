echo starting npm version $1 ...; # major、minor、patch

order_list=(major、minor、patch)

echo "${order_list[@]}" | grep -wq $1 &&  npm version $1 || echo "No";
