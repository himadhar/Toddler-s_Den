///reference path="utils.ts"
///reference path="types.ts"

$(() => {
    var activityListPromise = readActivityList();
    activityListPromise.then((data : Activity[]) =>{
        loadActivities(data);
    })

  
});

function loadActivities(data: Activity[]): void {
    debugger;
    data.map(function(activity){
        $("#activityList").append('         <div class="col-lg-6 col-xxl-4 mb-5">');
        $("#activityList").append('               <div class="card bg-light border-0 h-100">');
        $("#activityList").append('                    <div class="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">');
        //$("#activityList").append('                       <div class="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4"><i class="bi bi-collection"></i></div>');
        $("#activityList").append('                       <h2 class="fs-4 fw-bold">'+ activity.header +'</h2>');
        $("#activityList").append('                      <p class="mb-0">'+activity.description+'</p>');
        $("#activityList").append('                       <a class="btn btn-primary btn-lg" href="index.html?v=activity&a='+ activity.id +'">Go the the activity</a>')
        //$("#activityList").append('                  </div>');
        $("#activityList").append('              </div>');
        $("#activityList").append('          </div>');
        
    });
}