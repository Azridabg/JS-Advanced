function requestValidator(obj) {
    //check the method

    if (obj.hasOwnProperty('method')) {
        if (obj.method == "GET" || obj.method == "POST" || obj.method == "DELETE" || obj.method == "CONNECT") {

        }
        else {
            throw new Error("Invalid request header: Invalid Method");
        }
    }
    else {
        throw new Error("Invalid request header: Invalid Method");
    }


    //check for uri

    let uriRegex = /^(([a-z])+|([\d])+|(\.)*)*$/;
    if (obj.hasOwnProperty('uri')) {
        if (!obj.uri == '') {
            if (uriRegex.test(obj.uri) || obj.uri == '*') {

            }
            else {
                throw new Error("Invalid request header: Invalid URI");
            }
        }
        else {
            throw new Error("Invalid request header: Invalid URI");
        }
    }
    else {
        throw new Error("Invalid request header: Invalid URI");
    }


    //check version

    let validHTTPS = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0']
    if (obj.hasOwnProperty('version')) {
        if (!validHTTPS.includes(obj.version)) {
            throw new Error("Invalid request header: Invalid Version");
        }

        if (obj.version == '') {
            throw new Error("Invalid request header: Invalid Version");
        }
    }
    else {
        throw new Error("Invalid request header: Invalid Version");
    }


    //check message

    let messageRegex = /^[^<>\\&'"]*$/;

    if (!obj.hasOwnProperty('message')) {
        throw new Error("Invalid request header: Invalid Message");
    }

    else {
        if (obj.message == '') {

        }
        else {
            if (messageRegex.test(obj.message)) {

            }
            else {
                throw new Error("Invalid request header: Invalid Message");
            }
        }
    }


    return obj;
}

console.log(requestValidator({ method: 'GET', uri: 'svn.public.catalog', version: 'HTTP/1.1', message: '' }));