
// TRACKING_DATA_OBJECT                                           //
// - JSON and Object for housing and accessing the tracking       //
//   data.                                                        //
// - This is combined with the 'tracker.js' object in order to    //
//   push and receive data accordingly.                           //

// Array Extensions
 (function( $ ) {
    $.fn.pop = function() {
        var top = this.get(-1);
        this.splice(this.length-1,1);
        return top;
    };

    $.fn.shift = function() {
        var bottom = this.get(0);
        this.splice(0,1);
        return bottom;
    };
})( jQuery );

// Tracking Object
var tracking_data = function (){
  //  Global variables;
  var tracking_data_obj = {};
  var tracking_data_information = {};
  //  End of Global variables.
  
  tracking_data_information.tracking = [];
  
  tracking_data_obj.tracking = tracking_data_information;
  
  //  Tracking functions;
  //  - Add new tracking records using this function below.
  tracking_data_obj.addtracking = function(coord_obj, user){
    //  Global variables;
    var tracking_record = {};
    //  End of GLobal varaibles.
    
    tracking_record.coord_obj = coord_obj;
    tracking_record.user = user;
    
    //  Retain only one record at a time.
    try{
      this.tracking.tracking.pop();
    }catch(e){
      
    }
    
    this.tracking.tracking.push(tracking_record);
    
    console.log(this.tracking);
    displayLocation();
  };
  
  tracking_data_obj.cleartracking = function(){
    
  };
  
  return tracking_data_obj;
};