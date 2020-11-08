import React, { forwardRef } from 'react';
import dataFetch from '../../data/fetch';
import  MaterialTable from 'material-table';
import { ListItemSecondaryAction } from '@material-ui/core';
import AddBox from '@material-ui/icons/AddBox';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import {Icons} from 'material-table';
import MediaCard from '../Card/MediaCard'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

interface TodoProps {
  endpoint: string,
}

interface TodoState{
  items: dataApi[]
}
type dataApi = {
  
  BUDGET: number;
}

export default class PanelComponent extends React.Component<TodoProps> {
  public state = {
   items: [],
    budget: []
  }

  
  

  constructor(props: TodoProps) {
    super(props);
    this.state = {
      items: [],
      budget: []
    }
  }

  componentDidMount() {

    const stringParams = "limit=1000000&query_type=and";
    const queryParams = new URLSearchParams(stringParams);


    dataFetch(this.props.endpoint, queryParams)
      .then(items => this.setState({ items: items , budget: items.BUDGET}))
  }

  render() {
  
    if (this.state.items.length === 0) {
     return <div>Loading...</div>
    }


    const dataType = this.props.endpoint;
    // let budget = objArray.map(({ foo }) => foo)

    let budget = [1,2,3,4]
    budget = this.state.items.map( (item: any) => item.BUDGET);

const numberToReal = (numero) => {
  var numero = numero.toFixed(2).split('.');
  numero[0] = "R$ " + numero[0].split(/(?=(?:...)*$)/).join('.');
  return numero.join(',');
}

const sum =  (total, currentValue, currentIndex, arr)  =>{
  var newVal = currentValue; // The new value is the current number
  if (currentIndex > 0) { // If we are in the second position or more, sum the last value, which is the curent position minus one.
      newVal += total[currentIndex-1];
  }
  total.push(newVal);
  return total;
}

const sortedNumbers = (num) => num.sort((a, b) => b - a)




const findMax = (...budget) => {
  let currentMax = budget[0]; // 2

  for (const number of budget) {
    if (number > currentMax) {
      console.log(number, currentMax);
      currentMax = number;
    }
  }
  console.log('Largest ', currentMax);
  return currentMax;
};

const maxNum = findMax(...budget);

const maxNumReais = maxNum? numberToReal(maxNum) : '';

const filterByValue = (array, string) => {
  return array.filter((data) =>  JSON.stringify(data).toLowerCase().indexOf(string.toLowerCase()) !== -1);
}

var result = this.state.items.map((item:any)  => ({ budget: parseInt(item.BUDGET), guests: item.NUMBER_OF_GUESTS, style: item.STYLE }));

const classic = result?  filterByValue(result, 'classico') : '';
const rustico = result?  filterByValue(result, 'rustico') : '';


const moderno = result?  filterByValue(result, 'moderno') : '';



// var rusticoSum = rustico.map((item:any)  => item.budget);
 var guestsRusticoSum = rustico.map((item:any)  => parseInt(item.guests));

 var budgetRusticoSum = rustico.map((item:any)  => parseInt(item.budget));
 var budgetModernoSum = moderno.map((item:any)  => parseInt(item.budget));
 var budgetClassSum = classic.map((item:any)  => parseInt(item.budget));

 var sumgRustico = sortedNumbers(guestsRusticoSum);
 var budgetRusSort = sortedNumbers(budgetRusticoSum);
 const sumgRus = sumgRustico? sumgRustico.slice(0, rustico.length).reduce((a, b) => a + b, 0) : '';
 const budgetRus = budgetRusSort? budgetRusSort.slice(0, budgetRusticoSum.length).reduce((a, b) => parseInt(a) + parseInt(b), 0) : '';

const noZero = budgetRusSort.filter(val => val !== 0);
 const averageBudget = budgetRusSort? budgetRusSort.reduce((a,v,i)=>(a*i+v)/(i+1), 0) : '';
  console.log('budgetRusSort',budgetRusticoSum.join().split(','))

const StrArr = budgetRusticoSum.join().split(',');

const StrMod = budgetModernoSum.join().split(',');
const StrClass = budgetClassSum.join().split(',');

  const SumSum = StrArr
  .map( function(elt){ // assure the value can be converted into an integer
    return /^\d+$/.test(elt) ? parseInt(elt) : 0; 
  })
  .reduce( function(a,b){ // sum all resulting numbers
    return a+b
  })

  const SumSumMod = StrMod
  .map( function(elt){ // assure the value can be converted into an integer
    return /^\d+$/.test(elt) ? parseInt(elt) : 0; 
  })
  .reduce( function(a,b){ // sum all resulting numbers
    return a+b
  })


  const SumSumClass = StrClass
  .map( function(elt){ // assure the value can be converted into an integer
    return /^\d+$/.test(elt) ? parseInt(elt) : 0; 
  })
  .reduce( function(a,b){ // sum all resulting numbers
    return a+b
  })
  const sumTotal = SumSumClass + SumSumMod + SumSum;


  // console.log('budget Rustico', budgetRus)

  // console.log('guests sort', sumgRustico)
  // console.log('average sort', averageBudget)

  // console.log('SumRus',parseInt(sumgRus) )
  //console.log('SumRus',budgetRus )
// var sumRustico = rusticoSum.reduce(sum, []);
//  console.log('rusticoSum', rustico? sumgRustico : '', )
//   console.log('rusticoSum', rustico? sumRustico : '', )
// console.log('Classico', classic, classic.length );
// console.log('Rustico', rustico, rustico.length );
// console.log('Moderno', moderno, moderno.length );
    //  const a = this.state.items.map((item: dataApi) => (
    //     budget = item.BUDGET
    //   ));

     const tableIcons: Icons = {
      Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
      Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
      Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
      Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
      DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
      Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
      Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
      Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
      FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
      LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
      NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
      PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
      ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
      Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
      SortArrow: forwardRef((props, ref) => <ArrowUpward {...props} ref={ref} />),
      ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
      ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
    };



    // const a = this.state.items.map((item: dataApi) => (
    //     this.state.dataTable.BUDGET = item.BUDGET
    //   ));

    //   const b =  {brands.map((brand) => {
    //     return <p>{brand}</p>;
    //   })}

    const imageCas =  'https://see.news/wp-content/uploads/2019/11/Marriage-Wayfinder-Blog-Featured-Image-750x375.jpg';
const dataRustico = {
  content:rustico.length,
  title:"Casamentos Rusticos",
  image:imageCas,
  sum: numberToReal(SumSum)
}
const dataModerno = {
  content:moderno.length,
  title:"Casamentos Modernos",
  image:imageCas,
  sum: numberToReal(SumSumMod)
}

const dataClassic ={
  content:classic.length,
  title:"Casamentos Classicos",
  image:imageCas,
  sum: numberToReal(SumSumClass)
}
const dataWedding = { 
  content:maxNumReais,
  image:imageCas,
  title:"Casamentos",
  sum: numberToReal(sumTotal)
}

    return (
      <div>





    {dataType === 'wedding' ? 
    <div>
       <Grid container spacing={3}>
       <Grid item xs={3}>
       <MediaCard  data={dataWedding}/> 
       </Grid>
       <Grid item xs={3}>
       <MediaCard  data={dataClassic} /> 
       </Grid>
       <Grid item xs={3}>
       <MediaCard  data={dataRustico} />
       </Grid>
       <Grid item xs={3}>
       <MediaCard  data={dataModerno} /> 

       </Grid>
       </Grid>
    <br/>
  
    <MaterialTable
    icons={tableIcons}
    columns={[
      { title: 'Budget', field: 'budget' },
      { title: 'Estilo', field: 'style' },
      { title: 'Convidados', field: 'guests' },
    ]}
    data={result}
    localization={{ toolbar: {searchPlaceholder:'Pesquisar' }}}
    title="Tabela de Casamento"
  /> </div> :
                ''}  
    
      </div>
    )
  }
}