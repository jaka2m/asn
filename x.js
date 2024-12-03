import { connect } from "cloudflare:sockets";
let socketConnection;
let responseData;
export default {
  async fetch(request, env) {
    try {
      const upgradeHeader = request.headers.get("Upgrade");      
      const hostHeader = request.headers.get("Host");
const requestUrl = new URL(request.url);

      if (upgradeHeader === "websocket" && requestUrl.pathname.includes("/vl=")) {
        address = requestUrl.pathname.split("=")[1].split(":")[0];
        port = requestUrl.pathname.split(":")[1];
        return await handleWebSocket(request);
      } else {
        if (upgradeHeader === "websocket" && requestUrl.pathname.includes("/tr=")) {
          address = requestUrl.pathname.split("=")[1].split(":")[0];
          port = requestUrl.pathname.split(":")[1];
          return await _0x9174b4(request);
        } else {
          return await handleRequest(hostHeader);
        }
      }
    } catch (error) {
      const response = {
        status: 500
      };
      return new Response("Error: " + error.message, response);      
    }
  }
};
async function handleRequest(request) {
  const uuidRandom = generateUUID();
  const responseBody = "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Generate Vless & Trojan</title>\n  <style>\n    body {\n      font-family: 'Roboto', Arial, sans-serif;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      height: 100vh;\n      margin: 0;\n      background: linear-gradient(135deg, #1e3c72, #2a5298);\n      color: #fff;\n    }\n    .container {\n      text-align: center;\n      background: #ffffff;\n      padding: 30px 20px;\n      border-radius: 15px;\n      box-shadow: 0 20px 30px rgba(0, 0, 0, 0.9);\n      max-width: 400px;\n      width: 100%;\n      color: #333;\n    }\n    .input-group {\n      margin-bottom: 20px;\n    }\n    input {\n      width: 100%;\n      padding: 15px 10px;\n      font-size: 16px;\n      text-align: center;\n      border: 1px solid #ddd;\n      border-radius: 5px;\n      box-sizing: border-box;\n    }\n    input::placeholder {\n      text-align: center;\n      color: #aaa;\n    }\n    .url-box {\n      font-size: 14px;\n      word-break: break-word;\n      background: #f9f9f9;\n      padding: 15px;\n      border: 1px solid #ddd;\n      border-radius: 5px;\n      margin: 10px 0;\n      display: none;\n      color: #333;\n    }\n    button {\n      padding: 12px 25px;\n      font-size: 14px;\n      font-weight: bold;\n      color: #fff;\n      background: #007bff;\n      border: none;\n      border-radius: 50px;\n      cursor: pointer;\n      transition: all 0.3s ease;\n      margin: 5px;\n      text-transform: uppercase;\n    }\n    button:hover {\n      background: #0056b3;\n    }\n    button:active {\n      transform: scale(0.98);\n    }\n  </style>\n</head>\n<body>\n  <div class=\"container\">\n    <h2>Generate Vless & Trojan</h2>\n    <div class=\"input-group\">\n      <input type=\"text\" id=\"ip-port\" placeholder=\"Masukan IP:PORT\">\n    </div>\n    <button id=\"generate-button\">Generate</button>\n    <p id=\"vless-url\" class=\"url-box\"></p>\n    <p id=\"trojan-url\" class=\"url-box\"></p>\n    <button id=\"copy-vless-button\" style=\"display: none;\">Salin Vless</button>\n    <button id=\"copy-trojan-button\" style=\"display: none;\">Salin Trojan</button>\n  </div>\n  <script>\n    const host = \"" + request + "\";\n    const uuidRandom = \"" + uuidRandom + "\";\n    document.getElementById('generate-button').addEventListener('click', function() {\n      const ipPort = document.getElementById('ip-port').value.trim();\n\n      if (!ipPort || !ipPort.includes(':')) {\n        alert('Masukkan IP:PORT dengan format yang benar.');\n        return;\n      }\n\n      const vlessUrl = `vless://${uuidRandom}@${host}:443?path=%2Fvl%3D${ipPort}&security=tls&encryption=none&host=${host}&type=ws&sni=${host}#Worker-Vless`;\n      const trojanUrl = `trojan://Trojan-geovpn@${host}:443?path=%2Ftr%3D${ipPort}&security=tls&host=${host}&type=ws&sni=${host}#Worker-Trojan`;\n\n\n      const vlessElement = document.getElementById('vless-url');\n      const trojanElement = document.getElementById('trojan-url');\n      vlessElement.textContent = vlessUrl;\n      trojanElement.textContent = trojanUrl;\n      vlessElement.style.display = 'block';\n      trojanElement.style.display = 'block';\n\n\n      document.getElementById('copy-vless-button').style.display = 'inline-block';\n      document.getElementById('copy-trojan-button').style.display = 'inline-block';\n    });\n\n    document.getElementById('copy-vless-button').addEventListener('click', function() {\n      const vlessUrl = document.getElementById('vless-url').textContent;\n      navigator.clipboard.writeText(vlessUrl)\n        .then(() => {\n          alert('Vless berhasil disalin!');\n        })\n        .catch(err => {\n          alert('Gagal menyalin Vless.');\n          console.error(err);\n        });\n    });\n\n    document.getElementById('copy-trojan-button').addEventListener('click', function() {\n      const trojanUrl = document.getElementById('trojan-url').textContent;\n      navigator.clipboard.writeText(trojanUrl)\n        .then(() => {\n          alert('Trojan berhasil disalin!');\n        })\n        .catch(err => {\n          alert('Gagal menyalin Trojan.');\n          console.error(err);\n        });\n    });\n  </script>\n</body>\n</html>";
  const _0x2c6b4f = {
    "Content-Type": "text/html"
  };
  const responseOptions = {
    headers: _0x2c6b4f,
    status: 0xc8
  };
  return new Response(responseBody, responseOptions);  
}
function generateUUID() {
  const randomValues = crypto.getRandomValues(new Uint8Array(16));
  randomValues[6] = randomValues[6] & 15 | 64;
  randomValues[8] = randomValues[8] & 63 | 128;
  return [
    randomValues[0].toString(16).padStart(2, "0"),
    randomValues[1].toString(16).padStart(2, "0"),
    randomValues[2].toString(16).padStart(2, "0"),
    randomValues[3].toString(16).padStart(2, "0"),
    randomValues[4].toString(16).padStart(2, "0"),
    randomValues[5].toString(16).padStart(2, "0"),
    randomValues[6].toString(16).padStart(2, "0"),
    randomValues[7].toString(16).padStart(2, "0"),
    randomValues[8].toString(16).padStart(2, "0"),
    randomValues[9].toString(16).padStart(2, "0"),
    randomValues[10].toString(16).padStart(2, "0"),
    randomValues[11].toString(16).padStart(2, "0"),
    randomValues[12].toString(16).padStart(2, "0"),
    randomValues[13].toString(16).padStart(2, "0"),
    randomValues[14].toString(16).padStart(2, "0"),
    randomValues[15].toString(16).padStart(2, "0")
  ].join("").replace(/^(.{8})(.{4})(.{4})(.{4})(.{12})$/, "$1-$2-$3-$4-$5");
}

async function handleWebSocket(request) {
  const webSocketPair = new WebSocketPair();
  const [clientSocket, _0x566528] = Object.values(webSocketPair);
  _0x566528.accept();
  let userId = '';
  let sessionId = '';
  const logActivity = (_0x5c0ef9, _0xb980d0) => {
    console.log("[" + userId + ":" + sessionId + "] " + _0x5c0ef9, _0xb980d0 || '');
  };
  const _0x4c7e7f = reques.headers.get("sec-websocket-protocol") || '';
  const inputStream = createReadableStream(_0x566528, _0x4c7e7f, logActivity);
  const _0x343b3d = {
    "value": null
  };
  let processData = null;
  let isProcessing = false;
  inputStream.pipeTo(new WritableStream({
    async "write"(chunk, controller) {
      if (isProcessing && processData) {
        return processData(chunk);
      }
      const writableStream = validWritableStream.writable.getWriter();
await writableStream.write(chunk);
writableStream.releaseLock();
      return;
      const {
  hasError,
  message,
  portRemote = 443,
  addressRemote = '',
  rawDataIndex,
  vlessVersion = new Uint8Array([0, 0]),
  isUDP
} = parseChunk(chunk);

userId = addressRemote;
sessionId = `${portRemote}--${Math.random()} ${(isUDP ? "udp" : "tcp")} `;

if (hasError) {
  throw new Error(message);
}

if (isUDP) {
  if (portRemote === 53) {
    isProcessing = true;
  } else {
    throw new Error("UDP proxy hanya diizinkan untuk DNS (port 53)");
  }
}
      const _0x1bf001 = new Uint8Array([vlessVersion[0], 0]);
      const _0x1aecc9 = chunk.slice(rawDataIndex);
      if (isProcessing) {
        const {
          write: _0x35f95b
        } = await _0xbe6433(_0x566528, _0x1bf001, logActivity);
        processData = _0x35f95b;
        processData(_0x1aecc9);
        return;
      }
      _0xfff295(_0x343b3d, addressRemote, portRemote, _0x1aecc9, _0x566528, _0x1bf001, logActivity);
    },
    "close"() {
      logActivity("readableWebSocketStream is close");
    },
    "abort"(_0x251a16) {
      logActivity("readableWebSocketStream is abort", JSON.stringify(_0x251a16));
    }
  }))["catch"](_0x47a116 => {
    logActivity("readableWebSocketStream pipeTo error", _0x47a116);
  });
  const _0x61c862 = {
    status: 0x65,
    webSocket: clientSocket
  };
  return new Response(null, _0x61c862);
}
async function _0xfff295(connectionStatus, _0x4be958, _0x33e33b, dataToSend, _0x4e629f, _0x2913de, logMessage) {
  async function createSocket(host, port) {
    const serverAddress = {
      hostname: host,
      port: port
    };
    const connection = connect(serverAddress);
connectionStatus.value = connection;

logMessage(`Connected to ${host}:${port}`);

const writer = connection.writable.getWriter();
await writer.write(dataToSend);
writer.releaseLock();

return connection;
}
  async function handleConnection() {
  const primarySocket = await createSocket(primaryHost, primaryPort);
  primarySocket.closed.catch(error => {
    console.log("Retry TCP socket closed error", error);
  }).finally(() => {
    cleanup(primaryCleanupCallback);
  });

  processSocketData(primarySocket, primaryCleanupCallback, dataHandler, null, logMessage);
}

const secondarySocket = await createSocket(secondaryHost, secondaryPort);

processSocketData(secondarySocket, primaryCleanupCallback, dataHandler, handleConnection, logMessage);
}

function createReadableStream(socket, onData, onError) {
  let isClosed = false;

  const readableStream = new ReadableStream({
    start(controller) {
      socket.addEventListener("message", event => {
        if (isClosed) {
          return;
        }
        const _0x147aa1 = _0x21762.data;
        _0x5c398d.enqueue(_0x147aa1);
      });
      socket.addEventListener("close", () => {
        _0x3b3b7b(socket);
        if (isClosed) {
          return;
        }
        _0x5c398d.close();
      });
      socket.addEventListener("error", _0x5c06bc => {
        _0x3add2b("webSocketServer has error");
        _0x5c398d.error(_0x5c06bc);
      });
      const {
        earlyData: _0x10e193,
        error: _0x4cb7b4
      } = _0x1d0600(_0x406e76);
      if (_0x4cb7b4) {
        _0x5c398d.error(_0x4cb7b4);
      } else {
        if (_0x10e193) {
          _0x5c398d.enqueue(_0x10e193);
        }
      }
    },
    "pull"(_0x5d857c) {},
    "cancel"(_0x1725c4) {
      if (isClosed) {
        return;
      }
      _0x3add2b("ReadableStream was canceled, due to " + _0x1725c4);
      isClosed = true;
      _0x3b3b7b(socket);
    }
  });
  return readableStream;
}
function parseChunk(dataBuffer) {
  if (dataBuffer.byteLength < 24) {
    const _0x3ea301 = {
      hasError: true,
      message: "invalid data"
    };
    return _0x3ea301;
  }
  const _0x33cebe = new Uint8Array(dataBuffer.slice(0, 1));
  let _0x3448d9 = false;
  const _0x4828fd = new Uint8Array(dataBuffer.slice(17, 18))[0];
  const _0x4a9835 = new Uint8Array(dataBuffer.slice(18 + _0x4828fd, 18 + _0x4828fd + 1))[0];
  if (_0x4a9835 === 1) {} else {
    if (_0x4a9835 === 2) {
      _0x3448d9 = true;
    } else {
      const _0x52517f = {
        hasError: true,
        message: "command " + _0x4a9835 + " is not support, command 01-tcp,02-udp,03-mux"
      };
      return _0x52517f;
    }
  }
  const _0x1347d7 = 18 + _0x4828fd + 1;
  const _0x5d000e = dataBuffer.slice(_0x1347d7, _0x1347d7 + 2);
  const _0x42c51e = new DataView(_0x5d000e).getUint16(0);
  let _0x3a6d71 = _0x1347d7 + 2;
  const _0x17778e = new Uint8Array(dataBuffer.slice(_0x3a6d71, _0x3a6d71 + 1));
  const addressType = _0x17778e[0];
  let addressLength = 0;
  let offset = _0x3a6d71 + 1;
  let address = '';
  switch (addressType) {
    case 1:
      addressLength = 4;
      address = new Uint8Array(dataBuffer.slice(offset, offset + addressLength)).join(".");
      break;
    case 2:
      addressLength = new Uint8Array(dataBuffer.slice(offset, offset + 1))[0];
      offset += 1;
      address = new TextDecoder().decode(dataBuffer.slice(offset, offset + addressLength));
      break;
    case 3:
      addressLength = 16;
      const ipv6View = new DataView(dataBuffer.slice(offset, offset + addressLength));
      const ipv6Parts = [];
      for (let _0x12fafe = 0; _0x12fafe < 8; _0x12fafe++) {
        ipv6Parts.push(ipv6View.getUint16(_0x12fafe * 2).toString(16));
      }
      address = ipv6Parts.join(":");
      break;
    default:
      const _0x2b15e6 = {
        hasError: true,
        message: "invild  addressType is " + addressType
      };
      return _0x2b15e6;
  }
  if (!address) {
    const _0x28c3d6 = {
      hasError: true,
      message: "addressValue is empty, addressType is " + addressType
    };
    return _0x28c3d6;
  }
  return {
    "hasError": false,
    "addressRemote": address,
    "addressType": addressType,
    "portRemote": _0x42c51e,
    "rawDataIndex": offset + addressLength,
    "vlessVersion": _0x33cebe,
    "isUDP": _0x3448d9
  };
}
async function processSocketData(_0x15ec63, _0x305e41, _0x2f4f31, _0x39e786, _0x142a1e) {
  let _0x5d9c4b = _0x2f4f31;
  let _0x48e3fa = false;
  await _0x15ec63.readable.pipeTo(new WritableStream({
    "start"() {},
    async "write"(_0x433684, _0x8d3182) {
      _0x48e3fa = true;
      if (_0x305e41.readyState !== 1) {
        _0x8d3182.error("webSocket.readyState is not open, maybe close");
      }
      if (_0x5d9c4b) {
        _0x305e41.send(await new Blob([_0x5d9c4b, _0x433684]).arrayBuffer());
        _0x5d9c4b = null;
      } else {
        _0x305e41.send(_0x433684);
      }
    },
    "close"() {
      _0x142a1e("remoteConnection!.readable is close with hasIncomingData is " + _0x48e3fa);
    },
    "abort"(_0x17b1d2) {
      console.error("remoteConnection!.readable abort", _0x17b1d2);
    }
  }))["catch"](_0x39a8ec => {
    console.error("remoteSocketToWS has exception ", _0x39a8ec.stack || _0x39a8ec);
    _0x3b3b7b(_0x305e41);
  });
  if (_0x48e3fa === false && _0x39e786) {
    _0x142a1e("retry");
    _0x39e786();
  }
}
function _0x1d0600(_0x260a2d) {
  if (!_0x260a2d) {
    const _0x2f0676 = {
      error: null
    };
    return _0x2f0676;
  }
  try {
    _0x260a2d = _0x260a2d.replace(/-/g, "+").replace(/_/g, "/");
    const _0x4bf5b3 = atob(_0x260a2d);
    const _0x5be443 = Uint8Array.from(_0x4bf5b3, _0x752a88 => _0x752a88.charCodeAt(0));
    const _0x55c7ef = {
      earlyData: _0x5be443.buffer,
      error: null
    };
    return _0x55c7ef;
  } catch (_0x1774f6) {
    const _0x1f61cd = {
      error: _0x1774f6
    };
    return _0x1f61cd;
  }
}
function _0x3b3b7b(_0x560bf6) {
  const _0x27f8f1 = {
    rqslx: function (_0x15e291, _0x4ad499) {
      return _0x15e291 !== _0x4ad499;
    }
  };
  _0x27f8f1.MtZKe = "GVtIE";
  _0x27f8f1.fAAlt = "HUnkt";
  _0x27f8f1.RLcJk = function (_0x182d22, _0x3cb221) {
    return _0x182d22 === _0x3cb221;
  };
  _0x27f8f1.loBOm = function (_0x45ad39, _0x15c2bb) {
    return _0x45ad39 !== _0x15c2bb;
  };
  _0x27f8f1.LCLIa = "puXUV";
  _0x27f8f1.zrljX = "WhUUc";
  _0x27f8f1.rtLxu = "iSXrx";
  _0x27f8f1.MeIee = "safeCloseWebSocket error";
  try {
    if (_0x27f8f1.MtZKe !== _0x27f8f1.fAAlt) {
      if (_0x27f8f1.RLcJk(_0x560bf6.readyState, 1) || _0x27f8f1.RLcJk(_0x560bf6.readyState, 2)) {
        if (_0x27f8f1.loBOm(_0x27f8f1.LCLIa, _0x27f8f1.LCLIa)) {
          const _0x20ecd0 = {
            error: _0x47a3ae
          };
          return _0x20ecd0;
        } else {
          _0x560bf6.close();
        }
      }
    } else {
      return;
    }
  } catch (_0x3478c6) {
    if (_0x27f8f1.zrljX !== _0x27f8f1.rtLxu) {
      console.error(_0x27f8f1.MeIee, _0x3478c6);
    } else {
      _0x441d16.send(_0x42903f);
    }
  }
}
async function _0xbe6433(_0x58d884, _0x2a6ac5, _0x55f055) {
  let _0x382e19 = false;
  const _0x1d560a = new TransformStream({
    "start"(_0x29e2f9) {},
    "transform"(_0x1bd9bd, _0x589fa5) {
      for (let _0x5dd987 = 0; _0x5dd987 < _0x1bd9bd.byteLength;) {
        const _0x26d937 = _0x1bd9bd.slice(_0x5dd987, _0x5dd987 + 2);
        const _0x51004b = new DataView(_0x26d937).getUint16(0);
        const _0x20f756 = new Uint8Array(_0x1bd9bd.slice(_0x5dd987 + 2, _0x5dd987 + 2 + _0x51004b));
        _0x5dd987 = _0x5dd987 + 2 + _0x51004b;
        _0x589fa5.enqueue(_0x20f756);
      }
    },
    "flush"(_0x3e0d6c) {}
  });
  _0x1d560a.readable.pipeTo(new WritableStream({
    async "write"(_0x35c130) {
      const _0x42c1ad = {
        rSSJH: "invalid data"
      };
      _0x42c1ad.xmSjB = "remoteSocket.readable abort";
      const _0xe38d16 = await fetch("https://1.1.1.1/dns-query", {
        "method": "POST",
        "headers": {
          "content-type": "application/dns-message"
        },
        "body": _0x35c130
      });
      const _0x1e124c = await _0xe38d16.arrayBuffer();
      const _0x316f07 = _0x1e124c.byteLength;
      const _0x3d259f = new Uint8Array([_0x316f07 >> 8 & 255, _0x316f07 & 255]);
      if (_0x58d884.readyState === 1) {
        _0x55f055("doh success and dns message length is " + _0x316f07);
        if (_0x382e19) {
          _0x58d884.send(await new Blob([_0x3d259f, _0x1e124c]).arrayBuffer());
        } else {
          _0x58d884.send(await new Blob([_0x2a6ac5, _0x3d259f, _0x1e124c]).arrayBuffer());
          _0x382e19 = true;
        }
      }
    }
  }))["catch"](_0xb589a4 => {
    _0x55f055("dns udp has error" + _0xb589a4);
  });
  const _0x472169 = _0x1d560a.writable.getWriter();
  return {
    "write"(_0x182855) {
      _0x472169.write(_0x182855);
    }
  };
}
async function _0x9174b4(_0x59b883) {
  const _0x455824 = new WebSocketPair();
  const [_0x427033, _0x265325] = Object.values(_0x455824);
  _0x265325.accept();
  let _0x2e3f3e = '';
  let _0x303cbb = '';
  const _0x43a9e2 = (_0x508c61, _0x1f8eb7) => {
    console.log("[" + _0x2e3f3e + ":" + _0x303cbb + "] " + _0x508c61, _0x1f8eb7 || '');
  };
  const _0x370a52 = _0x59b883.headers.get("sec-websocket-protocol") || '';
  const _0x3b9d50 = _0x129f13(_0x265325, _0x370a52, _0x43a9e2);
  const _0x17a4ef = {
    value: null
  };
  _0x3b9d50.pipeTo(new WritableStream({
    async "write"(_0x2cdc8a, _0x4f63dc) {
      return null(_0x2cdc8a);
      const _0x4e7739 = null.writable.getWriter();
      await _0x4e7739.write(_0x2cdc8a);
      _0x4e7739.releaseLock();
      return;
      const {
        hasError: _0x4748a2,
        message: _0x4af10f,
        portRemote = 443,
        addressRemote = '',
        rawClientData: _0x22eae9
      } = await _0x5b90a6(_0x2cdc8a);
      _0x2e3f3e = addressRemote;
      _0x303cbb = portRemote + "--" + Math.random() + " tcp";
      if (_0x4748a2) {
        throw new Error(_0x4af10f);
        return;
      }
      _0x2f54b8(_0x17a4ef, addressRemote, portRemote, _0x22eae9, _0x265325, _0x43a9e2);
    },
    "close"() {
      _0x43a9e2("readableWebSocketStream is closed");
    },
    "abort"(_0x4f985e) {
      _0x43a9e2("readableWebSocketStream is aborted", JSON.stringify(_0x4f985e));
    }
  }))["catch"](_0xd705bc => {
    _0x43a9e2("readableWebSocketStream pipeTo error", _0xd705bc);
  });
  const _0x5902d6 = {
    status: 0x65,
    webSocket: _0x427033
  };
  return new Response(null, _0x5902d6);
}
async function _0x5b90a6(_0x4f14da) {
  if (_0x4f14da.byteLength < 56) {
    const _0x505158 = {
      hasError: true,
      message: "invalid data"
    };
    return _0x505158;
  }
  if (new Uint8Array(_0x4f14da.slice(56, 57))[0] !== 13 || new Uint8Array(_0x4f14da.slice(57, 58))[0] !== 10) {
    const _0x22d6a6 = {
      hasError: true,
      message: "invalid header format (missing CR LF)"
    };
    return _0x22d6a6;
  }
  const _0x31ee75 = _0x4f14da.slice(58);
  if (_0x31ee75.byteLength < 6) {
    const _0x214861 = {
      hasError: true,
      message: "invalid SOCKS5 request data"
    };
    return _0x214861;
  }
  const _0xa20483 = new DataView(_0x31ee75);
  const _0x486fcd = _0xa20483.getUint8(0);
  if (_0x486fcd !== 1) {
    const _0x124618 = {
      hasError: true,
      message: "unsupported command, only TCP (CONNECT) is allowed"
    };
    return _0x124618;
  }
  const _0x4d0434 = _0xa20483.getUint8(1);
  let _0x478a69 = 0;
  let _0x3a8b8f = 2;
  let _0x4c1416 = '';
  switch (_0x4d0434) {
    case 1:
      _0x478a69 = 4;
      _0x4c1416 = new Uint8Array(_0x31ee75.slice(_0x3a8b8f, _0x3a8b8f + _0x478a69)).join(".");
      break;
    case 3:
      _0x478a69 = new Uint8Array(_0x31ee75.slice(_0x3a8b8f, _0x3a8b8f + 1))[0];
      _0x3a8b8f += 1;
      _0x4c1416 = new TextDecoder().decode(_0x31ee75.slice(_0x3a8b8f, _0x3a8b8f + _0x478a69));
      break;
    case 4:
      _0x478a69 = 16;
      const _0x45c3c9 = new DataView(_0x31ee75.slice(_0x3a8b8f, _0x3a8b8f + _0x478a69));
      const _0x235786 = [];
      for (let _0x474325 = 0; _0x474325 < 8; _0x474325++) {
        _0x235786.push(_0x45c3c9.getUint16(_0x474325 * 2).toString(16));
      }
      _0x4c1416 = _0x235786.join(":");
      break;
    default:
      const _0x5719ad = {
        hasError: true,
        message: "invalid addressType is " + _0x4d0434
      };
      return _0x5719ad;
  }
  if (!_0x4c1416) {
    const _0x31f90a = {
      hasError: true,
      message: "address is empty, addressType is " + _0x4d0434
    };
    return _0x31f90a;
  }
  const _0x5ee266 = _0x3a8b8f + _0x478a69;
  const _0x478d83 = _0x31ee75.slice(_0x5ee266, _0x5ee266 + 2);
  const _0x4621f8 = new DataView(_0x478d83).getUint16(0);
  return {
    "hasError": false,
    "addressRemote": _0x4c1416,
    "portRemote": _0x4621f8,
    "rawClientData": _0x31ee75.slice(_0x5ee266 + 4)
  };
}
async function _0x2f54b8(_0x371688, _0x3fb4db, _0x3066ab, _0xf2ba19, _0x426748, _0x363da4) {
  if (/^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(_0x3fb4db)) {
    _0x3fb4db = '' + atob("d3d3Lg==") + _0x3fb4db + atob("LnNzbGlwLmlv");
  }
  async function _0x29fa35(_0x2ca9b6, _0xb7d346) {
    const _0x2cc78f = {
      hostname: _0x2ca9b6,
      port: _0xb7d346
    };
    const _0x54a1ec = connect(_0x2cc78f);
    _0x371688.value = _0x54a1ec;
    _0x363da4("connected to " + _0x2ca9b6 + ":" + _0xb7d346);
    const _0x500db1 = _0x54a1ec.writable.getWriter();
    await _0x500db1.write(_0xf2ba19);
    _0x500db1.releaseLock();
    return _0x54a1ec;
  }
  async function _0xa65c84() {
    const _0x41abd6 = await _0x29fa35(address, port);
    _0x41abd6.closed["catch"](_0x122a8f => {
      console.log("retry tcpSocket closed error", _0x122a8f);
    })["finally"](() => {
      _0x112372(_0x426748);
    });
    _0x34238c(_0x41abd6, _0x426748, null, _0x363da4);
  }
  const _0xc78e08 = await _0x29fa35(_0x3fb4db, _0x3066ab);
  _0x34238c(_0xc78e08, _0x426748, _0xa65c84, _0x363da4);
}
function _0x129f13(_0x1f81de, _0x86228b, _0x2d4a95) {
  let _0x2e3d52 = false;
  const _0x22599a = new ReadableStream({
    "start"(_0x25e666) {
      _0x1f81de.addEventListener("message", _0x356ebc => {
        if (_0x2e3d52) {
          return;
        }
        const _0x1bd82e = _0x356ebc.data;
        _0x25e666.enqueue(_0x1bd82e);
      });
      _0x1f81de.addEventListener("close", () => {
        _0x112372(_0x1f81de);
        if (_0x2e3d52) {
          return;
        }
        _0x25e666.close();
      });
      _0x1f81de.addEventListener("error", _0x41d00b => {
        _0x2d4a95("webSocketServer error");
        _0x25e666.error(_0x41d00b);
      });
      const {
        earlyData: _0x4dccf0,
        error: _0x4f8564
      } = _0x46f99c(_0x86228b);
      if (_0x4f8564) {
        _0x25e666.error(_0x4f8564);
      } else if (_0x4dccf0) {
        _0x25e666.enqueue(_0x4dccf0);
      }
    },
    "pull"(_0x4bf947) {},
    "cancel"(_0x581af3) {
      if (_0x2e3d52) {
        return;
      }
      _0x2d4a95("readableStream was canceled, due to " + _0x581af3);
      _0x2e3d52 = true;
      _0x112372(_0x1f81de);
    }
  });
  return _0x22599a;
}
async function _0x34238c(_0x1ed96d, _0x208ca2, _0x124aa2, _0x2953ff) {
  let _0x277ff9 = false;
  await _0x1ed96d.readable.pipeTo(new WritableStream({
    "start"() {},
    async "write"(_0x23a55b, _0xaae12a) {
      _0x277ff9 = true;
      if (_0x208ca2.readyState !== 1) {
        _0xaae12a.error("webSocket connection is not open");
      }
      _0x208ca2.send(_0x23a55b);
    },
    "close"() {
      _0x2953ff("remoteSocket.readable is closed, hasIncomingData: " + _0x277ff9);
    },
    "abort"(_0x2c2201) {
      console.error("remoteSocket.readable abort", _0x2c2201);
    }
  }))["catch"](_0x1e826c => {
    console.error("remoteSocketToWS2 error:", _0x1e826c.stack || _0x1e826c);
    _0x112372(_0x208ca2);
  });
  if (_0x277ff9 === false && _0x124aa2) {
    _0x2953ff("retry");
    _0x124aa2();
  }
}
function _0x46f99c(_0x577aef) {
  if (!_0x577aef) {
    const _0x2be622 = {
      error: null
    };
    return _0x2be622;
  }
  try {
    _0x577aef = _0x577aef.replace(/-/g, "+").replace(/_/g, "/");
    const _0x3df5a1 = atob(_0x577aef);
    const _0x3c8e99 = Uint8Array.from(_0x3df5a1, _0x45a6c9 => _0x45a6c9.charCodeAt(0));
    const parsedData = {
      earlyData: _0x3c8e99.buffer,
      error: null
    };
    return parsedData;
  } catch (error) {
    const errorResponse = {
      error: error
    };
    return errorResponse;
  }
}
function _0x112372(_0x593bd6) {
  try {
    if (_0x593bd6.readyState === 1 || _0x593bd6.readyState === 2) {
      _0x593bd6.close();
    }
  } catch (_0x19b2e2) {
    console.error("safeCloseWebSocket2 error", _0x19b2e2);
  }
}