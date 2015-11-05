window.onload = function(){
  console.log('all files that this page needs have been loaded');

  var component = {
    domElement: null,
    initialize: function(selector){
      //create a dom element
      this.domElement=document.createElement('div');
      //attach it
      selector.appendChild(this.domElement);
      this.domElement.addEventListener=document.createElement('div');
    },
    render: function(statusText){
      this.domElement.innerHTML = statusText;
      //update the dom element
    }
  }


  var btn = document.getElementById('buttonID');
   btn.addEventListener('click', function(){
     alert("are you sure you want to leave?");
   });


  var buttonVariable = document.getElementById('buttonID');
  console.log('buttonID');
  var addedPicture = 'http://mediad.publicbroadcasting.net/p/wnku/files/201506/bob_dylan.jpg';
  component.initialize(body);
  component.render(addedPicture);



  }//end of window.onload





/*CHECK FOR CHANGE: document.getElementById('buttonID')*/
