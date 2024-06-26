#!/bin/bash
BLUE='\033[1;34m#'
YELLOW="\e[33m"
GREEN="\e[32m"
END="\e[0m"

echo -e "${GREEN}-----------------------------------------------------------------------${END}"
echo -e "${BLUE} NPM Scripts ${END}"
echo -e "${GREEN}-----------------------------------------------------------------------${END}"
echo -e "Test scripts\n"
echo -e "${BLUE} test${END} - ${YELLOW}run unit tests${END}"
echo -e "${BLUE} test${END}:coverage - ${YELLOW}run unit tests with coverage${END}"
echo -e "${GREEN}-----------------------------------------------------------------------${END}"
echo -e "Repository scripts\n"
echo -e "${BLUE} build${END} - ${YELLOW}compile TypeScript files${END}"
echo -e "${BLUE} lint${END} - ${YELLOW}run ESLint and fix linting issues${END}"
echo -e "${BLUE} prepare${END} - ${YELLOW}install Husky hooks${END}"
echo -e "${BLUE} reset${END} - ${YELLOW}remove node_modules and package-lock.json then reinstall dependêncies${END}"
echo -e "${BLUE} clear${END}:build - ${YELLOW}remove all build files${END}"
echo -e "${BLUE} clear${END}:coverage - ${YELLOW}remove all coverage files${END}"
echo -e "${GREEN}-----------------------------------------------------------------------${END}"
exit 1