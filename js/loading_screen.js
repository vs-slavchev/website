// uncomment to finish loading animation when all images are loaded
/*window.addEventListener("load", function(){
    finish_loading_animation();
});*/

function finish_loading_animation() {
    document.getElementById('loading-screen').style.display = "none";
    document.getElementById('main-loaded-site').style.display = "block";
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function add_line_to_loading_screen(line) {
    var p_element = document.createElement("P");
    var text = document.createTextNode(line);
    p_element.appendChild(text);
    document.getElementById("loading-screen").appendChild(p_element);
}

function get_time_step(wait_factor) {
    wait_factor = wait_factor || Math.floor(Math.random() * 5);
    return 30 + 90 * wait_factor;
}

async function run_loading_screen() {
    await sleep(100);
    add_line_to_loading_screen("Starting setup virtual console...");
    await sleep(get_time_step(4));
    add_line_to_loading_screen("Loading initial ramdisk...");
    await sleep(get_time_step(4));
    add_line_to_loading_screen("Creating system user injector...");
    await sleep(get_time_step());
    add_line_to_loading_screen("Compiling kernel device manager...");
    await sleep(get_time_step());
    add_line_to_loading_screen("Registering backchannel transport module...");
    await sleep(get_time_step());
    add_line_to_loading_screen("Triggering persistent storage flush...");
    await sleep(get_time_step());
    add_line_to_loading_screen("Reaching target port mapper...");
    await sleep(get_time_step());
    add_line_to_loading_screen("Mounting debug file system...");
    await sleep(get_time_step());
    add_line_to_loading_screen("Monitoring temporary queue takeover...");
    await sleep(get_time_step());
    add_line_to_loading_screen("Removing root-only control...");
    await sleep(get_time_step());
    add_line_to_loading_screen("Building supplier repository adapter...");
    await sleep(get_time_step());
    add_line_to_loading_screen("Issuing functional concurrency destructor...");
    await sleep(get_time_step(4));
    add_line_to_loading_screen("Reverting watchdog polling routine...");
    await sleep(get_time_step(4));
    add_line_to_loading_screen("Binding lock filter daemon...");
    await sleep(get_time_step(4));
    add_line_to_loading_screen("Done... Starting...");
    await sleep(350);
    finish_loading_animation();
}

//run_loading_screen();
finish_loading_animation();
