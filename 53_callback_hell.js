/*
    In funciton callbacks we may not want to pass another entire function as callback, because then other peson may do anything with it, 
    Also, if there are callbacks within callbacks andit makes a ladder then due to indentation and brackets code becomes unreable and difficult to track/debug 

    Therefore a long callback ladder is not recommended, and it is advised to use PROMISES instead



 */
/*


function loadScript(src, callback) {
    
}

function goodmornng() {


}
loadScript(src, goodmornng(){
    loadScript(src, goodmornng(){
        loadScript(src, goodmornng(){
            loadScript(src, goodmornng(){
                loadScript(src, goodmornng(){
                    loadScript(src, goodmornng(){

                    })
                })
            })
        })
    })
})
*/