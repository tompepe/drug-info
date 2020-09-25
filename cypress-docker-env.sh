# return the .env file with injected values from the local environment
# 1. constants EG: var=someValue
# 2. environment variable value hoisted from the local environment EG: var=$hoist_my_value
# 3. hoisted with default value EG: var=${hoist_if_non_empty:-default}
# hoisted variables with out any value in the local environment will be omitted EG: var=$never_set will result in an empty space
# limitations: only ONE $ is allowed per line

cat cypress-docker.env | \
    awk -F '$' '{ if ($0 ~ /\$/)  print "[ ! -z \"$" $2 "\" ] && echo " $0; else print "echo " $0; }' | \
    xargs -I {} sh -c "{}"
