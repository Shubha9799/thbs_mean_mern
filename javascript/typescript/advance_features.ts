class AdvanceFeatures{
    list=[
        {name:'generic datatype'},
        {name:'access modifier'}
    ]
    getFeatureList(key:string|number,list:object[])
    {
        return list.filter((ele:any,index,arr)=>
        {
            return ele.name.includes(key||'modifier');
        });
    }
}

let af:AdvanceFeatures=new AdvanceFeatures();
let list=[
    {name:'generic datatype'},
    {name:'access modifier'}
]
let result=af.getFeatureList('modifier',list);
console.log(result);