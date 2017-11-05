function showView(view) {
    App.showView(view);
}

function start() {

    //
    //App initialization goes here
    //

    Broker.channel('dashboard').request('show');
}

//
// API
//

var API = {
    showView,
    start
};

Broker.channel('main').reply(API);
export default API;
