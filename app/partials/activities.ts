///reference path="utils.ts"
///reference path="types.ts"

$(() => {
    var activityListPromise = readActivityList();
    activityListPromise.then((data : Activity[]) =>{
        loadActivities(data);
    });
});

function loadActivities(data: Activity[]): void {
    $("#activityList").empty();
    data.map(function(activity){

        $("#activityList").append('         <div class="col-lg-6 col-xxl-4 mb-5"> \
                                                <div class="card bg-light border-0 h-100"> \
                                                    <div class="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0"> \
                                                        <img src="'+activity.logo+'" style="width:50px; height:50px" /> \
                                                        <h2 class="fs-4 fw-bold">'+ activity.header +'</h2> \
                                                        <p class="mb-0">'+activity.description+'</p> \
                                                        <a class="btn btn-primary btn-lg" href="index.html?v=activity&a='+ activity.id +'">Go to the activity</a> \
                                                    </div> \
                                                </div> \
                                            </div>');
        
    });
}