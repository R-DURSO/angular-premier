export class CurveService{
 values =[
        { 
            name :'courbe1',
            valeurX : [],
            valeurY : [],
    },
    {
        name :'courbe2',
        valeurX : [],
        valeurY : [],
    },{
        name :'courbe3',
        valeurX : [],
        valeurY : [],
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
    
}