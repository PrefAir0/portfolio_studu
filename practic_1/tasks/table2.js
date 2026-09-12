count = 0


for (i = 2; i < 10; i++ ){
        document.writeln("<tr>")
        for(j = 1; j < 10; j++){
            
            x = j + "*" + i +  "=" + i*j

            if (j ==3 && i == 5 || j == 5 && i == 4){

            }
            else{
                if (j ==2 && i == 5){
                document.writeln("<td colspan = '2'>" + x)
                }
                else{
                    if (j == 5 && i == 3){
                    document.writeln("<td rowspan='2'>" + x)
                    }
                    else{
                        document.writeln("<td>" + x)
                    }  
                } 
            }
        }
        document.writeln("</tr>")
    }

    