var holochain_connection = holochainclient.connect();

// Render functions
function show_output(result, id) {
    var el = document.getElementById(id);
    var output = JSON.parse(result);
    if (output.Ok) {
        el.textContent = ' ' + output.Ok;
    } else {
        alert(output.Err.Internal);
    }
}

// Zome calls

function hello() {
    holochain_connection.then(({ callZome, close }) => {
        callZome('test-instance', 'hello', 'hello_holo')({ args: {} }).then(result =>
            show_output(result, 'output'),
        );
    });
}

function create_post() {
    const message = document.getElementById('post').value;
    const timestamp = Date.now();
    holochain_connection.then(({ callZome, close }) => {
        callZome('test-instance', 'hello', 'create_post')({
            message: message,
            timestamp: timestamp,
        }).then(result => show_output(result, 'address_output'));
    });
}
function retrieve_posts() {
    var address = document.getElementById('address_in').value.trim();
    holochain_connection.then(({ callZome, close }) => {
        callZome('test-instance', 'hello', 'retrieve_posts')({
            agent_address: address,
        }).then(result => display_posts(result));
    });
}
function get_agent_id() {
    holochain_connection.then(({ callZome, close }) => {
        callZome('test-instance', 'hello', 'get_agent_id')({}).then(result =>
            show_output(result, 'agent_id'),
        );
    });
}
function display_posts(result) {
    var list = document.getElementById('posts_output');
    list.innerHTML = "";
    var output = JSON.parse(result);
    if (output.Ok) {
        var posts = output.Ok.sort((a, b) => a.timestamp - b.timestamp);
        for (post of posts) {
            var node = document.createElement("LI");
            var textnode = document.createTextNode(post.message);
            node.appendChild(textnode);
            list.appendChild(node);
        }
    } else {
        alert(output.Err.Internal);
    }
}