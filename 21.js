function descendingAscending(a,b,c)
{
    if((a>=b)&&(a>=c)){
        if(b>=c){
            console.log("descending order ",a,b,c);
            console.log("ascending order ",c,b,a);
        }
        else{
            console.log("descending order ",a,c,b);
            console.log("ascending order ",b,c,a);
        }
    }
return [a,b,c]

}
descendingAscending(90,20,60);