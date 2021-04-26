
export class CurveService{
 values =[
        { 
            name :'courbe1',
            valeurX : [0,0,0,0,0],
            valeurY : [0,0,0,0,0],
            status : false
    },
    {
        name :'courbe2',
        valeurX : [0,0,0,0,0],
        valeurY : [0,0,0,0,0],
        status : false
    },{
        name :'courbe3',
        valeurX : [0,0,0,0,0],
        valeurY : [0,0,0,0,0],
        status : false
    }
    ]

    getName(index : number){
        return this.values[index].name;

    }
    getValuesX(index : number){
        return this.values[index].valeurX;
    }
    getValuesY(index : number){
        return this.values[index].valeurY;
    }
    modifyValues(index :number, ValuesX : number[], ValuesY : number[] ){
        this.values[index].valeurX = ValuesX;
        this.values[index].valeurY = ValuesY;
        console.log("valeur de la courbe "+index+" modifier  nouvelle valeur :");
        console.log(this.values[index].valeurX);
        console.log(this.values[index].valeurY);
    }
    deleteValues(index  : number ){
        this.values[index].valeurX = [];
        this.values[index].valeurY = [];
        console.log("courbe : "+index+" valeur supprimer");
        console.log(this.values[index].valeurX);
        console.log(this.values[index].valeurY);
    }
    modifyStatus(index : number){
        if( this.values[index].status == true){
            this.values[index].status = false;
        }else{
            this.values[index].status = true;
        }        
    }
    getStatus(index : number){
        return this.values[index].status;
    }
}