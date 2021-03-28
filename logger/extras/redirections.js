/*
    RoboScript Logger
        - Redirections

    Made by MyBadProjects
*/

/* Redirections */
    /* Console.print() */
console.print = function (String) {
    console.log(String);
};
    /* print() */
print = function (String) {
    console.log(String);
};
    /* Console.warning() */
console.warning = function (String) {
    console.warn(String);
};
    /* warning() */
warning = function (String) {
    console.warn(String);
};
    /* warn() */
warn = function (String) {
    console.warn(String);
};
    /* error() */
error = function (String) {
    console.error(String);
};