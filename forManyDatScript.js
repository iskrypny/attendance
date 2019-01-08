DeletingStyle();
FormatingRecords();
DeletingRecords();

  function DeletingStyle(){
    var tmp = document.getElementsByTagName('style');
    tmp[0].innerHTML = '';
  }

  function FormatingRecords(){
    var arr = document.getElementsByTagName('tr');
    var del = 0;
    arr[0].style.backgroundColor = '#C4C4C4'; /*gray color*/
    arr[1].style.backgroundColor = '#BAFFAD'; /*green color*/
    arr[arr.length-1].style.backgroundColor = '#FF8A8A'; /*red color*/
    forOneData = arr[1].getElementsByTagName('td');
    prevData = forOneData[1].innerHTML.substr(0,5);
    for (var i = 2; i <= (arr.length-3); i++){
      arrInner = arr[i].getElementsByTagName('td'); 
      if (arrInner[1].innerHTML.substr(0,5) !== prevData){
        arr[i].style.backgroundColor = '#BAFFAD'; /*green color*/
        arr[i-1].style.backgroundColor = '#FF8A8A'; /*red color*/
      }
    prevData = arrInner[1].innerHTML.substr(0,5);
  }
}

  function DeletingRecords(){
    var arr = document.getElementsByTagName('tr');
    for (var i = 0; i < arr.length; i++){
      if (arr[i].hasAttribute('style')){
        arr[i].style.display = '';
        }
        else { 
          arr[i].style.display = 'none';
      }
    }
  }