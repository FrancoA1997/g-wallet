const os = require('os');
const { spawn } = require('child_process');

function getLocalIp(ipMatchArr) {
  const networkInterfaces = os.networkInterfaces();
  let matchingIps = Object.keys(networkInterfaces).reduce((arr, name) => {
    const matchingInterface = networkInterfaces[name].find(iface =>
      iface.family === 'IPv4' && ipMatchArr.find(match => iface.address.indexOf(match) > -1));
      if (matchingInterface) arr.push(matchingInterface.address);
      return arr;
  }, []);

  if (matchingIps.length) {
    return matchingIps[0];
  }
  else {
    throw(`Error. Unable to find ip to use as public host: ipMatches=['${ipMatchArr.join("', '")}']`);
  }
}

function launchDevServer(address) {
  const port = process.env.port || 4200;
  const publicHostname = address + ":" + port;
  console.log(`[[[ Access your NG LIVE DEV server on \x1b[33m ${publicHostname} \x1b[0m ]]]`);
  spawn(
      "ng serve"
    , [
          "--host 0.0.0.0"
        , `--public ${publicHostname}`
      ]
    , { stdio: 'inherit', shell: true }
  );
}

/* execute */
launchDevServer(getLocalIp(['192.168.1.', '192.168.0.']));