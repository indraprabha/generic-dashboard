
/* This module to run given 'cmd' with specfied 'args'
invoke cd_stdout and cb_end callbacks */
module.exports = function (cmd, args, cb_stdout, cb_end) {
    var spawn = require('child_process').spawn,
      child = spawn(cmd, args),
      me = this;
    me.stdout = "";
    //console.log(child);
    me.exit = 0;  // Send a cb to set 1 when cmd exits
    child.stdout.on('data', function (data) { cb_stdout(me, data) });
    child.stdout.on('end', function () { cb_end(me) });
}
