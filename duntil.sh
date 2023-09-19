#!/usr/bin/bash

dstart="2023-08-28"
dend="2024-01-31"
daysuntil=$((($(date +%s --date $dend) - $(date +%s)) / (3600 * 24)))
weeksuntil=$((daysuntil / 7))
totaldaysuntil=$((($(date +%s --date $dend) - $(date +%s --date $dstart)) / (3600 * 24)))
totalweeksuntil=$((totaldaysuntil / 7))
daynb=$((totaldaysuntil - daysuntil))
weeknb=$((totalweeksuntil - weeksuntil))
percentage=$((100 * daynb / totaldaysuntil))

twidth=$(($(tput cols) - 5))
passedtime=$((daynb * twidth / totaldaysuntil))
timeleft=$((daysuntil * twidth / totaldaysuntil))

echo "${BOLD}${RED}$daysuntil days left${RESETCOLORS}${GRAY} until $dend ${WHITE}($totalweeksuntil weeks) | ${BOLD}day $daynb / $totaldaysuntil days (week $weeknb / $totalweeksuntil)${RESETCOLORS}"

echo -ne "${BOLD}"
for ((i = 0; i < $passedtime; i++)); do
    echo -ne "#"
done
echo -ne "${RESETCOLORS}${GRAY}"
for ((i = 0; i < $timeleft; i++)); do
    echo -ne "-"
done
echo "${BOLD}${WHITE} $percentage%${RESETCOLORS}"
