import $ from 'jquery';

const bucketId = "9a1163b8-c12d-438d-a9d6-90470f0c5d15";
const baseUrl = 'https://spiffy-todo-api.herokuapp.com/api/';

const api = {

create: function(input, cb){
  $.ajax({
    url: `${baseUrl}item?bucketId=${bucketId}`,
    method: 'POST',
    data: { text: input }
  })
  .done(cb);
},
read: function(cb){
  $.ajax({
    url: `${baseUrl}items?bucketId=${bucketId}`,
  })
  .done((data) => {
    cb(data);
  });
},
update: function(id, cb){
  $.ajax({
    url: `${baseUrl}item/${id}/togglestatus?bucketId=${bucketId}`,
    method: 'POST'
  })
  .done(cb);
},
delete: function(id, cb){
  $.ajax({
    url: `${baseUrl}item/${id}?bucketId=${bucketId}`,
    method: 'DELETE'
  })
  .done(cb);
}

}
module.exports = api;
