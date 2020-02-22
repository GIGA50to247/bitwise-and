function bitwise_and(){
    var str1 =("5.13".split("."));
    var str2 =("3.11".split("."));
    var arr1 = []; var arr2= [];
        for (var z=0; z<str1.length; z++){
            arr1[z]=parseInt(str1[z]);
            arr2[z]=parseInt(str2[z]);
            var app1 = arr1[0] & arr2[0];
            var app2 = arr1[1] & arr2[1];
         }
    document.write("["+app1+","+app2+"]");
}