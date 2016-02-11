$(document).ready(function(){
    //we want to update the tags on every keyboard input
    //first get all the elements
    var inputs = document.getElementsByClassName('main__input');
    var len = inputs.length;
    //direct mapping $inputs[i] === $ins[i]
    for(var i=0; i<len; i++){
        inputs[i].onkeyup = function(){
            if(this.className === "main__input main__input-email"){
                var ins = document.getElementById(this.id + '-val');
                ins.innerHTML = "<a href=mailto:"+this.value+" target='_blank'>"+this.value+"</a>";
            } else if (this.className === "main__input main__input-link") {
                var ins = document.getElementById(this.id + '-val');
                ins.innerHTML = "<a href="+this.value+" target='_blank'>"+this.value+"</a>";
            } else if (this.className === "main__input main__input-twitter"){
                var ins = document.getElementById(this.id + '-val');
                ins.innerHTML = "<a href=https://twitter.com/"+this.value+" target='_blank'>@"+this.value+"</a>";
            } else {
                var ins = document.getElementById(this.id + '-val');
                ins.innerHTML = this.value;
            }
        };
    }
})
