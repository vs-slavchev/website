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
    var para = document.createElement("P");
    var t = document.createTextNode(line);
    para.appendChild(t);
    document.getElementById("loading-screen").appendChild(para);
}

function get_random_time_step() {
    return 10 + Math.floor(Math.random() * 121);
}

async function run_loading_screen() {
    await sleep(100);
    add_line_to_loading_screen("Starting setup virtual console...");
    await sleep(get_random_time_step());
    add_line_to_loading_screen("Loading initial ramdisk...");
    await sleep(get_random_time_step());
    add_line_to_loading_screen("Creating system user injector...");
    await sleep(get_random_time_step());
    add_line_to_loading_screen("Compiling kernel device manager...");
    await sleep(get_random_time_step());
    add_line_to_loading_screen("Rebuilding dynamic linker cache...");
    await sleep(get_random_time_step());
    add_line_to_loading_screen("Registering backchannel transport module...");
    await sleep(get_random_time_step());
    add_line_to_loading_screen("Trigger flushing of persistent storage...");
    await sleep(get_random_time_step());
    add_line_to_loading_screen("Reaching target port mapper...");
    await sleep(get_random_time_step());
    add_line_to_loading_screen("Checking partition sensor resolution...");
    await sleep(get_random_time_step());
    add_line_to_loading_screen("Mounting debug file system...");
    await sleep(get_random_time_step());
    add_line_to_loading_screen("Monitoring temporary queue takeover...");
    await sleep(get_random_time_step());
    add_line_to_loading_screen("Removing root-only control...");
    await sleep(get_random_time_step());
    add_line_to_loading_screen("Building supplier repository adapter...");
    await sleep(get_random_time_step());
    add_line_to_loading_screen("Issuing functional concurrency constructor...");
    await sleep(get_random_time_step());
    add_line_to_loading_screen("Reverting watchdog polling routine...");
    await sleep(get_random_time_step());
    add_line_to_loading_screen("Importiing network configuration loader...");
    await sleep(get_random_time_step());
    add_line_to_loading_screen("Binding lock filter daemon...");
    await sleep(150);
    finish_loading_animation();
}

run_loading_screen();
