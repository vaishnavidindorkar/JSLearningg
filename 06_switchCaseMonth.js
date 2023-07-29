console.log(`===============Assignment 1==========`);
function monthOfYear(month)
{
    if(month==0 || month == " " || month == undefined || month == null)
    {
        console.log(`Invalid input : ${month}, Enter valid input between 1 to 12`);
    }
switch (month) {
    case 1:
    console.log(`Month : ${month} -> January`);
  
        
        break;
        case 2:
            console.log(`Month : ${month} -> February`);
          
            break;
            case 3:
                console.log(` Month : ${month} -> March`);
            
                break;
                case 4 :
                    console.log(` Month : ${month} -> April`);
                  
                    break;
                    case 5 :
                        console.log(`Month : ${month} -> May`);
                       
                        break;
                        case 6 :
                            console.log(`Month : ${month} -> June`);
                            
                            break;
                            case 7 :
                                console.log(`Month : ${month} -> July`);
                               
                                break;
                                case 8 :
                                console.log(`Month : ${month} -> August`);
                         
                                break;
                                case 9 :
                                console.log(`Month : ${month} -> September`);
                                
                                break;
                                case 10 :
                                console.log(`Month : ${month} -> October`);
                                
                                break;
                                case 11 :
                                console.log(`Month : ${month} -> November`);
                             
                                break;
                                case 12 :
                                console.log(`Month : ${month} -> December`);
                              

    default:
        break;
}
}
monthOfYear(0);
monthOfYear(2);
monthOfYear(5);
monthOfYear(12);
monthOfYear(15);
monthOfYear(100);
monthOfYear(null);
monthOfYear(undefined);

